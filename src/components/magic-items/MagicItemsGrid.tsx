"use client";

import { useState } from "react";
import { Pagination } from "../Pagination";
import { useFilteredMagicItems } from "@/hooks/magicItems/useFilteredMagicItems";
import { MagicItemsCard } from "./MagicItemCard";
import { SelectedMagicItemCard } from "./SelectedMagicItemCard";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

export const MagicItemsGrid = () => {
  const [selectedMagicItem, setSelectedMagicItem] =
    useState<DNDMagicItem | null>(null);

  const { isLoading, paginated, totalPages } = useFilteredMagicItems();

  console.log(paginated);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {selectedMagicItem ? (
        <SelectedMagicItemCard
          magicItem={selectedMagicItem}
          setSelectedMagicItem={setSelectedMagicItem}
        />
      ) : (
        paginated.map((magicItems) => (
          <MagicItemsCard
            key={magicItems.index}
            magicItem={magicItems}
            setSelectedMagicItem={setSelectedMagicItem}
          />
        ))
      )}

      <Pagination totalPages={totalPages} />
    </main>
  );
};
