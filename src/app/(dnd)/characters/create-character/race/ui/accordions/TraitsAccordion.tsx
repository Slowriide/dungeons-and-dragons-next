import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRaceTraits } from "@/hooks/races/useRaceTraits";
import { DraconicTable } from "../DracocincTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control, useWatch } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Trait } from "@/interface/character/DNDCharacter";
import { useEffect } from "react";
import { fi } from "zod/v4/locales";

interface FormData {
  race: string;
  raceTraits: Trait[];
  selectedTraits: Trait[];
  abilityBonus: string[];
  language: string[];
  tools: string[];
  alignment: string;
}

interface Props {
  indexes: string[];
  control: Control<FormData>;
  onTraitsLoaded?: (automaticTraits: Trait[]) => void;
}

export const TraitsAccordion = ({
  indexes,
  control,
  onTraitsLoaded,
}: Props) => {
  const { data, isLoading, isError } = useRaceTraits({
    traitsIndexes: indexes,
  });

  const currentTraits = useWatch({
    control,
    name: "selectedTraits",
    defaultValue: [],
  });

  useEffect(() => {
    if (data?.trait) {
      // Separar traits automáticos y crear objetos completos
      const automaticTraits: Trait[] = data.trait
        .filter(
          (t) =>
            !t.proficiency_choices?.from &&
            !t.trait_specific?.subtrait_options &&
            !t.language_options?.from,
        )
        .map((t) => ({
          id: t.index,
          name: t.name,
          description: t.desc.join(" "), // Concatenar descripciones
        }));

      // Notificar al padre con los traits completos
      if (onTraitsLoaded && automaticTraits.length > 0) {
        onTraitsLoaded(automaticTraits);
      }
    }
  }, [data, onTraitsLoaded]);

  if (!data || isLoading) {
    return <p>loading</p>;
  }

  const handleTraitSelect = (
    traitIndex: string,
    traitName: string,
    traitDescription: string,
    onChange: (value: Trait[]) => void,
  ) => {
    const existingIndex = currentTraits.findIndex((t) => t.name === traitName);

    let updatedTraits: Trait[];

    if (existingIndex >= 0) {
      // Actualizar trait existente
      updatedTraits = [...currentTraits];
      updatedTraits[existingIndex] = {
        name: traitName,
        description: traitDescription,
        id: traitIndex,
      };
    } else {
      // agregar trait
      updatedTraits = [
        ...currentTraits,
        {
          name: traitName,
          description: traitDescription,
          id: traitIndex,
        },
      ];
    }
    onChange(updatedTraits);
  };

  const traits = data.trait;

  return (
    <div className="space-y-6">
      {traits.map((trait) => {
        // Determinar si este trait tiene opciones
        const hasProfChoices = !!trait.proficiency_choices?.from;
        const hasSubtraits = !!trait.trait_specific?.subtrait_options;
        const isAutomatic = !hasProfChoices && !hasSubtraits;

        return (
          <Accordion
            key={trait.index}
            type="single"
            collapsible
            className="w-full border border-gray-200 px-4 cursor-pointer "
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="">
              <AccordionTrigger>{trait.name}</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div>
                  <p>{trait.desc}</p>

                  {/* Optional Prof Choices */}
                  {hasProfChoices && (
                    <FormField
                      control={control}
                      name="selectedTraits"
                      render={({ field }) => {
                        const currentSelection = field.value.find(
                          (t) => t.name === trait.name,
                        );

                        return (
                          <FormItem>
                            {trait.proficiency_choices?.from && (
                              <Select
                                value={currentSelection?.id || ""}
                                onValueChange={(selectedIndex) => {
                                  const selectedOption =
                                    trait.proficiency_choices?.from.options.find(
                                      (opt) => opt.item.index === selectedIndex,
                                    );

                                  if (selectedOption) {
                                    field.onChange([
                                      {
                                        id: selectedIndex,
                                        name: trait.name,
                                        description: `${trait.name}: ${selectedOption.item.name}`,
                                      },
                                    ]);
                                  }
                                }}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-full border-gray-200 mt-2">
                                    <SelectValue
                                      placeholder={`Select ${trait.name}`}
                                    />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectLabel>{trait.name}</SelectLabel>
                                    {trait.proficiency_choices.from.options.map(
                                      (r) => (
                                        <SelectItem
                                          key={r.item.index}
                                          value={r.item.index}
                                        >
                                          {r.item.name}
                                        </SelectItem>
                                      ),
                                    )}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            )}

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                  )}

                  {/* Dragonborn Trait */}
                  {hasSubtraits && (
                    <div>
                      <DraconicTable traits={traits} />
                      <FormField
                        control={control}
                        name="selectedTraits"
                        render={({ field }) => {
                          const currentSelection = field.value?.find(
                            (t) =>
                              t.name.includes("Draconic Ancestry") ||
                              t.id.includes(trait.index),
                          );

                          return (
                            <FormItem>
                              <FormControl>
                                <Select
                                  value={currentSelection?.id || ""}
                                  onValueChange={(selectedIndex) => {
                                    const selectedOption =
                                      trait.trait_specific?.subtrait_options?.from.options.find(
                                        (opt) =>
                                          opt.item.index === selectedIndex,
                                      );

                                    if (selectedOption) {
                                      field.onChange([
                                        {
                                          id: selectedIndex,
                                          name: selectedOption.item.name,
                                          description: trait.desc.join(" "),
                                        },
                                      ]);
                                    }
                                  }}
                                >
                                  <SelectTrigger className="w-full border-gray-200 mt-2">
                                    <SelectValue
                                      placeholder={`Select ${trait.name}`}
                                    />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <SelectLabel>{trait.name}</SelectLabel>

                                      {trait.trait_specific?.subtrait_options.from.options.map(
                                        (r) => (
                                          <SelectItem
                                            key={r.item.index}
                                            value={r.item.index}
                                          >
                                            {r.item.name}
                                          </SelectItem>
                                        ),
                                      )}
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
};
