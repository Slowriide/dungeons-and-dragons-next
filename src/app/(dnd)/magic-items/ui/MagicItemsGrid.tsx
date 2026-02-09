"use client";

import { useState } from "react";
import { Pagination } from "../../../../components/Pagination";

import { SelectedMagicItemCard } from "./SelectedMagicItemCard";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { MagicItemsCard } from "./MagicItemCard";

interface Props {
  magicItems: DNDMagicItem[];
  totalPages: number;
}

/**
 * MagicItemsGrid
 *
 * Displays magic items in a grid. Handles selection of an item
 * to show details and integrates pagination.
 *
 * Features:
 * - Grid of MagicItemsCard
 * - Click on a card shows SelectedMagicItemCard
 * - Pagination visible only when no item is selected
 */
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

      {/* Pagination only if no item is selected */}
      {!selected && <Pagination totalPages={totalPages} />}
    </main>
  );
};
