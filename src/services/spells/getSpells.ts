import { dndFetch } from "@/api/DndApi";

import { DNDSpellsListResp } from "@/interface/spells/SpellsList";

export const getSpells = async (): Promise<DNDSpellsListResp> => {
  const data = await dndFetch.get<DNDSpellsListResp>("/spells");

  return data;
};
