"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Options {
  spellIndexes: string[];
}

export const getSpellsDetails = async ({
  spellIndexes,
}: Options): Promise<{ spells: DNDSpell[] }> => {
  const detailPromises = spellIndexes.map((spell) =>
    dndFetch.get<DNDSpell>(`/spells/${spell}`)
  );

  const spells = await Promise.all(detailPromises);

  return {
    spells,
  };
};
