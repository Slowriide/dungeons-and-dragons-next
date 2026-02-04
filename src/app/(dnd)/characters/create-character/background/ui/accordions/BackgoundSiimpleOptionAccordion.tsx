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
  FormMessage,
} from "@/components/ui/form";
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
  options: { index: string; name: string }[];
  fieldName: string;
  control: Control<any>;
}

export const BackgroundSimpleOptionAccordion = ({
  title,
  description,
  options,
  fieldName,
  control,
}: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border px-4"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <p>{description}</p>

          <FormField
            name={fieldName}
            control={control}
            render={({ field }) => (
              <FormItem>
                <Select
                  value={field.value || ""}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select proficiency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options.map((opt) => (
                      <SelectItem key={opt.index} value={opt.index}>
                        {opt.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
