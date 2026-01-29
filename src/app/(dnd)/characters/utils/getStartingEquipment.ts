import { EQUIPMENT_OPTIONS } from "@/data/races/RaceEquipmentOptions";
import { DNDClass } from "@/interface/classes/DnDClass";

export function resolveStartingEquipment(
  dndClass: DNDClass["index"],
  selectedOption: string,
) {
  const classEquipment = EQUIPMENT_OPTIONS.find(
    (opt) => opt.dndClass === dndClass,
  );

  if (!classEquipment) return [];

  const choice = classEquipment.options.find(
    (opt) => opt.optionIndex === selectedOption,
  );

  return choice?.items ?? [];
}
