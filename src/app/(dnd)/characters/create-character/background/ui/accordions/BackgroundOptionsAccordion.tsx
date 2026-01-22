"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

interface Props {
  title: string;
  description: string;
  index: number;
  group: {
    choose: number;
    options: { index: string; name: string }[];
  };
  fieldName: string;
  control: Control<any>;
}

export const BackgroundOptionsAccordion = ({
  description,
  title,
  group,
  index,
  fieldName,
  control,
}: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-gray-200 px-4 cursor-pointer"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="">
        <AccordionTrigger> {title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
            <p>{description}</p>

            <FormField
              control={control}
              name={fieldName}
              render={({ field }) => {
                const currentValue = Array.isArray(field.value)
                  ? field.value[index] || ""
                  : "";

                return (
                  <FormItem>
                    <FormControl>
                      <Select
                        onValueChange={(value) => {
                          const currentArray = Array.isArray(field.value)
                            ? [...field.value]
                            : [];

                          while (currentArray.length <= index) {
                            currentArray.push("");
                          }

                          currentArray[index] = value;
                          field.onChange(currentArray);
                        }}
                        value={currentValue}
                      >
                        <SelectTrigger className="w-full border-gray-200 mt-2">
                          <SelectValue placeholder="Select Equipment" />
                        </SelectTrigger>

                        <SelectContent>
                          {group.options.map((opt) => (
                            <SelectItem key={opt.index} value={opt.index}>
                              {opt.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
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
