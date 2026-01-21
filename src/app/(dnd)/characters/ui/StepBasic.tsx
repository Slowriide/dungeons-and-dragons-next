"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DND_CLASSES } from "@/data/dndData";
import { useClassesDetails } from "@/hooks/classes/useClassesDetails";
import { ClassFeatures } from "./class-features/ClassFeatures";
import { useRouter } from "next/navigation";
import useDNDCharacterStore from "@/store/characte.store";
import {
  CharacterClass,
  CharacterClassFeature,
  CharacterSkill,
  ClassProficiency,
} from "@/interface/character/DNDCharacter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { findProficiencyName } from "../utils/findItemNamet";
import { getProficiencyBonus } from "../utils/getProficiencyBonus";
import { DND_SKILLS } from "@/data/skills";
import { BackgroundAccordion } from "../create-character/background/ui/accordions/BackgroundAccordion";
import { EquipmentSelector } from "./class-features/EquipmentSelector";
import { equipment } from "../../../../mocks/data/equipment";
import { EQUIPMENT_OPTIONS } from "@/data/RaceEquipmentOptions";
import { resolveStartingEquipment } from "../utils/getStartingEquipment";
import { useEquipmentLookup } from "@/hooks/equipment/useEquipmentByIndex";
import { mapDNDEquipmentToEquipment } from "@/utils/equipment/mapDNDequimentToCharacterEquipment";
import { it } from "node:test";
import { useClassLevels } from "@/hooks/classes/useClassLevels";
import { useFeaturesLevelsDetails } from "@/hooks/classes/useFeaturesLevelsDetails";
import { ClassFeature } from "@/interface/classes/ClassFeature";
import { useEffect, useMemo, useRef, useState } from "react";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

//Schema base
const baseSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  class: z.string().min(1, "Debes seleccionar una clase"),
  level: z.number().int().min(1).max(20),

  skills: z.array(z.string()),
  instruments: z.array(z.string()),
  tools: z.array(z.string()),
  equipment: z.array(z.string()).optional(),
  selectedEquipmentOption: z.string(),
});

type FormData = z.infer<typeof baseSchema>;

