export interface DNDMonstersListResponse {
  count: number;
  results: DnDMonstersList[];
}

export interface DnDMonstersList {
  index: string;
  name: string;
  url: string;
}
