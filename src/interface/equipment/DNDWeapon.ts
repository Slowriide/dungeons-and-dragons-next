export interface DNDWeapon {
  desc: any[];
  special: any[];
  index: string;
  name: string;
  equipment_category: EquipmentCategory;
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  cost: Cost;
  damage: Damage;
  range: Range;
  weight: number;
  properties: EquipmentCategory[];
  two_handed_damage: Damage;
  url: string;
  updated_at: Date;
  contents: any[];
}

export interface Cost {
  quantity: number;
  unit: string;
}

export interface Damage {
  damage_dice: string;
  damage_type: EquipmentCategory;
}

export interface EquipmentCategory {
  index: string;
  name: string;
  url: string;
}

export interface Range {
  normal: number;
  long?: number;
}
