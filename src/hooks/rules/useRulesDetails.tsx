// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getRuleDetails } from "@/actions/rules/getRuleDetails";

interface Props {
  rulesIndexes: string[];
}

export const useRulesDetails = ({ rulesIndexes }: Props) => {
  const results = useQuery({
    queryKey: ["rules-details", rulesIndexes],
    queryFn: () => getRuleDetails({ rulesIndexes }),
    enabled: rulesIndexes.length > 0,
    staleTime: Infinity,
  });

  return {
    ...results,
  };
};
