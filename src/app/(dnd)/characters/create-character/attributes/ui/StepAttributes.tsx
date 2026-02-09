"use client";

import { z } from "zod";

import useDNDCharacterStore from "@/store/characte.store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { AttributeCard } from "./AttributeCard";

/**
 * Ability score schema
 * - Uses the Standard Array rules (8–15)
 * - Each value must be unique (no duplicates)
 */
const attributesSchema = z
  .object({
    strength: z.number().min(8).max(15),
    dexterity: z.number().min(8).max(15),
    constitution: z.number().min(8).max(15),
    intelligence: z.number().min(8).max(15),
    wisdom: z.number().min(8).max(15),
    charisma: z.number().min(8).max(15),
  })
  .refine(
    (data) => {
      const values = Object.values(data);
      const uniqueValues = new Set(values);
      return uniqueValues.size === values.length;
    },
    {
      message: "Cada atributo debe tener un valor diferente",
    },
  );

type FormData = z.infer<typeof attributesSchema>;

const stats = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
] as const;

/**
 * Short labels used for UI and racial bonus display
 */
const ATTRIBUTE_KEYS = {
  strength: "STR",
  dexterity: "DEX",
  constitution: "CON",
  intelligence: "INT",
  wisdom: "WIS",
  charisma: "CHA",
} as const;

export const StepAttributes = () => {
  const router = useRouter();

  const {
    character,
    setAttributes,
    setIniciative,
    nextStep,
    prevStep,
    setHitPoints,
  } = useDNDCharacterStore();

  /**
   * Initialize form with previously selected values
   * Falls back to standard array defaults
   */
  const form = useForm<FormData>({
    resolver: zodResolver(attributesSchema),
    defaultValues: {
      strength: character.attributes?.strength || 15,
      dexterity: character.attributes?.dexterity || 14,
      constitution: character.attributes?.constitution || 13,
      intelligence: character.attributes?.intelligence || 12,
      wisdom: character.attributes?.wisdom || 10,
      charisma: character.attributes?.charisma || 8,
    },
    mode: "onChange",
  });

  // Watch current values to disable already-used scores
  const currentValues = form.watch();

  // Used scores are passed to AttributeCard to prevent duplicates
  const usedScores = Object.values(currentValues);

  /**
   * Submit handler
   * - Applies racial bonuses
   * - Calculates initiative and hit points
   * - Moves to the Background step
   */
  const onSubmit = (data: FormData) => {
    setAttributes({
      strength: data.strength,
      dexterity: data.dexterity,
      constitution: data.constitution,
      intelligence: data.intelligence,
      wisdom: data.wisdom,
      charisma: data.charisma,
    });

    nextStep();

    if (process.env.NODE_ENV === "development") {
      console.log("HYDRATED STATE", useDNDCharacterStore.getState().character);
    }
    router.push("/characters/create-character/background");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h1 className="font-serif text-2xl font-semibold">Ability Scores</h1>
          <p className="text-muted-foreground">
            Assign the following scores to your abilities: 15, 14, 13, 12, 10, 8
          </p>

          {/* Racial bonuses preview */}
          {character.abilityBonuses &&
            Object.keys(character.abilityBonuses).length > 0 && (
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                <p className="text-sm font-semibold mb-2">Racial Bonuses:</p>
                <div className="flex gap-2 flex-wrap">
                  {Object.entries(character.abilityBonuses).map(
                    ([key, value]) =>
                      value > 0 && (
                        <span
                          key={key}
                          className="text-xs bg-blue-100 px-2 py-1 rounded"
                        >
                          {ATTRIBUTE_KEYS[key as keyof typeof ATTRIBUTE_KEYS]} +
                          {value}
                        </span>
                      ),
                  )}
                </div>
              </div>
            )}
        </div>
        {/* Attributes grid */}
        <div className="grid grid-cols-6">
          {(Object.keys(ATTRIBUTE_KEYS) as Array<keyof FormData>).map((key) => (
            <AttributeCard
              key={key}
              label={key}
              value={currentValues[key]}
              usedScores={usedScores}
              control={form.control}
              name={key}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between mb-20">
          <Button
            variant={"outline"}
            type="button"
            onClick={() => {
              prevStep();
              router.back();
            }}
          >
            Previous
          </Button>
          <Button variant={"outline"} type="submit">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};
