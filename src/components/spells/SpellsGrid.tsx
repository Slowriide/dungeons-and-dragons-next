"use client";
import { SpellsCard } from "./SpellsCard";
import { useState } from "react";
import { SelectedSpellCard } from "./SelectedSpellCard";
import { Pagination } from "../Pagination";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  spells: DNDSpell[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

export const SpellsGrid = ({
  spells,
  totalPages,
  currentPage,
  totalCount,
}: Props) => {
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
      {!selected && <Pagination totalPages={totalPages ?? 1} />}
    </main>
  );
};
