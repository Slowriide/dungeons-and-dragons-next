"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo, useState } from "react";

export const MonkProficiencySelector = ({
  options,
  desc,
}: {
  options: { index: string; name: string }[];
  desc?: string;
}) => {
  const [selected, setSelected] = useState({
    first: "",
    second: "",
    third: "",
  });

  const handleChange = (field: "first" | "second" | "third", value: string) => {
    setSelected((prev) => ({ ...prev, [field]: value }));
  };

  const available = useMemo(() => {
    const chosen = new Set(Object.values(selected).filter(Boolean));
    return options.filter((o) => !chosen.has(o.index));
  }, [selected, options]);

  const getAvailableFor = (field: "first" | "second" | "third") => {
    const chosen = new Set(
      Object.entries(selected)
        .filter(([k]) => k !== field)
        .map(([, v]) => v)
        .filter(Boolean)
    );
    return options.filter((o) => !chosen.has(o.index));
  };
  return (
    <div className="space-y-4">
      {/* Select 1 */}

      <Select
        onValueChange={(v) => handleChange("first", v)}
        value={selected.first}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={desc ? `${desc} 1` : "Choose proficiency 1"}
          />
        </SelectTrigger>
        <SelectContent>
          {getAvailableFor("first").map((opt) => (
            <SelectItem key={opt.index} value={opt.index}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Select 2 */}
      <Select
        onValueChange={(v) => handleChange("second", v)}
        value={selected.second}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={desc ? `${desc} 2` : "Choose proficiency 2"}
          />
        </SelectTrigger>
        <SelectContent>
          {getAvailableFor("second").map((opt) => (
            <SelectItem key={opt.index} value={opt.index}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Select 3 */}
      <Select
        onValueChange={(v) => handleChange("third", v)}
        value={selected.third}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={desc ? `${desc} 3` : "Choose proficiency 3"}
          />
        </SelectTrigger>
        <SelectContent>
          {getAvailableFor("third").map((opt) => (
            <SelectItem key={opt.index} value={opt.index}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
