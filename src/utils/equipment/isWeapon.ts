import { DNDArmor } from "@/interface/equipment/DNDArmor";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";

export const isWeapon = (
  item: DNDEquipment | DNDWeapon | DNDArmor,
): item is DNDWeapon => {
  return (item as DNDWeapon).weapon_category !== undefined;
};

export const isArmor = (
  item: DNDEquipment | DNDWeapon | DNDArmor,
): item is DNDArmor => {
  return (item as DNDArmor).armor_category !== undefined;
};
