"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trait } from "@/interface/character/DNDCharacter";

import {
  FluffyOption,
  Language,
  PurpleOption,
} from "@/interface/races/DNDRace";
import { useEffect, useState } from "react";
import { Control } from "react-hook-form";
import { boolean } from "zod";

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
  title: string;
  description: string;
  options: FluffyOption[];
  control: Control<FormData>;
}

export const AbBonusAccordionOptions = ({
  description,
  title,
  options,
  control,
}: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-gray-200 px-4 cursor-pointer"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger> {title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
            <p>{description}</p>

            <FormField
              control={control}
              name="abilityBonus"
              render={({ field }) => (
                <FormItem>
                  <div className="space-y-2">
                    {Array.from({ length: 2 }).map((_, i) => {
                      const currentValue = field.value?.[i] || "";

                      // Exclude options in other selects
                      const availableOptions = options.filter((opt) => {
                        const optionIndex = opt.ability_score.index;

                        //in this select include
                        if (optionIndex === currentValue) {
                          return true;
                        }

                        const isSelectedInOther = field.value?.some(
                          (selectedVal, idx) =>
                            idx !== i &&
                            selectedVal === opt.ability_score.index,
                        );
                        return !isSelectedInOther;
                      });

                      return (
                        <Select
                          key={i}
                          onValueChange={(value) => {
                            // copy array
                            const newValue = [...(field.value || [])];

                            // update position i
                            newValue[i] = value;

                            // Filter empty/undefined values
                            field.onChange(
                              newValue.filter((v) => v && v !== ""),
                            );
                          }}
                          value={currentValue}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full border-gray-200 mt-2">
                              <SelectValue placeholder="Select Ability Bonus" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            {availableOptions.map((opt) => (
                              <SelectItem
                                key={opt.ability_score.index}
                                value={opt.ability_score.index}
                              >
                                {opt.ability_score.name} +{opt.bonus}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
