"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

export const ProficencieSelector = ({
  options,
  desc,
  count,
}: {
  options: { index: string; name: string }[];
  desc?: string;
  count: number; // ← nuevo
}) => {
  // selected será un array dinámico: ["", "", ...]
  const [selected, setSelected] = useState<string[]>(Array(count).fill(""));

  const handleChange = (i: number, value: string) => {
    setSelected((prev) => {
      const copy = [...prev];
      copy[i] = value;
      return copy;
    });
  };

  // lista de TODOS los usados (excepto vacíos)
  const chosen = useMemo(() => new Set(selected.filter(Boolean)), [selected]);

  // opciones válidas para un select específico
  const getAvailableFor = (i: number) => {
    const others = new Set(
      selected.filter((_, idx) => idx !== i).filter(Boolean)
    );

    return options.filter((o) => !others.has(o.index));
  };

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
    </div>
  );
};
