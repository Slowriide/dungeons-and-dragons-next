import { dndFetch } from "@/api/DndApi";
import { DNDRace } from "@/interface/races/DNDRace";

interface Options {
  racesIndexes: string[];
  query: string;
}

export const getRacesDetails = async ({
  racesIndexes,
  query,
}: Options): Promise<{ races: DNDRace[] }> => {
  const detailPromise = racesIndexes.map((race) =>
    dndFetch.get<DNDRace>(`/races/${race}`),
  );

  const race = await Promise.all(detailPromise);

  const filteredRaces = race.filter((race) => {
    const filtred =
      race.name.toLowerCase().includes(query) ||
      race.index.toLowerCase().includes(query);

    return filtred;
  });

  return { races: filteredRaces };
};
