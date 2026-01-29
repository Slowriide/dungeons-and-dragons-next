"use client";

import { useRacesDetails } from "@/hooks/races/useRacesDetails";
import { RaceAccordion } from "./accordions/RaceAccordion";
import { RaceAccordionOptions } from "./accordions/RaceAccordionOptions";
import { AbBonusAccordionOptions } from "./accordions/AbBonusAccordionOptions";
import { TraitsAccordion } from "./accordions/TraitsAccordion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useDNDCharacterStore from "@/store/characte.store";
import z from "zod/v3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { CharacterRace, Trait } from "@/interface/character/DNDCharacter";
import { PersonalitySelector } from "../../background/ui/accordions/PersonalitySelector";
import { Alignment } from "../../../../../../interface/character/DNDCharacter";
import { DND_ALIGNMENTS } from "@/interface/DNDAlingments";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DND_RACES } from "@/data/dndData";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

interface Props {
  raceIndex: string;
}

const baseSchema = z.object({
  race: z.string(),
  raceTraits: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
    }),
  ),
  selectedTraits: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string(),
    }),
  ),
  abilityBonus: z.array(z.string()), //half-elf
  language: z.array(z.string()), //half-elf human
  tools: z.array(z.string()), //dwarf
  alignment: z.string().min(1, "Debes seleccionar un alignment"),
});

type FormData = z.infer<typeof baseSchema>;

