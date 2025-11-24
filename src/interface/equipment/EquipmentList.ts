export interface DNDEquipmentListResponse {
  count: number;
  results: DNDEquipmentList[];
}

export interface DNDEquipmentList {
  index: string;
  name: string;
  url: string;
}
