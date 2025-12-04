import { dndFetch } from "@/api/DndApi";
import { DNDClassLevels } from "@/interface/classes/ClassLevels";
import { DNDSubclass } from "@/interface/classes/DNDSubclass";

interface Options {
  subclassIndexes: string[];
}

export const getSubclassDetails = async ({
  subclassIndexes,
}: Options): Promise<{ dndSubclass: DNDSubclass[] }> => {
  const subclasses = subclassIndexes.map((subclass) =>
    dndFetch.get<DNDSubclass>(`/subclasses/${subclass}`)
  );

  const dndSubclass = await Promise.all(subclasses);

  return { dndSubclass };
};
