// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getMonstersDetails } from "@/actions/monsters/getMonstersDetails";
import { useSearchParams } from "next/navigation";

interface Props {
  take?: number;
  monstersIndexes: string[];
}

export const useMonstersDetails = ({ monstersIndexes, take = 12 }: Props) => {
  const search = useSearchParams();

  const page = Number(search.get("page") || 1);
  const query = search.get("query")?.toLowerCase() || "";

  const alignments = search.getAll("alignment").map((a) => a.toLowerCase());

  const results = useQuery({
    queryKey: ["monsters-details", monstersIndexes],
    queryFn: () => getMonstersDetails({ monstersIndexes }),
    enabled: monstersIndexes.length > 0,
    staleTime: Infinity,
  });

  const monsters = results.data?.monsters ?? [];

  // -------------- FILTRO por SEARCH (manual) ------------------

  const filteredMonstersByQuery = monsters.filter((monster) => {
    const filtered =
      monster.name.toLowerCase().includes(query) ||
      monster.index.toLowerCase().includes(query);

    return filtered;
  });

  // -------------- FILTRO por ALIGNMENT (manual) ------------------

  const filteredMonsters = filteredMonstersByQuery?.filter((mon) => {
    if (alignments.length === 0) return true;
    return alignments.includes(mon.alignment.toLowerCase());
  });

  // ---------------- PAGINACIÓN --------------------

  const count = filteredMonsters.length;
  const totalPages = Math.ceil(count / take);

  const start = (page - 1) * take;
  const paginatedResults = filteredMonsters.slice(start, start + take);

  return {
    ...results,
    monsters: paginatedResults,
    totalPages,
    count,
  };
};
