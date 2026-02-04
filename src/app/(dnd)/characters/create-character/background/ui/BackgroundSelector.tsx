"use client";

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
import { BACKGROUNDS } from "@/data/Backgrounds";
import { Control } from "react-hook-form";

interface Props {
  control: Control<any>;
  value?: string;
}

export const BackgroundSelector = ({ value, control }: Props) => {
  return (
    <FormField
      control={control}
      name="backgroundId"
      render={({ field }) => (
        <FormItem>
          <Select value={field.value} onValueChange={field.onChange}>
            <FormControl>
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Select background" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {BACKGROUNDS.map((bg) => (
                <SelectItem key={bg.id} value={bg.id}>
                  {bg.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
