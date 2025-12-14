import { dndFetch } from "@/api/DndApi";
import { DNDProficiencie } from "@/interface/DNDProficiencie";
import { DNDRace } from "@/interface/races/DNDRace";

interface Options {
  profIndexes: string[];
}

export const getProficencies = async ({
  profIndexes,
}: Options): Promise<{ proficiencies: DNDProficiencie[] }> => {
  const detailPromise = profIndexes.map((prof) =>
    dndFetch.get<DNDProficiencie>(`/proficiencies/${prof}`)
  );

  const proficiencies = await Promise.all(detailPromise);

  return { proficiencies };
};
