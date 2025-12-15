"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FluffyOption, PurpleOption } from "@/interface/races/DNDRace";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  options: FluffyOption[];
}

export const AbBonusAccordionOptions = ({
  description,
  title,
  options,
}: Props) => {
  const [selected, setSelected] = useState<string[]>(Array(2).fill(""));

  const handleChange = (i: number, value: string) => {
    setSelected((prev) => {
      const copy = [...prev];
      copy[i] = value;
      return copy;
    });
  };

  // opciones válidas para un select específico
  const getAvailableFor = (i: number) => {
    const others = new Set(
      selected.filter((_, idx) => idx !== i).filter(Boolean)
    );

    return options.filter((o) => !others.has(o.ability_score.index));
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-gray-200 px-4 cursor-pointer"
    >
      <AccordionItem value="item-1" className="">
        <AccordionTrigger> {title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
            <p>{description}</p>

            {Array.from({ length: 2 }).map((_, i) => (
              <Select
                key={i}
                onValueChange={(v) => handleChange(i, v)}
                value={selected[i]}
              >
                <SelectTrigger className="w-full border-gray-200 mt-2">
                  <SelectValue placeholder="Select Ability Bonus" />
                </SelectTrigger>

                <SelectContent>
                  {getAvailableFor(i).map((opt) => (
                    <SelectItem
                      key={opt.ability_score.index}
                      value={opt.ability_score.index}
                    >
                      {opt.ability_score.name} +{opt.bonus}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
