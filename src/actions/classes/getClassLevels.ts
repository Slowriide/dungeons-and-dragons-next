import { dndFetch } from "@/api/DndApi";
import { DNDClassLevels } from "@/interface/classes/ClassLevels";
import { DNDRace } from "@/interface/races/DNDRace";
import { DNDSubrace } from "@/interface/races/DNDSubrace";

interface Options {
  subraceIndex: string;
}

export const getClassesLevelsDetails = async ({
  subraceIndex,
}: Options): Promise<{ classLevels: DNDClassLevels[] }> => {
  const classLevels = await dndFetch.get<DNDClassLevels[]>(
    `/classes/${subraceIndex}/levels`
  );

  return { classLevels };
};
