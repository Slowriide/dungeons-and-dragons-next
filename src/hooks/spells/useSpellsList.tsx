"use client";

import { useQuery } from "@tanstack/react-query";
import { getSpells } from "@/services/spells/getSpells";
import { useSearchParams } from "next/navigation";

interface Options {
  take?: number;
}

export const useSpellsList = ({ take = 12 }: Options) => {
  const search = useSearchParams();

  const page = Number(search.get("page") || 1);
  const levels = search.getAll("level");
  const schools = search.getAll("school");
  const query = search.get("query")?.toLowerCase() || "";

  const result = useQuery({
    queryKey: ["spells", { levels, schools }],
    queryFn: () => getSpells({ levels, schools }), // server action
    staleTime: Infinity, // Los hechizos D&D no cambian
  });

  const results = { ...result };

  // --- Query filter ---

  const queryFiltered = results.data?.results.filter((result) => {
    const match =
      result.index.toLowerCase().includes(query) ||
      result.name.toLowerCase().includes(query);

    return match;
  });

  const count = queryFiltered?.length || 0;

  const totalPages = take ? Math.ceil(count / take) : null;

  const start = (page - 1) * take;
  const end = page * take;

  const paginatedResults = queryFiltered
    ? queryFiltered.slice(start, end)
    : result.data?.results.slice(start, end);

  return { ...result, totalPages, paginatedResults };
};
