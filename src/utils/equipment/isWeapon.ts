import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";

export const isWeapon = (item: DNDEquipment | DNDWeapon): item is DNDWeapon => {
  return (item as DNDWeapon).weapon_category !== undefined;
};
