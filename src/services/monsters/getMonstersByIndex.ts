"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDMonster } from "@/interface/monsters/DnDMonster";

export const getMonsterByIndex = async (
  index: string,
): Promise<DNDMonster | null> => {
  try {
    return await dndFetch.get<DNDMonster>(`/monsters/${index}`);
  } catch {
    return null;
  }
};
