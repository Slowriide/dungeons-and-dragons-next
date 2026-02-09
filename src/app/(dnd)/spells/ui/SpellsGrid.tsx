"use client";
import { SpellsCard } from "./SpellsCard";
import { useState } from "react";
import { SelectedSpellCard } from "./SelectedSpellCard";
import { Pagination } from "../../../../components/Pagination";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  spells: DNDSpell[];
  totalPages: number;
}

/**
 * SpellsGrid
 *
 * Renders a list of spells with pagination.
 * Allows switching between:
 * - spell list view
 * - single spell detail view
 */
export const SpellsGrid = ({ spells, totalPages }: Props) => {
  const [selectedSpell, setSelectedSpell] = useState<DNDSpell | null>(null);
  const selected = selectedSpell !== null;

  return (
    <main className="lg:col-span-3 space-y-4 ">
      {!spells.length && (
        <p className="text-muted-foreground">No spells found</p>
      )}

      {selectedSpell ? (
        <SelectedSpellCard
          spell={selectedSpell}
          setSelectedSpell={setSelectedSpell}
        />
      ) : (
        spells?.map((spell) => (
          <SpellsCard
            key={spell.index}
            spell={spell}
            setSelectedSpell={setSelectedSpell}
          />
        ))
      )}

      {/* Pagination only if no item is selected */}
      {!selected && <Pagination totalPages={totalPages ?? 1} />}
    </main>
  );
};
