// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getSpellsDetails } from "@/actions/spells/getSpellsDetails";

export const useSpellsDetails = (spellIndexes: string[]) => {
  const results = useQuery({
    queryKey: ["spells-details", spellIndexes],
    queryFn: () => getSpellsDetails({ spellIndexes }),
    enabled: spellIndexes.length > 0,
    staleTime: Infinity, // Los hechizos D&D no cambian
  });

  return { ...results };
};
