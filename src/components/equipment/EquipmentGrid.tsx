"use client";

import { useState } from "react";
import { EquipmentCard } from "./EquipmentCard";
import { SelectedEquipmentCard } from "./SelectedEquipmentCard";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { Pagination } from "../Pagination";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";
import { SelectedWeaponCard } from "./SelectedWeaponCard";
import { isArmor, isWeapon } from "@/utils/equipment/isWeapon";
import { WeaponCard } from "./WeaponCard";
import { SelectedArmorCard } from "./SelectedArmorCard";
import { DNDArmor } from "@/interface/equipment/DNDArmor";
import { ArmorCard } from "./ArmorCard";

interface Props {
  totalPages: number;
  paginated: DNDEquipment[];
}

export const EquipmentGrid = ({ paginated, totalPages }: Props) => {
  const [selectedEquipment, setSelectedEquipment] = useState<
    DNDEquipment | DNDWeapon | DNDArmor | null
  >(null);
  const selected = selectedEquipment !== null;
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {selectedEquipment ? (
        isWeapon(selectedEquipment) ? (
          <SelectedWeaponCard
            equipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
          />
        ) : isArmor(selectedEquipment) ? (
          <SelectedArmorCard
            equipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
          />
        ) : (
          <SelectedEquipmentCard
            equipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
          />
        )
      ) : (
        paginated.map((equipment) =>
          isWeapon(equipment) ? (
            <WeaponCard
              key={equipment.index}
              equipment={equipment}
              setSelectedEquipment={setSelectedEquipment}
            />
          ) : isArmor(equipment) ? (
            <ArmorCard
              key={equipment.index}
              equipment={equipment}
              setSelectedEquipment={setSelectedEquipment}
            />
          ) : (
            <EquipmentCard
              key={equipment.index}
              equipment={equipment}
              setSelectedEquipment={setSelectedEquipment}
            />
          ),
        )
      )}
      {!selected && <Pagination totalPages={totalPages} />}
    </main>
  );
};
