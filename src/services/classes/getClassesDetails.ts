import { dndFetch } from "@/api/DndApi";
import { DNDClass } from "@/interface/classes/DnDClass";

interface Options {
  classIndexes: string[];
}

export const getClassesDetails = async ({
  classIndexes,
}: Options): Promise<{ dndClass: DNDClass[] }> => {
  const detailPromise = classIndexes.map((dndClass) =>
    dndFetch.get<DNDClass>(`/classes/${dndClass}`)
  );

  const dndClass = await Promise.all(detailPromise);

  return { dndClass };
};
