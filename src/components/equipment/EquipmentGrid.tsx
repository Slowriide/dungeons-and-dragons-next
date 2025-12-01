"use client";

import { useState } from "react";
import { EquipmentCard } from "./EquipmentCard";
import { SelectedEquipmentCard } from "./SelectedEquipmentCard";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { Pagination } from "../Pagination";
import { useFilteredEquipment } from "@/hooks/equipment/useFilteredEquipment";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";
import { SelectedWeaponCard } from "./SelectedWeaponCard";
import { isWeapon } from "@/utils/equipment/isWeapon";
import { WeaponCard } from "./WeaponCard";

export const EquipmentGrid = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<
    DNDEquipment | DNDWeapon | null
  >(null);

  const { isLoading, paginated, totalPages } = useFilteredEquipment();

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {selectedEquipment ? (
        isWeapon(selectedEquipment) ? (
          <SelectedWeaponCard
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
          ) : (
            <EquipmentCard
              key={equipment.index}
              equipment={equipment}
              setSelectedEquipment={setSelectedEquipment}
            />
          )
        )
      )}

      <Pagination totalPages={totalPages} />
    </main>
  );
};
