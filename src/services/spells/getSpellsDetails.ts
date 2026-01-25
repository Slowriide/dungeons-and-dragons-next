"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Options {
  spellIndexes: string[];
}

export async function getSpell(spellIndex: string): Promise<DNDSpell | null> {
  try {
    const spell = await dndFetch.get<DNDSpell>(`/spells/${spellIndex}`);
    return spell;
  } catch (error) {
    //if 404 silent null
    if (error instanceof Error && error.message.includes("404")) {
      return null;
    }

    //log other errors
    console.error(`Error fetching spell ${spellIndex}:`, error);
    return null;
  }
}

export const getSpellsDetails = async ({
  spellIndexes,
}: Options): Promise<{ spells: DNDSpell[] }> => {
  const detailPromises = spellIndexes.map((spell) =>
    dndFetch.get<DNDSpell>(`/spells/${spell}`),
  );

  const spells = await Promise.all(detailPromises);

  return {
    spells,
  };
};
