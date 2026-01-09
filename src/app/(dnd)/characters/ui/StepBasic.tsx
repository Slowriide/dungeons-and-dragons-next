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
import { CharacterClass } from "@/interface/character/DNDCharacter";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

//Schema base
const baseSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  class: z.string().min(1, "Debes seleccionar una clase"),
  level: z.number().int().min(1).max(20),

  skills: z.array(z.string()),
  instruments: z.array(z.string()),
  tools: z.array(z.string()),
});

type FormData = z.infer<typeof baseSchema>;

export const StepBasic = () => {
  const router = useRouter();

  const {
    character,
    setName,
    setClass,
    setLevel,
    nextStep,
    setSkills,
    setClassWeaponProficiencies,
    addItems,
  } = useDNDCharacterStore();

  const form = useForm<FormData>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      name: character.name || "",
      class: character.characterClass || "",
      level: character.level || 1,
      skills: [],
      instruments: [],
      tools: [],
    },
    mode: "onChange",
  });

  const selected = form.watch("class");
  const classIndex = selected?.toLowerCase();
  const safeIndexes = classIndex ? [classIndex] : [];

  const { data, isError, isLoading } = useClassesDetails({
    classIndexes: safeIndexes,
  });

  const classDetails = data?.dndClass?.[0];

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

    return true;
  };

  const onSubmit = (data: FormData) => {
    if (!classDetails) return;
    if (!validateDynamicRules()) return;

    //Basic data
    setName(data.name);
    setClass(data.class as CharacterClass);
    setLevel(data.level);

    //Skills
    const skillsData: Record<string, number> = {};
    data.skills.forEach((skill) => {
      skillsData[skill] = 0;
    });
    setSkills(skillsData);

    // Guardar instrumentos y herramientas en items
    const items: string[] = [
      ...(data.instruments || []),
      ...(data.tools || []),
    ];

    if (items.length > 0) {
      addItems(items);
    }

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

  const canSubmit = form.formState.isValid && classDetails && !isLoading;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div className="grid grid-cols-5 gap-x-2 gap-y-6">
          <div className="col-span-5">
            <p className="text-md font-medium">Name:</p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-5">
                  <FormLabel>Character's Name</FormLabel>
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

          {data && !isError && (
            <div className="col-span-2">
              <ClassFeatures
                dndClass={data.dndClass[0]}
                control={form.control}
              />
            </div>
          )}
        </div>

        <div className="flex justify-end">
          <Button variant={"outline"} type="submit" disabled={!canSubmit}>
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
