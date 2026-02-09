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
import { Control } from "react-hook-form";

interface Props {
  label: string;
  value: number;
  usedScores: number[];
  control: Control<any>;
  name: string;
}

/**
 * Standard Array values (D&D 5e)
 */
const SCORES = [8, 10, 12, 13, 14, 15];

/**
 * Calculates the D&D ability modifier
 * Formula: floor((score - 10) / 2)
 */
function getModifier(score: number) {
  return Math.floor((score - 10) / 2);
}

export const AttributeCard = ({
  label,
  value,
  usedScores,
  control,
  name,
}: Props) => {
  // Calculate and format the modifier (+2, -1, etc.)
  const modifier = getModifier(value);
  const formattedModifier = modifier >= 0 ? `+${modifier}` : `${modifier}`;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="relative w-28 h-36 rounded-lg border  flex flex-col items-center  py-3 ">
            {/* Label */}
            <span className="text-xs font-semibold tracking-widest uppercase text-red-500 justify-start">
              {label}
            </span>

            <div className="flex flex-1 items-center ">
              <Select
                value={String(field.value)}
                onValueChange={(v) => field.onChange(Number(v))}
              >
                <FormControl>
                  <SelectTrigger className="text-center">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* Empty option (useful for validation resets) */}
                  <SelectItem value="-">-</SelectItem>

                  {/* Available standard scores */}
                  {SCORES.map((score) => {
                    const isUsed =
                      usedScores.includes(score) && score !== field.value;
                    return (
                      <SelectItem
                        key={score}
                        value={String(score)}
                        disabled={isUsed}
                        className={isUsed ? "opacity-50" : ""}
                      >
                        {score}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Floating modifier badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border bg-white px-3 py-1 text-sm font-semibold text-red-500 ">
              {formattedModifier}
            </div>
          </div>

          {/* Validation message */}
          <FormMessage className="text-center mt-6" />
        </FormItem>
      )}
    />
  );
};
