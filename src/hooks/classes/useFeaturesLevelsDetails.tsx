import { getClassFeaturesDetails } from "@/services/classes/getClassFeaturesDetails";
import { useQuery } from "@tanstack/react-query";

interface Options {
  featureIndexes: string[];
  enabled?: boolean;
}

export const useFeaturesLevelsDetails = ({
  featureIndexes,
  enabled = true,
}: Options) => {
  return useQuery({
    queryKey: ["levelsFeatures", featureIndexes],
    queryFn: () => getClassFeaturesDetails({ featuresIndexes: featureIndexes }),
    staleTime: 10 * 60 * 1000,
    enabled: enabled && featureIndexes.length > 0,
  });
};
