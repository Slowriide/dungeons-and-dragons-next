import { getClassesLevelsDetails } from "@/services/classes/getClassLevels";
import { useQuery } from "@tanstack/react-query";

interface Props {
  classIndex: string;
}

export const useClassLevels = ({ classIndex }: Props) => {
  const result = useQuery({
    queryKey: ["classLevels", classIndex],
    queryFn: () => getClassesLevelsDetails({ classIndex }),
    staleTime: Infinity,
    enabled: !!classIndex,
  });

  return { ...result };
};
