"use client";

import { useState } from "react";
import { Pagination } from "../Pagination";
import { MagicItemsCard } from "./MagicItemCard";
import { SelectedMagicItemCard } from "./SelectedMagicItemCard";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

interface Props {
  magicItems: DNDMagicItem[];
  totalPages: number;
}

export const MagicItemsGrid = ({ magicItems, totalPages }: Props) => {
  const [selectedMagicItem, setSelectedMagicItem] =
    useState<DNDMagicItem | null>(null);

  const selected = selectedMagicItem !== null;

  return (
    <main className="lg:col-span-3 space-y-4">
      {selectedMagicItem ? (
        <SelectedMagicItemCard
          magicItem={selectedMagicItem}
          setSelectedMagicItem={setSelectedMagicItem}
        />
      ) : (
        magicItems.map((magicItems) => (
          <MagicItemsCard
            key={magicItems.index}
            magicItem={magicItems}
            setSelectedMagicItem={setSelectedMagicItem}
          />
        ))
      )}

      {!selected && <Pagination totalPages={totalPages} />}
    </main>
  );
};
