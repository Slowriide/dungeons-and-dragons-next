"use client";

import { useState } from "react";
import { EquipmentCard } from "./EquipmentCard";
import { SelectedEquipmentCard } from "./SelectedEquipmentCard";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { Pagination } from "../Pagination";
import { useFilteredEquipment } from "@/hooks/equipment/useFilteredEquipment";

export const EquipmentGrid = () => {
  const [selectedEquipment, setSelectedEquipment] =
    useState<DNDEquipment | null>(null);

  const { isLoading, paginated, totalPages } = useFilteredEquipment();

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {selectedEquipment ? (
        <SelectedEquipmentCard
          equipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
        />
      ) : (
        paginated.map((equipment) => (
          <EquipmentCard
            key={equipment.index}
            equipment={equipment}
            setSelectedEquipment={setSelectedEquipment}
          />
        ))
      )}

      <Pagination totalPages={totalPages} />
    </main>
  );
};