export const RaceManageDetails = ({ raceIndex }: Props) => {
  const router = useRouter();
  const hydrated = useStoreHydrated();
  const shouldFetch = Boolean(raceIndex);

  const { data, isLoading, isError } = useRacesDetails({
    racesIndexes: shouldFetch ? [raceIndex] : [],
  });

  const {
    character,
    setSize,
    setRaceLanguages,
    setSpeed,
    setAlignment,
    setLanguages,
    setRaceTraits,
    setSelectedTraits,
    setRace,
    setAbilityBonuses,
    setSelectedAbilityBonuses,
    prevStep,
    nextStep,
  } = useDNDCharacterStore();

  const defaultValues = useMemo(
    () => ({
      race: raceIndex || "",
      raceTraits: character.raceTraits || [],
      selectedTraits: character.selectedTraits || [],
      abilityBonus: character.selectedAbilityBonuses || [],
      language: character.raceLanguages || [],
      tools: [],
      alignment: character.alignment,
    }),
    [hydrated, raceIndex],
  );

  const form = useForm<FormData>({
    resolver: zodResolver(baseSchema),
    defaultValues: defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (!hydrated) return;

    form.reset({
      race: raceIndex || "",
      raceTraits: character.raceTraits || [],
      selectedTraits: character.selectedTraits || [],
      abilityBonus: character.selectedAbilityBonuses || [],
      language: character.raceLanguages || [],
      tools: [],
      alignment: character.alignment,
    });
  }, [hydrated]);

  const prevRaceRef = useRef(raceIndex);
  const selectedRace = form.watch("race");
  useEffect(() => {
    // Solo limpiar si la clase cambió Y no es la carga inicial
    if (!hydrated) return;
    if (
      hydrated &&
      prevRaceRef.current &&
      prevRaceRef.current !== selectedRace
    ) {
      form.reset({
        race: raceIndex,
        raceTraits: [],
        selectedTraits: [],
        abilityBonus: [],
        language: [],
        tools: [],
        alignment: "",
      });
    }

    prevRaceRef.current = raceIndex;
  }, [raceIndex, hydrated]);

  if (!data || isLoading) {
    return <p>loading</p>;
  }

  const race = data?.races[0];

  const hasLangOptions = race?.language_options?.from;
  const hasAbOptions = race?.ability_bonus_options?.from;

  const abilityBonucesList = race?.ability_bonuses
    .map((ab) => `${ab.ability_score.name} +${ab.bonus}`)
    .join(", ");

  const raceTraits = race.traits.map((trait) => trait.index);

  const validateDynamicRules = (data: FormData) => {
    if (!race) return true;

    if (data.alignment === "") {
      form.setError("alignment", {
        message: `Debes seleccionar un alignment`,
      });
      return false;
    }

    if (race.name === "Half-Elf") {
      const langOptions = race.language_options?.choose ?? 0;
      if (form.getValues("language").length !== langOptions) {
        form.setError("language", {
          message: `Debes seleccionar Lenguajes`,
        });
        return false;
      }

      const abBonusChoices = race.ability_bonus_options?.choose ?? 0;

      if (form.getValues("abilityBonus").length !== abBonusChoices) {
        form.setError("abilityBonus", {
          message: "Selecciona los bonos requeridos",
        });
        return false;
      }

      if (form.getValues("selectedTraits").length !== 1) {
        form.setError("selectedTraits", {
          message: "Selecciona los traits requeridos",
        });
        return false;
      }
    }

    if (race.name === "Dragonborn") {
      if (form.getValues("selectedTraits").length !== 1) {
        form.setError("selectedTraits", {
          message: "Debes seleccionar 1 trait",
        });
        return false;
      }
    }

    if (race.name === "Dwarf") {
      if (form.getValues("selectedTraits").length !== 1) {
        form.setError("tools", {
          message: "Debes seleccionar 1 herramienta",
        });
        return false;
      }
    }
    if (race.name === "human") {
      if (form.getValues("language").length !== 1) {
        form.setError("language", {
          message: "Debes seleccionar 1 lenguaje",
        });
        return false;
      }
    }

    return true;
  };

  const handleAutomaticTraitsLoaded = (automaticTraits: Trait[]) => {
    form.setValue("raceTraits", automaticTraits);
  };

  const onSubmit = (data: FormData) => {
    if (!race) return true;
    if (!validateDynamicRules(data)) return;

    const raceName = race.name as CharacterRace;
    const autoLanguages = race.languages.map((lang) => lang.index);

    setRace(raceName);
    setSize(race.size);
    setSpeed(race.speed);
    setAlignment(data.alignment as Alignment);
    setLanguages(autoLanguages);
    setRaceLanguages(data.language);
    setRaceTraits(data.raceTraits);
    setSelectedTraits(data.selectedTraits);

    let abilityBonuses: {
      strength?: number;
      dexterity?: number;
      constitution?: number;
      intelligence?: number;
      wisdom?: number;
      charisma?: number;
    } = {};

    if (hasAbOptions) {
      setSelectedAbilityBonuses(data.abilityBonus);
    }

    if (hasAbOptions) {
      //base race abilitybonus
      race.ability_bonuses.forEach((ab) => {
        const mapping: Record<string, keyof typeof abilityBonuses> = {
          str: "strength",
          dex: "dexterity",
          con: "constitution",
          int: "intelligence",
          wis: "wisdom",
          cha: "charisma",
        };
        const key = mapping[ab.ability_score.index]; //strength for example
        if (key) {
          abilityBonuses[key] = ab.bonus;
        }
      });

      //selected abilitybonus

      data.abilityBonus.forEach((abIndex) => {
        const mapping: Record<string, keyof typeof abilityBonuses> = {
          str: "strength",
          dex: "dexterity",
          con: "constitution",
          int: "intelligence",
          wis: "wisdom",
          cha: "charisma",
        };
        const key = mapping[abIndex];
        if (key) {
          abilityBonuses[key] = (abilityBonuses[key] || 0) + 1;
        }
      });
    } else {
      //race without options only base
      race.ability_bonuses.forEach((ab) => {
        const mapping: Record<string, keyof typeof abilityBonuses> = {
          str: "strength",
          dex: "dexterity",
          con: "constitution",
          int: "intelligence",
          wis: "wisdom",
          cha: "charisma",
        };

        const key = mapping[ab.ability_score.index];
        if (key) {
          abilityBonuses[key] = ab.bonus;
        }
      });
    }
    setAbilityBonuses(abilityBonuses);

    console.log("HYDRATED STATE", useDNDCharacterStore.getState().character);
    nextStep();

    router.push("/characters/create-character/attributes");
  };

  const alignments = DND_ALIGNMENTS.map((alignment) => alignment.index);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="min-h-screen bg-background space-y-6 ">
          <FormField
            control={form.control}
            name="race"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-serif text-xl font-semibold mb-2">
                  Selected Race
                </FormLabel>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                    router.replace(
                      `/characters/create-character/race/${value}`,
                    );
                  }}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Classes</SelectLabel>
                      {DND_RACES.map((dndRace) => (
                        <SelectItem key={dndRace.index} value={dndRace.index}>
                          {dndRace.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <h1 className="font-serif text-xl font-semibold mb-2">
            Characteristics
          </h1>
          <RaceAccordion title={"Size"} description={race.size_description} />
          <RaceAccordion
            title={"Speed"}
            description={`Your speed is ${race.speed.toString()} fts.`}
          />

          <PersonalitySelector
            title="Alignment"
            control={form.control}
            description={race.alignment}
            fieldName="alignment"
            group={alignments}
          />

          {hasLangOptions ? (
            <RaceAccordionOptions
              title={"Languages"}
              description={race.language_desc}
              options={race.language_options?.from.options ?? []}
              control={form.control}
            />
          ) : (
            <RaceAccordion
              title={"Languages"}
              description={race.language_desc}
            />
          )}
          <h1 className="font-serif text-xl font-semibold mb-2">Bonuses</h1>
          {hasAbOptions ? (
            <AbBonusAccordionOptions
              title={"Ability bonuses"}
              description={abilityBonucesList}
              options={race.ability_bonus_options?.from.options ?? []}
              control={form.control}
            />
          ) : (
            <RaceAccordion
              title={"Ability bonuses"}
              description={abilityBonucesList}
            />
          )}
          {race.name !== "Human" && (
            <div>
              <h1 className="font-serif text-xl font-semibold mb-2">Traits</h1>
              <TraitsAccordion
                indexes={raceTraits}
                control={form.control}
                onTraitsLoaded={handleAutomaticTraitsLoaded}
              />
            </div>
          )}

          <div className="flex justify-between mb-20">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => {
                router.push("/characters/create-character/race");
              }}
            >
              Previous
            </Button>
            <Button variant={"outline"} type="submit">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
