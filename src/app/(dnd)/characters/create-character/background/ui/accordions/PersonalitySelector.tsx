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
  group: string[];
  fieldName: string;
  control: Control<any>;
}

export const PersonalitySelector = ({
  description,
  title,
  group,
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
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      value={field.value || ""}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full border-gray-200 mt-2">
                        <SelectValue placeholder={title} />
                      </SelectTrigger>

                      <SelectContent>
                        {group.map((opt, index) => (
                          <SelectItem key={index} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
