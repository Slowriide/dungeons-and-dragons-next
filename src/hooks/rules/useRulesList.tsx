import { getRules } from "@/services/rules/getRules";
import { useQuery } from "@tanstack/react-query";

export const useRulesList = () => {
  const result = useQuery({
    queryKey: ["rules"],
    queryFn: () => getRules(),
    staleTime: Infinity,
  });

  return { ...result };
};
