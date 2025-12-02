"use client";

import { useFilteredEquipment } from "@/hooks/equipment/useFilteredEquipment";
import { isArmor, isWeapon } from "@/utils/equipment/isWeapon";
import { ArmorDetailsCard } from "./ArmorDetailsCard";
import { EquipmentDetailsCard } from "./EquipmentDetailsCard";
import { WeaponDetailsCard } from "./WeaponDetailsCard";

interface Props {
  equipmentIndex: string;
}
export const EquipmentDetailsView = ({ equipmentIndex }: Props) => {
  const {
    findedItem: equipment,
    isLoading,
    isError,
  } = useFilteredEquipment(1, equipmentIndex);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !equipment) {
    return <p>Error</p>;
  }

  return (
    <div className="flex flex-col mt-10 space-y-6">
      {isWeapon(equipment) ? (
        <WeaponDetailsCard equipment={equipment} />
      ) : isArmor(equipment) ? (
        <ArmorDetailsCard equipment={equipment} />
      ) : (
        <EquipmentDetailsCard equipment={equipment} />
      )}
    </div>
  );
};
