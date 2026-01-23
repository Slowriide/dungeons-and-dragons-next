import { dndFetch } from "@/api/DndApi";
import { DNDEquipmentListResponse } from "@/interface/equipment/EquipmentList";

export const getEquipment = (): Promise<DNDEquipmentListResponse> => {
  const data = dndFetch.get<DNDEquipmentListResponse>("/equipment");

  return data;
};
