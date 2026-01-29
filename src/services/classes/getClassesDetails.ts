import { dndFetch } from "@/api/DndApi";
import { DNDClass } from "@/interface/classes/DnDClass";

interface Options {
  classIndexes: string[];
}

export const getClassesDetails = async ({
  classIndexes,
}: Options): Promise<{ dndClasses: DNDClass[] }> => {
  const detailPromise = classIndexes.map((dndClass) =>
    dndFetch.get<DNDClass>(`/classes/${dndClass}`),
  );

  const dndClasses = await Promise.all(detailPromise);

  return { dndClasses };
};
