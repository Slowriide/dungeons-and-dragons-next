// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getSpellsDetails } from "@/actions/spells/getSpellsDetails";
import { DNDSpell } from "@/interface/spells/DndSpell";

export const useSpellsDetails = (spellIndexes: string | string[]) => {
  const indexes = Array.isArray(spellIndexes) ? spellIndexes : [spellIndexes];

  const results = useQuery({
    queryKey: ["spells-details", indexes],
    queryFn: () => getSpellsDetails({ spellIndexes: indexes }),
    enabled: indexes.length > 0,
    staleTime: Infinity, // Los hechizos D&D no cambian
  });

  return { ...results, spells: (results.data?.spells ?? []) as DNDSpell[] };
};
