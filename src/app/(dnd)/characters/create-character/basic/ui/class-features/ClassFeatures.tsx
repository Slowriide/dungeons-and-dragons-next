"use client";

import { DNDClass } from "@/interface/classes/DnDClass";
import { Control } from "react-hook-form";
import { MonkProficiencyChoice } from "@/interface/monkProf";
import { ProficiencySelector } from "./ProficiencySelector";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props {
  dndClass: DNDClass;
  control: Control<any>;
}

export const ClassFeatures = ({ dndClass, control }: Props) => {
  const proficiencyChoices = dndClass.proficiency_choices;
  const proficiencies = proficiencyChoices[0];
  const extra = proficiencyChoices.length > 1 && proficiencyChoices[1];

  const monkChooses =
    dndClass.name === "Monk"
      ? (proficiencyChoices[1] as MonkProficiencyChoice).from.options.flatMap(
          (opt) =>
            opt.choice
              ? opt.choice.from.options.map((o) => ({
                  index: o.item?.index ?? "",
                  name: o.item?.name ?? "",
                }))
              : []
        )
      : [];

  return (
    <div className="flex flex-row gap-x-10 ">
      {/* Skills */}
      {proficiencyChoices && (
        <FormField
          control={control}
          name="skills"
          render={({ field }) => (
            <FormItem className="w-max">
              <FormLabel>Choose {proficiencies.choose} Skills</FormLabel>
              <FormControl>
                <ProficiencySelector
                  options={proficiencies.from.options.map((o) => o.item)}
                  count={proficiencies.choose}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Bard Instruments */}
      {dndClass.name === "Bard" && extra && (
        <FormField
          control={control}
          name="instruments"
          render={({ field }) => (
            <FormItem className="w-max">
              <FormLabel>Choose {extra.choose} Instruments</FormLabel>
              <FormControl>
                <ProficiencySelector
                  options={extra.from.options.map((o) => o.item)}
                  count={extra.choose}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Monk Tools */}
      {dndClass.name === "Monk" && monkChooses && (
        <FormField
          control={control}
          name="tools"
          render={({ field }) => (
            <FormItem className="w-max">
              <FormLabel>Choose 1 Instrument or Artisan's tools</FormLabel>
              <FormControl>
                <ProficiencySelector
                  options={monkChooses}
                  count={1}
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </div>
  );
};
