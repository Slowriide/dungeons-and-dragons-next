// hooks/useSpellsDetails.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { getClassesDetails } from "@/actions/classes/getClassesDetails";
import { useSearchParams } from "next/navigation";

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

  const search = useSearchParams();
  const query = search.get("query")?.toLowerCase() || "";

  const classes = results.data?.dndClass ?? [];

  const filteredClasses = classes.filter((cl) => {
    return (
      cl.name.toLowerCase().includes(query) ||
      cl.index.toLowerCase().includes(query)
    );
  });

  return {
    ...results,
    filteredClasses,
  };
};
