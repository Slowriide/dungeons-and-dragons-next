import { dndFetch } from "@/api/DndApi";
import { DNDRace } from "@/interface/races/DNDRace";

interface Options {
  racesIndexes: string[];
}

export const getRacesDetails = async ({
  racesIndexes,
}: Options): Promise<{ race: DNDRace[] }> => {
  const detailPromise = racesIndexes.map((race) =>
    dndFetch.get<DNDRace>(`/races/${race}`)
  );

  const race = await Promise.all(detailPromise);

  return { race };
};
