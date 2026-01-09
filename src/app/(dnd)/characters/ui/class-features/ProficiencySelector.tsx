"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useMemo, useState } from "react";
import { array } from "zod";

interface Props {
  options: Array<{ index: string; name: string }>;
  count: number;
  value: string[]; // 👈 Recibe valor del form
  onChange: (value: string[]) => void; // 👈 Callback para actualizar
  desc?: string;
}

export const ProficiencySelector = ({
  options,
  count,
  value = [],
  onChange,
  desc,
}: Props) => {
  // Local state of selects
  const [selected, setSelected] = useState<string[]>(Array(count).fill(""));

  // Sincronizar el estado local con el value del form (importante para cuando se resetea)
  useEffect(() => {
    if (value.length === 0) {
      setSelected(Array(count).fill(""));
    } else if (value.length > 0 && value.length <= count) {
      // Si hay valores del form, usarlos y rellenar el resto con ""
      const padded = [...value, ...Array(count - value.length).fill("")];
      setSelected(padded);
    }
  }, [value, count]);

  const handleChange = (i: number, newValue: string) => {
    const newSelected = [...selected];
    newSelected[i] = newValue;
    setSelected(newSelected);

    // Actualizar el form solo con los valores no vacíos
    const validValues = newSelected.filter(Boolean);
    onChange(validValues);
  };

  // opciones válidas para un select específico
  const getAvailableFor = (i: number) => {
    const others = new Set(
      selected.filter((_, idx) => idx !== i).filter(Boolean)
    );

    return options.filter((o) => !others.has(o.index));
  };

  // Lista de todos los seleccionados (para debug o UI feedback)
  const chosenCount = useMemo(
    () => selected.filter(Boolean).length,
    [selected]
  );

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <Select
          key={i}
          onValueChange={(v) => handleChange(i, v)}
          value={selected[i]}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={
                desc ? `${desc} ${i + 1}` : `Choose proficiency ${i + 1}`
              }
            />
          </SelectTrigger>

          <SelectContent>
            {getAvailableFor(i).map((opt) => (
              <SelectItem key={opt.index} value={opt.index}>
                {opt.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}

      {/* Contador opcional para feedback visual */}
      <p className="text-xs text-muted-foreground">
        {chosenCount} / {count} selected
      </p>
    </div>
  );
};
