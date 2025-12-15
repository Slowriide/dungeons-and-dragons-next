import { dndFetch } from "@/api/DndApi";
import { DNDRace } from "@/interface/races/DNDRace";
import { DNDTrait } from "@/interface/races/DNDTrait";

interface Options {
  traitsIndexes: string[];
}

export const getRaceTraits = async ({
  traitsIndexes,
}: Options): Promise<{ trait: DNDTrait[] }> => {
  const detailPromise = traitsIndexes.map((trait) =>
    dndFetch.get<DNDTrait>(`/traits/${trait}`)
  );

  const trait = await Promise.all(detailPromise);

  return { trait };
};
