"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  options: Array<{ index: string; name: string }>;
  count: number;
  value: string[]; // form value
  onChange: (value: string[]) => void; //Callback to update
  desc?: string;
}

export const ProficiencySelector = ({
  options,
  count,
  value = [],
  onChange,
  desc,
}: Props) => {
  // Asegurar que value sea un array del tamaño correcto
  const currentValue = Array.isArray(value)
    ? [...value]
    : Array(count).fill("");

  // Mientras el array no tenga el tamaño correcto, llenarlo
  while (currentValue.length < count) {
    currentValue.push("");
  }

  const handleChange = (selectedValue: string, index: number) => {
    const newValue = [...currentValue];
    newValue[index] = selectedValue;
    onChange(newValue);
  };

  // Obtener opciones disponibles para cada selector
  const getAvailableOptions = (currentIndex: number) => {
    const selectedValues = currentValue.filter(
      (value, index) => index !== currentIndex && value !== "",
    );
    return options.filter((opt) => !selectedValues.includes(opt.index));
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => {
        const availableOptions = getAvailableOptions(i);
        const selectedValue = currentValue[i] || "";

        return (
          <Select
            key={i}
            value={selectedValue}
            onValueChange={(value) => handleChange(value, i)}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={
                  desc ? `${desc} ${i + 1}` : `Choose proficiency ${i + 1}`
                }
              />
            </SelectTrigger>

            <SelectContent>
              {availableOptions.length > 0 ? (
                availableOptions.map((option) => (
                  <SelectItem key={option.index} value={option.index}>
                    {option.name}
                  </SelectItem>
                ))
              ) : (
                <div className="p-2 text-sm text-muted-foreground text-center">
                  No more options available
                </div>
              )}
            </SelectContent>
          </Select>
        );
      })}
    </div>
  );
};
