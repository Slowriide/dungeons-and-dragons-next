"use client";

import { useFilteredEquipment } from "@/hooks/equipment/useFilteredEquipment";
import { isArmor, isWeapon } from "@/utils/equipment/isWeapon";
import { ArmorDetailsCard } from "./ArmorDetailsCard";
import { EquipmentDetailsCard } from "./EquipmentDetailsCard";
import { WeaponDetailsCard } from "./WeaponDetailsCard";
import { notFound } from "next/navigation";

interface Props {
  equipmentIndex: string;
}
export const EquipmentDetailsView = ({ equipmentIndex }: Props) => {
  const {
    findedItem: equipment,
    isLoading,
    isError,
  } = useFilteredEquipment(1, equipmentIndex);

  if (!equipment) {
    notFound();
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
