import { getRules } from "@/actions/rules/getRules";
import { useQuery } from "@tanstack/react-query";

export const useRulesList = () => {
  const result = useQuery({
    queryKey: ["rules"],
    queryFn: () => getRules(),
    staleTime: Infinity,
  });

  console.log({ result });

  return { ...result };
};
