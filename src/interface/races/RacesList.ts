export interface DNDRacesListResponse {
  count: number;
  results: DNDRacesList[];
}

export interface DNDRacesList {
  index: string;
  name: string;
  url: string;
}
