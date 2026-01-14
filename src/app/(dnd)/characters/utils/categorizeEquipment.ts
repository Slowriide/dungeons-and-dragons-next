import { EquipmentType } from "@/interface/character/DNDCharacter";

// Helper para categorizar
export function categorizeEquipment(index: string): EquipmentType {
  if (
    index.includes("weapon") ||
    index.includes("sword") ||
    index.includes("bow") ||
    index.includes("club")
  ) {
    return "weapon";
  }
  if (index.includes("armor") || index.includes("shield")) {
    return "armor";
  }
  if (index.includes("tool") || index.includes("kit")) {
    return "tool";
  }
  if (index.includes("potion") || index.includes("scroll")) {
    return "consumable";
  }
  return "item";
}
