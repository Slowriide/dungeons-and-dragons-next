export interface EquipmentCategoryDetailsResponse {
  index: string;
  name: string;
  equipment: Equipment[];
  url: string;
  updated_at: Date;
}

export interface Equipment {
  index: string;
  name: string;
  url: string;
}
