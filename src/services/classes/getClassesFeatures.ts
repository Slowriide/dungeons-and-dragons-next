import { dndFetch } from "@/api/DndApi";
import {
  ClassFeature,
  ClassFeaturesResponse,
} from "@/interface/classes/ClassFeature";

interface Options {
  classIndex: string;
}

export const getClassesFeatures = async ({
  classIndex,
}: Options): Promise<{ classFeatures: ClassFeature[] }> => {
  const classFeaturesList = await dndFetch.get<ClassFeaturesResponse>(
    `/classes/${classIndex}/features`
  );
  const indexes = classFeaturesList.results.map((i) => i.index);

  const features = indexes.map((index) =>
    dndFetch.get<ClassFeature>(`/features/${index}/`)
  );
  const classFeatures = await Promise.all(features);

  return { classFeatures };
};
