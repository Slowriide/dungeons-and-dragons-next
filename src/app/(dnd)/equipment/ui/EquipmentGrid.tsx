"use client";

import { useState } from "react";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { Pagination } from "../../../../components/Pagination";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";
import { isArmor, isWeapon } from "@/utils/equipment/isWeapon";
import { SelectedArmorCard } from "./SelectedArmorCard";
import { DNDArmor } from "@/interface/equipment/DNDArmor";
import { ArmorCard } from "./ArmorCard";
import { SelectedWeaponCard } from "./SelectedWeaponCard";
import { SelectedEquipmentCard } from "./SelectedEquipmentCard";
import { WeaponCard } from "./WeaponCard";
import { EquipmentCard } from "./EquipmentCard";

interface Props {
  totalPages: number;
  paginated: DNDEquipment[];
}

/**
 * Client-side equipment grid.
 *
 * Handles:
 * - Displaying paginated equipment cards
 * - Switching between list view and detail view
 * - Delegating rendering based on equipment type
 */
export const EquipmentGrid = ({ paginated, totalPages }: Props) => {
  /**
   * Selected equipment acts as a view switch:
   * - null → grid view
   * - item → detail view
   */
  const [selectedEquipment, setSelectedEquipment] = useState<
    DNDEquipment | DNDWeapon | DNDArmor | null
  >(null);

  const selected = selectedEquipment !== null;

  return (
    <main className="lg:col-span-3 space-y-4">
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

      {/* Pagination only visible in grid view */}
      {!selected && <Pagination totalPages={totalPages} />}
    </main>
  );
};
