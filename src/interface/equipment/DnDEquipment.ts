export interface DNDEquipment {
  special: any[];
  index: string;
  name: string;
  equipment_category: Category;
  gear_category?: Category;
  tool_category?: string;
  vehicle_category?: string;
  cost: Cost;
  desc: string[];
  weight?: number;
  url: string;
  updated_at: string;
  contents: any[];
  properties: Properties[];
}

export interface Cost {
  quantity: number;
  unit: string;
}

export interface Category {
  index: string;
  name: string;
  url: string;
}
export interface Properties {
  index: string;
  name: string;
  url: string;
}
