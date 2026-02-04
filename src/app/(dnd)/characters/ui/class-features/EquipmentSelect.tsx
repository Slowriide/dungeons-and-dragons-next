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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Control } from "react-hook-form";

interface Option {
  value: string; // "A", "B", "C"
  label: string; // "(A) Chain Mail, Shield..."
}

interface Props {
  title: string;
  description: string;
  options: Option[];
  fieldName: string;
  control: Control<any>;
}

export const EquipmentSelect = ({
  description,
  title,
  options,
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
            <FormField
              control={control}
              name={fieldName}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> {description}</FormLabel>
                  <Select
                    value={field.value || ""}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={title} />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {options.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
