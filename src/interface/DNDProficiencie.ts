export interface DNDProficiencie {
  index: string;
  type: string;
  name: string;
  classes: any[];
  races: any[];
  url: string;
  reference: Reference;
  updated_at: Date;
}

export interface Reference {
  index: string;
  name: string;
  url: string;
}
