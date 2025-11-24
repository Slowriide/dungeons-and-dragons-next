export interface DNDSpellsListResp {
  count: number;
  results: DNDSpellsList[];
}

export interface DNDSpellsList {
  index: string;
  name: string;
  level: number;
  url: string;
}
