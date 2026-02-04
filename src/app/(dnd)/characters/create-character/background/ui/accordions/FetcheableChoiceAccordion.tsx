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
import { useEquipmentCategoryDetails } from "@/hooks/equipment/useEquipmentCategoryDetails";
import { Control } from "react-hook-form";

interface Props {
  title: string;
  description: string;
  indexes: string[];
  fieldName: string;
  control: Control<any>;
}

export const FetcheableChoiceAccordion = ({
  title,
  description,
  indexes,
  control,
  fieldName,
}: Props) => {
  const { data, isLoading, isError } = useEquipmentCategoryDetails({
    equipmentCatIndexes: indexes,
  });

  if (!data || isLoading) {
    return <p>Is loading...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

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
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full border-gray-200 mt-2">
                        <SelectValue placeholder="Select Proficiency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data.equipmentCategories.flatMap((opt) =>
                        opt.equipment.map((e) => (
                          <SelectItem key={e.index} value={e.index}>
                            {e.name}
                          </SelectItem>
                        )),
                      )}
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
