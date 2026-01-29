// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getMonstersDetails } from "@/services/monsters/getMonstersDetails";
import { useSearchParams } from "next/navigation";
import { getRacesDetails } from "@/services/races/getRacesDetails";

interface Props {
  racesIndexes: string[];
}

export const useRacesDetails = ({ racesIndexes }: Props) => {
  const results = useQuery({
    queryKey: ["races-details", racesIndexes],
    queryFn: () => getRacesDetails({ racesIndexes, query }),
    enabled: racesIndexes.length > 0,
    staleTime: Infinity,
  });

  const search = useSearchParams();

  const query = search.get("query") ?? "";

  const races = results.data?.races ?? [];

  const filteredResults = races.filter(
    (race) => race.index.includes(query) || race.name.includes(query),
  );

  return {
    ...results,
    filteredResults,
  };
};
