"use client";
import { Spell, spells } from "@/mocks/data/spells";

import { useState } from "react";
import { EquipmentCard } from "./EquipmentCard";
import { Equipment, equipment } from "@/mocks/data/equipment";
import { SelectedEquipmentCard } from "./SelectedEquipmentCard";
import { useEquipmentList } from "@/hooks/equipment/useEquipmentList";
import { useEquipmentDetails } from "@/hooks/equipment/useEquipmentDetails";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

export const EquipmentGrid = () => {
  const [selectedEquipment, setSelectedEquipment] =
    useState<DNDEquipment | null>(null);

  const { paginatedResults, totalPages } = useEquipmentList({ take: 12 });

  const indexes = paginatedResults?.map((eq) => eq.index) || [];

  const { data, isLoading, isError } = useEquipmentDetails(indexes);

  console.log(paginatedResults);

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {selectedEquipment ? (
        <SelectedEquipmentCard
          equipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
        />
      ) : (
        data.equipment.map((equipment) => (
          <EquipmentCard
            key={equipment.name}
            equipment={equipment}
            setSelectedEquipment={setSelectedEquipment}
          />
        ))
      )}
    </main>
  );
};
