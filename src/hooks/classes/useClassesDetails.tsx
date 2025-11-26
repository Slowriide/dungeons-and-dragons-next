// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getClassesDetails } from "@/actions/classes/getClassesDetails";

interface Props {
  classIndexes: string[];
}

export const useClassesDetails = ({ classIndexes }: Props) => {
  const results = useQuery({
    queryKey: ["class-details", classIndexes],
    queryFn: () => getClassesDetails({ classIndexes }),
    enabled: classIndexes.length > 0,
    staleTime: Infinity,
  });

  return {
    ...results,
  };
};
