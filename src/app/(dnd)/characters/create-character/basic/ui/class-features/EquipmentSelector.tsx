import { Control } from "react-hook-form";
import { EQUIPMENT_OPTIONS } from "@/data/races/RaceEquipmentOptions";
import { DNDClass } from "@/interface/classes/DnDClass";
import { EquipmentSelect } from "./EquipmentSelect";

interface Props {
  selectedClass: DNDClass;
  control: Control<any>;
}

export const EquipmentSelector = ({ selectedClass, control }: Props) => {
  const equipmentOptions = EQUIPMENT_OPTIONS.find(
    (opt) => opt.dndClass === selectedClass.index,
  );

  const options = equipmentOptions?.options.map((opt) => ({
    value: opt.optionIndex,
    label: opt.description,
  }));

  return (
    <div className="space-y-6">
      <EquipmentSelect
        title="Select Equipment"
        description="Choose your weapons"
        options={options ?? []}
        fieldName="selectedEquipmentOption"
        control={control}
      />
    </div>
  );
};
