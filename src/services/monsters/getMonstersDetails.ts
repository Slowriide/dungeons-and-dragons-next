"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Options {
  monstersIndexes: string[];
  take?: number;
  page: number;
  query: string;
  alignments: string[];
}

export const getMonstersDetails = async ({
  monstersIndexes,
  take = 12,
  alignments,
  page,
  query,
}: Options) => {
  const detailPromises = monstersIndexes.map((monster) =>
    dndFetch.get<DNDMonster>(`/monsters/${monster}`),
  );

  const monsters = await Promise.all(detailPromises);

  // --------------   SEARCH FILTER     ------------------
  const filteredMonstersByQuery = monsters.filter((monster) => {
    const filtered =
      monster.name.toLowerCase().includes(query) ||
      monster.index.toLowerCase().includes(query);

    return filtered;
  });

  // -------------- ALIGNMENT FILTER ------------------

  const filteredMonsters = filteredMonstersByQuery?.filter((mon) => {
    if (alignments.length === 0) return true;
    return alignments.includes(mon.alignment.toLowerCase());
  });

  // ---------------- PAGINATION --------------------

  const count = filteredMonsters.length;
  const totalPages = Math.ceil(count / take);

  const start = (page - 1) * take;
  const paginatedResults = filteredMonsters.slice(start, start + take);

  return {
    monsters: paginatedResults,
    totalPages,
    count,
  };
};