export const StepBasic = () => {
  const router = useRouter();
  const hydrated = useStoreHydrated();

  const {
    character,
    setName,
    setClass,
    setLevel,
    setHitDie,
    nextStep,
    setSkills,
    setClassWeaponProficiencies,
    addEquipment,
    setSelectedEquipmentOption,
    removeEquipment,
    setClassProficiencies,
    setProficiencyBonus,
    setClassFeatures,
    addLanguage,
    addGold,
  } = useDNDCharacterStore();

  const defaultValues = useMemo(
    () => ({
      name: character.name || "",
      class: character.characterClass || "",
      level: character.level || 1,
      skills: character.skills?.map((sk) => sk.index) || [],
      instruments:
        character.classProficiencies
          ?.filter((p) => p.type === "instrument")
          .map((p) => p.index) || [],

      tools:
        character.classProficiencies
          ?.filter((p) => p.type === "tool")
          .map((p) => p.index) || [],

      selectedEquipmentOption: character.selectedEquipmentOption || "",
    }),
    [hydrated, character],
  );

  const form = useForm<FormData>({
    resolver: zodResolver(baseSchema),
    defaultValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (hydrated) {
      form.reset({
        name: character.name || "",
        class: character.characterClass || "",
        level: character.level || 1,
        skills: character.skills?.map((sk) => sk.index) || [],
        instruments:
          character.classProficiencies
            ?.filter((p) => p.type === "instrument")
            .map((p) => p.index) || [],
        tools:
          character.classProficiencies
            ?.filter((p) => p.type === "tool")
            .map((p) => p.index) || [],
        selectedEquipmentOption: character.selectedEquipmentOption || "",
      });
    }
  }, [hydrated, character, form]);

  const selected = form.watch("class");
  const classIndex = selected?.toLowerCase();
  const safeIndexes = classIndex ? [classIndex] : [];

  const prevClassRef = useRef(selected);

  useEffect(() => {
    // Solo limpiar si la clase cambió Y no es la carga inicial
    if (hydrated && prevClassRef.current && prevClassRef.current !== selected) {
      form.setValue("skills", []);
      form.setValue("instruments", []);
      form.setValue("tools", []);
      form.setValue("selectedEquipmentOption", "");
    }
    prevClassRef.current = selected;
  }, [selected, hydrated, form]);

  const { data, isError, isLoading } = useClassesDetails({
    classIndexes: safeIndexes ? safeIndexes : [],
  });

  const {
    data: levelsData,
    isError: isLevelsError,
    isLoading: isLevelLoading,
  } = useClassLevels({ classIndex: safeIndexes[0] ?? [] });

  const featureIndexes =
    levelsData?.classLevels?.[0]?.features.map((f) => f.index) || [];

  const {
    data: features,
    isLoading: isFeaturesLoading,
    isError: isFeaturesError,
  } = useFeaturesLevelsDetails({
    featureIndexes: featureIndexes ?? [],
    enabled: featureIndexes.length > 0,
  });

  //all equipments map
  const equipmentByIndex = useEquipmentLookup();

  const classDetails = data?.dndClass?.[0];

  //equipment options for this class
  const equipmentOptions = EQUIPMENT_OPTIONS.find(
    (opt) => opt.dndClass === classDetails?.index,
  );

  // errors
  if (isError || isLevelsError || isFeaturesError) {
    return <div>Error loading class data</div>;
  }

  // loading
  if (!classIndex) {
    return <div>Select a class to continue</div>;
  }

  if (isLoading || isLevelLoading || isFeaturesLoading) {
    return <div>Loading class information...</div>;
  }
  if (!hydrated) {
    return <div>Loading...</div>;
  }

  const validateDynamicRules = () => {
    if (!classDetails) return true;

    const skillChoices = classDetails.proficiency_choices?.[0]?.choose ?? 0;

    if (form.getValues("skills").length !== skillChoices) {
      form.setError("skills", {
        message: `Debes seleccionar exactamente ${skillChoices} habilidades`,
      });
      return false;
    }

    if (classDetails.name === "Bard") {
      const instrumentChoices =
        classDetails.proficiency_choices?.[1]?.choose ?? 0;

      if (form.getValues("instruments").length !== instrumentChoices) {
        form.setError("instruments", {
          message: "Selecciona los instrumentos requeridos",
        });
        return false;
      }
    }

    if (classDetails.name === "Monk") {
      if (form.getValues("tools").length !== 1) {
        form.setError("tools", {
          message: "Debes seleccionar 1 herramienta o instrumento",
        });
        return false;
      }
    }

    if (form.getValues("selectedEquipmentOption").length !== 1) {
      form.setError("selectedEquipmentOption", {
        message: `Debes seleccionar tu equipo`,
      });
      return false;
    }

    return true;
  };

  const onSubmit = (data: FormData) => {
    if (!classDetails) return;
    if (!validateDynamicRules()) return;

    //Basic data
    setName(data.name);
    setClass(data.class as CharacterClass);
    setLevel(data.level);

    setHitDie(classDetails.hit_die);

    setProficiencyBonus(getProficiencyBonus(data.level));

    //Skills
    const skillsData: CharacterSkill[] = data.skills.map((skillIndex) => {
      const skillInfo = DND_SKILLS[skillIndex as keyof typeof DND_SKILLS];
      return {
        index: skillIndex,
        name: skillInfo.name,
        proficient: true,
        attribute: skillInfo.attribute,
      };
    });

    setSkills(skillsData);

    //Features

    const classFeaturesData = features?.dndClassFeature ?? [];

    const classFeatures: CharacterClassFeature[] = classFeaturesData.map(
      (feature) => {
        return {
          index: feature.index,
          level: feature.level ?? 1,
          description: feature.desc.join(" ") ?? "",
          name: feature.name ?? "",
        };
      },
    );

    setClassFeatures(classFeatures);

    //Proficiencies

    const ToolOrInstumentClassProficiencies: ClassProficiency[] = [];

    data.instruments.forEach((instrumentIndex) => {
      ToolOrInstumentClassProficiencies.push({
        index: instrumentIndex,
        type: "instrument",
      });
    });

    data.tools.forEach((toolsIndex) => {
      ToolOrInstumentClassProficiencies.push({
        index: toolsIndex,
        type: "tool",
      });
    });

    setClassProficiencies(ToolOrInstumentClassProficiencies);

    //class equipment

    //if the options changes, delete prev selected equipment
    if (data.selectedEquipmentOption !== character.selectedEquipmentOption) {
      const startEquipment =
        character.equipment?.filter((eq) => eq.source === "class") || [];

      startEquipment.forEach((eq) => removeEquipment(eq.index));
    }

    //find my selected equipment in the options
    const selectedOpt = equipmentOptions?.options.find(
      (opt) => opt.optionIndex === data.selectedEquipmentOption,
    );

    selectedOpt?.items.forEach((item) => {
      if (
        item.index.toLowerCase() === "gp" ||
        item.index.toLowerCase() === "gold" ||
        item.index.toLowerCase() === "pouch"
      ) {
        addGold(item.quantity);
      }

      //find api selected item by id in all items map
      const apiEquipment = equipmentByIndex[item.index];

      //map to my item
      if (apiEquipment) {
        const equipment = mapDNDEquipmentToEquipment(
          apiEquipment,
          item.quantity,
        );

        addEquipment(equipment);
      } else {
        addEquipment({
          index: item.index,
          name: item.name,
          quantity: item.quantity,
          type: "other",
          equipped: false,
          description: "Custom equipment",
          source: "class",
        });
      }
    });

    setSelectedEquipmentOption(data.selectedEquipmentOption);

    //Weapon profs
    const weaponProfs =
      classDetails.proficiencies
        ?.filter((p) => p.index.includes("weapon"))
        .map((p) => p.name) ?? [];

    setClassWeaponProficiencies(weaponProfs);

    console.log("HYDRATED STATE", useDNDCharacterStore.getState().character);
    nextStep();

    router.push("/characters/create-character/race");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-5 gap-x-2 gap-y-6">
          <div className="col-span-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-5">
                  <FormLabel className="font-serif font-semibold">
                    Character's Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Ej. Thorin Black Spine" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {/* Class */}
          <FormField
            control={form.control}
            name="class"
            render={({ field }) => (
              <FormItem className="col-span-3">
                <FormLabel>Class</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Classes</SelectLabel>
                      {DND_CLASSES.map((dndClass) => (
                        <SelectItem key={dndClass.index} value={dndClass.index}>
                          {dndClass.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          {/* Level */}
          <FormField
            control={form.control}
            name="level"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Nivel</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={20}
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Proficiencies */}
          {data && !isError && (
            <div className="col-span-5 space-y-6">
              <h1 className="font-serif text-2xl font-semibold">
                Proficiencies
              </h1>
              <BackgroundAccordion
                title="Class Proficiencies"
                description={
                  classDetails?.proficiencies
                    .map((prof) => prof.name)
                    .join(", ") ?? ""
                }
              />
              <div className="col-span-2 space-y-6">
                <ClassFeatures
                  dndClass={data.dndClass[0]}
                  control={form.control}
                />
              </div>
            </div>
          )}

          {/* Features */}
          {features && features.dndClassFeature.length > 0 && (
            <div className="col-span-5 space-y-6">
              <h1 className="font-serif text-2xl font-semibold">Features</h1>
              {features.dndClassFeature.map((feature) => (
                <BackgroundAccordion
                  key={feature.index}
                  title={`Level ${feature.level}: ${feature.name}`}
                  description={feature.desc.join(" ")}
                />
              ))}
            </div>
          )}

          {/* Equipment */}
          {data && !isError && (
            <div className="col-span-5 space-y-6">
              <h1 className="font-serif text-2xl font-semibold">Equipment</h1>

              <div className="col-span-2 space-y-6">
                {classDetails?.starting_equipment_options && (
                  <EquipmentSelector
                    selectedClass={classDetails}
                    control={form.control}
                  />
                )}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button variant={"outline"} type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
