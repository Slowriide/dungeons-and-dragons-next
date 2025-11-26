export interface DNDMagicItem {
  index: string;
  name: string;
  equipment_category: EquipmentCategory;
  rarity: Rarity;
  variants: any[];
  variant: boolean;
  desc: string[];
  image: string;
  url: string;
  updated_at: Date;
}

export interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}

export interface Rarity {
  name: string;
}
