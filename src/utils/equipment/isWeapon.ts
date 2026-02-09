import { DNDArmor } from "@/interface/equipment/DNDArmor";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";

/**
 * Type guard to determine if an equipment item is a Weapon.
 *
 * We rely on the presence of `weapon_category`,
 * which is unique to weapon entries in the D&D API.
 *
 * This allows TypeScript to safely narrow the type
 * when rendering or accessing weapon-specific fields.
 */
export const isWeapon = (
  item: DNDEquipment | DNDWeapon | DNDArmor,
): item is DNDWeapon => {
  return (item as DNDWeapon).weapon_category !== undefined;
};

/**
 * Type guard to determine if an equipment item is an Armor.
 *
 * Armors always include `armor_category`,
 * which makes this a reliable discriminator.
 *
 * Used to route rendering and detail views
 * to the correct Armor components.
 */
export const isArmor = (
  item: DNDEquipment | DNDWeapon | DNDArmor,
): item is DNDArmor => {
  return (item as DNDArmor).armor_category !== undefined;
};
