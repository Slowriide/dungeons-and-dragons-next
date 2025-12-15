// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getRaceTraits } from "@/actions/races/getRaceTraits";

interface Props {
  traitsIndexes: string[];
}

export const useRaceTraits = ({ traitsIndexes }: Props) => {
  const results = useQuery({
    queryKey: ["race-traits", traitsIndexes],
    queryFn: () => getRaceTraits({ traitsIndexes }),
    enabled: traitsIndexes.length > 0,
    staleTime: Infinity,
  });

  return {
    ...results,
  };
};
