export interface DNDClassesListResponse {
  count: number;
  results: DNDClassesList[];
}

export interface DNDClassesList {
  index: string;
  name: string;
  url: string;
}
