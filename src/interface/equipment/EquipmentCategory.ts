import { Equipment } from "../../mocks/data/equipment";
export interface EquipmentCategoriesResponse {
  count: number;
  results: EquipmentCategory[];
}

export interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}

export const EquipmentCategories = [
  { index: "adventuring-gear", name: "Adventuring Gear" },
  { index: "tools", name: "Tools" },
  { index: "weapon", name: "Weapon" },
  { index: "armor", name: "Armor" },
];
