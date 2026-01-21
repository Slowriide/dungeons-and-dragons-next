import { categorizeEquipment } from "@/app/(dnd)/characters/utils/categorizeEquipment";
import { Equipment } from "@/interface/character/DNDCharacter";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

export function mapDNDEquipmentToEquipment(
  apiEquipment: DNDEquipment,
  quantity: number,
): Equipment {
  return {
    index: apiEquipment.index,
    name: apiEquipment.name,
    quantity: quantity,
    equipped: false,
    description: apiEquipment.desc.join("\n"),
    weight: apiEquipment.weight,
    source: "class",
    type: categorizeEquipment(apiEquipment.equipment_category.index),
    value: {
      amount: apiEquipment.cost.quantity,
      currency: apiEquipment.cost.unit as "cp" | "sp" | "ep" | "gp" | "pp",
    },
  };
}
