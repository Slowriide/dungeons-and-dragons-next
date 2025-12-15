import { dndFetch } from "@/api/DndApi";
import { SubclassFeature } from "@/interface/classes/SubclassFeature";
import { SubclassLevels } from "@/interface/classes/SubclassLevels";

interface Options {
  subclassIndex: string;
}

export const getSubclassLevels = async ({
  subclassIndex,
}: Options): Promise<{ subclassLevelFeatures: SubclassFeature[] }> => {
  const subclassLevels = await dndFetch.get<SubclassLevels[]>(
    `/subclasses/${subclassIndex}/levels`
  );

  const levelsIndexes = subclassLevels.flatMap((lvl) =>
    lvl.features.map((ft) => ft.index)
  );
  console.log(levelsIndexes);

  const levelsFeatures = levelsIndexes.map((index) =>
    dndFetch.get<SubclassFeature>(`/features/${index}`)
  );

  const subclassLevelFeatures = await Promise.all(levelsFeatures);

  return { subclassLevelFeatures };
};
