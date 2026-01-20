import { dndFetch } from "@/api/DndApi";
import { DNDClassLevels } from "@/interface/classes/ClassLevels";

interface Options {
  classIndex: string;
}

export const getClassesLevelsDetails = async ({
  classIndex,
}: Options): Promise<{ classLevels: DNDClassLevels[] }> => {
  const classLevels = await dndFetch.get<DNDClassLevels[]>(
    `/classes/${classIndex}/levels`,
  );

  return { classLevels };
};
