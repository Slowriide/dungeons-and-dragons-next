"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { getMonsters } from "@/actions/monsters/getMonsters";

interface Options {
  take?: number;
}

export const useMonstersList = ({ take = 12 }: Options) => {
  const search = useSearchParams();

  const page = Number(search.get("page") || 1);
  const challenge_rating = search.getAll("challenge_rating");

  const result = useQuery({
    queryKey: ["monsters", { page, challenge_rating }],
    queryFn: () => getMonsters({ challenge_rating }), // server action
    staleTime: Infinity,
  });

  // const results = { ...result };

  // const count = result.data?.count || 0;

  // const totalPages = take ? Math.ceil(count / take) : null;

  // const start = (page - 1) * take;
  // const end = page * take;

  // const paginatedResults = results.data?.results.slice(start, end);

  return {
    ...result,
    // , totalPages, paginatedResults
  };
};
