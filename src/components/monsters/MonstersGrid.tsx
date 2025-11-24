"use client";

import { useState } from "react";
import { MonsterCard } from "./MonsterCard";
import { Monster, monsters } from "@/mocks/data/monsters";
import { useMonstersList } from "@/hooks/monsters/useMonstersList";
import { useMonstersDetails } from "@/hooks/monsters/useMonstersDetails";
import { DNDMonster } from "@/interface/monsters/DnDMonster";
import { Pagination } from "../Pagination";

export const MonstersGrid = () => {
  const { data: monstersList, isLoading: loadingList } = useMonstersList({
    take: 12,
  });

  const monstersIndexes =
    monstersList?.results?.map((monster) => monster.index) || [];

  const { totalPages, monsters, isLoading, isError } = useMonstersDetails({
    take: 12,
    monstersIndexes,
  });

  if (isLoading || !monsters) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-4 gap-2">
        {
          //   selectedSpell ? (
          //   <SelectedSpellCard
          //     spell={selectedSpell}
          //     setSelectedSpell={setSelectedSpell}
          //   />
          // ) :
          //   (

          monsters.map((monster) => (
            <MonsterCard key={monster.name} monster={monster} />
          ))
          // )
        }
      </div>
      <Pagination totalPages={totalPages ?? 1} />
    </main>
  );
};
