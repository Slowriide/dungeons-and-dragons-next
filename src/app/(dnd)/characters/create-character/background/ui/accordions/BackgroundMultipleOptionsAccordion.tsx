"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BackgroundChoiceGroup } from "@/data/Backgrounds";
import { Control } from "react-hook-form";

interface Props {
  title: string;
  description: string;
  options: BackgroundChoiceGroup;
  control: Control<any>;
}

export const BackgroundMultipleOptionsAccordion = ({
  description,
  title,
  options,
  control,
}: Props) => {
  // opciones válidas para un select específico

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
            <FormField
              name="selectedLanguages"
              control={control}
              render={({ field }) => {
                const currentValues = Array.isArray(field.value)
                  ? field.value
                  : [];

                const getAvailableFor = (i: number) => {
                  const others = new Set(
                    currentValues.filter(
                      (val, idx) => idx !== i && Boolean(val)
                    )
                  );

                  return options.options.filter((o) => !others.has(o.index));
                };

                return (
                  <FormItem>
                    {Array.from({ length: options.choose }).map((_, i) => {
                      const currentValue = currentValues[i] || "";
                      return (
                        <Select
                          key={i}
                          onValueChange={(value) => {
                            // Actualizar el array en la posición i
                            const newValues = [...currentValues];
                            // Asegurar que el array tenga el tamaño correcto
                            while (newValues.length < options.choose) {
                              newValues.push("");
                            }
                            newValues[i] = value;
                            field.onChange(newValues);
                          }}
                          value={currentValue}
                        >
                          <SelectTrigger className="w-full border-gray-200 mt-2">
                            <SelectValue placeholder="Select Ability Bonus" />
                          </SelectTrigger>

                          <SelectContent>
                            {getAvailableFor(i).map((opt) => (
                              <SelectItem key={opt.index} value={opt.index}>
                                {opt.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      );
                    })}
                  </FormItem>
                );
              }}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
