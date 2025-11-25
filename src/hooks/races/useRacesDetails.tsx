// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getMonstersDetails } from "@/actions/monsters/getMonstersDetails";
import { useSearchParams } from "next/navigation";
import { getRacesDetails } from "@/actions/races/getRacesDetails";

interface Props {
  racesIndexes: string[];
}

export const useRacesDetails = ({ racesIndexes }: Props) => {
  const results = useQuery({
    queryKey: ["races-details", racesIndexes],
    queryFn: () => getRacesDetails({ racesIndexes }),
    enabled: racesIndexes.length > 0,
    staleTime: Infinity,
  });

  return {
    ...results,
  };
};
