import { dndFetch } from "@/api/DndApi";
import { DNDRace } from "@/interface/races/DNDRace";
import { DNDSubrace } from "@/interface/races/DNDSubrace";

interface Options {
  subracesIndexes: string[];
}

export const getSubacesDetails = async ({
  subracesIndexes,
}: Options): Promise<{ subraces: DNDSubrace[] }> => {
  const detailPromise = subracesIndexes.map((subrace) =>
    dndFetch.get<DNDSubrace>(`/subraces/${subrace}`)
  );

  const subraces = await Promise.all(detailPromise);

  return { subraces };
};
