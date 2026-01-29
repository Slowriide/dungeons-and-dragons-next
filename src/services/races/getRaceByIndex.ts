"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDRace } from "@/interface/races/DNDRace";

export const getRaceByIndex = async (
  index: string,
): Promise<DNDRace | null> => {
  try {
    return await dndFetch.get<DNDRace>(`/races/${index}`);
  } catch {
    return null;
  }
};
