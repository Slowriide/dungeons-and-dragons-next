import { dndFetch } from "@/api/DndApi";
import { DNDMaigicItemstListResponse } from "@/interface/magicItems/EquipmentList";

export const getMagicItems = (): Promise<DNDMaigicItemstListResponse> => {
  const data = dndFetch.get<DNDMaigicItemstListResponse>("/magic-items");

  return data;
};
