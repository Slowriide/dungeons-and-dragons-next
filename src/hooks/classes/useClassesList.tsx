import { getClasses } from "@/actions/classes/getClasses";
import { useQuery } from "@tanstack/react-query";

export const useClassesList = () => {
  const result = useQuery({
    queryKey: ["classes"],
    queryFn: () => getClasses(),
    staleTime: Infinity,
  });

  return { ...result };
};
