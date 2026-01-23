"use client";

import { useQuery } from "@tanstack/react-query";
import { getRuleDetails } from "@/services/rules/getRuleDetails";
import { useSearchParams } from "next/navigation";

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

  const search = useSearchParams();

  const query = search.get("query")?.toLowerCase() ?? "";
  const data = results.data?.rules ?? [];

  const filteredRules = data.filter((rule) => {
    const matchName =
      rule.name.toLowerCase().includes(query) ||
      rule.index.toLowerCase().includes(query);

    const matchSubsection = rule.subsections.some((sub) =>
      sub.name.toLowerCase().includes(query),
    );

    return matchName || matchSubsection;
  });

  return {
    ...results,
    filteredRules,
  };
};
