import equipment from "@/data/equipment/equipment-cache.json";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

export const getEquipment = async (): Promise<DNDEquipment[]> => {
  return equipment;
};
