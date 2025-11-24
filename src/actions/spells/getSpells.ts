import { dndFetch } from "@/api/DndApi";
import { DNDSpellsListResp } from "@/interface/spells/SpellsList";

interface Options {
  levels?: string[];
  schools?: string[];
}

export const getSpells = async ({
  levels = [],
  schools = [],
}: Options): Promise<DNDSpellsListResp> => {
  const data = await dndFetch.get<DNDSpellsListResp>("/spells", {
    params: {
      level: levels,
      school: schools,
    },
  });

  return data;
};
