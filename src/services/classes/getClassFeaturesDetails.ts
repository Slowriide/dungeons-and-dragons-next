import { dndFetch } from "@/api/DndApi";
import { ClassFeature } from "@/interface/classes/ClassFeature";

interface Options {
  featuresIndexes: string[];
}

export const getClassFeaturesDetails = async ({
  featuresIndexes,
}: Options): Promise<{ dndClassFeature: ClassFeature[] }> => {
  const detailPromise = featuresIndexes.map((feature) =>
    dndFetch.get<ClassFeature>(`/features/${feature}/`)
  );

  const dndClassFeature = await Promise.all(detailPromise);

  return { dndClassFeature };
};
