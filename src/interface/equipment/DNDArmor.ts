export interface DNDArmor {
  desc: any[];
  special: any[];
  index: string;
  name: string;
  equipment_category: EquipmentCategory;
  armor_category: string;
  armor_class: ArmorClass;
  str_minimum: number;
  stealth_disadvantage: boolean;
  weight: number;
  cost: Cost;
  url: string;
  updated_at: Date;
  contents: any[];
  properties: any[];
}

export interface ArmorClass {
  base: number;
  dex_bonus: boolean;
  max_bonus: number;
}

export interface Cost {
  quantity: number;
  unit: string;
}

export interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}
