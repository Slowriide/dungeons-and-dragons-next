"use server";

import { getMonsters } from "./getMonsters";

interface Options {
  take?: number;
  page: number;
  query: string;
  alignments: string[];
  challenge_rating?: string[];
}

export const getMonstersDetails = async ({
  take = 12,
  alignments,
  page,
  query,
  challenge_rating = [],
}: Options) => {
  const monsters = await getMonsters({ challenge_rating });

  // --------------   SEARCH FILTER     ------------------
  const filteredMonstersByQuery = monsters.filter((monster) => {
    const filtered =
      monster.name.toLowerCase().includes(query) ||
      monster.index.toLowerCase().includes(query);

    return filtered;
  });

  // -------------- ALIGNMENT FILTER ------------------

  const filteredAlignment = filteredMonstersByQuery?.filter((mon) => {
    if (alignments.length === 0) return true;
    return alignments.includes(mon.alignment.toLowerCase());
  });

  // -------------- CHALLENGE RATING ------------------

  const filteredMonsters = filteredAlignment.filter((mon) => {
    if (challenge_rating.length === 0) return true;
    return challenge_rating.includes(mon.challenge_rating.toString());
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
