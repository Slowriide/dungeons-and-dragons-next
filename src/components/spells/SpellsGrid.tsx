"use client";
import { Spell, spells } from "@/mocks/data/spells";
import { SpellsCard } from "./SpellsCard";
import { useState } from "react";
import { SelectedSpellCard } from "./SelectedSpellCard";
import { useSpellsList } from "@/hooks/spells/useSpellsList";
import { Pagination } from "../Pagination";
import { useSpellsDetails } from "@/hooks/spells/useSpellsDetails";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  page: number;
}

export const SpellsGrid = ({ page }: Props) => {
  const [selectedSpell, setSelectedSpell] = useState<DNDSpell | null>(null);

  const { data, paginatedResults, totalPages, isError, isLoading } =
    useSpellsList({
      take: 12,
    });

  const spellIndexes = paginatedResults?.map((s) => s.index) || [];

  const {
    data: detailedSpells,
    isLoading: isLoadingDetails,
    isError: isErrorDetails,
  } = useSpellsDetails(spellIndexes);

  if (isLoading || isLoadingDetails || !detailedSpells) {
    return <p>Loading...</p>;
  }

  if (isError || isErrorDetails) {
    return <p>Error</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {selectedSpell ? (
        <SelectedSpellCard
          spell={selectedSpell}
          setSelectedSpell={setSelectedSpell}
        />
      ) : (
        detailedSpells.spells.map((spell) => (
          <SpellsCard
            key={spell.name}
            spell={spell}
            setSelectedSpell={setSelectedSpell}
          />
        ))
      )}
      <Pagination totalPages={totalPages ?? 1} />
    </main>
  );
};
