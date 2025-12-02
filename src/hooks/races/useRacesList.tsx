import { getRaces } from "@/actions/races/getRaces";
import { useQuery } from "@tanstack/react-query";

export const useRacesList = () => {
  const result = useQuery({
    queryKey: ["races"],
    queryFn: () => getRaces(),
    staleTime: Infinity,
  });

  return { ...result };
};
