import { EquipmentCategory } from "../equipment/EquipmentCategory";

export interface DNDMagicItem {
  desc: string[];
  equipment_category: EquipmentCategory;
  image?: string;
  index: string;
  name: string;
  rarity: Rarity;
  updated_at: string;
  url: string;
  variants: any[];
  variant: boolean;
}

export interface Rarity {
  name: string;
}
