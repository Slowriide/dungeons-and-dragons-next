import { getRaces } from "@/services/races/getRaces";
import { useQuery } from "@tanstack/react-query";

export const useRacesList = () => {
  const result = useQuery({
    queryKey: ["races"],
    queryFn: () => getRaces(),
    staleTime: Infinity,
  });

  return { ...result };
};
