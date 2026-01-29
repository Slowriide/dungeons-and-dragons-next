"use server";

import { dndFetch } from "@/api/DndApi";
import { DNDClass } from "@/interface/classes/DnDClass";

export const getClassByIndex = async (
  index: string,
): Promise<DNDClass | null> => {
  try {
    return await dndFetch.get<DNDClass>(`/classes/${index}`);
  } catch {
    return null;
  }
};
