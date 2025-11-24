"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Options {
  monstersIndexes: string[];
}

export const getMonstersDetails = async ({
  monstersIndexes,
}: Options): Promise<{ monsters: DNDMonster[] }> => {
  const detailPromises = monstersIndexes.map((monster) =>
    dndFetch.get<DNDMonster>(`/monsters/${monster}`)
  );

  const monsters = await Promise.all(detailPromises);

  return {
    monsters,
  };
};
