export interface ClassFeaturesResponse {
  count: number;
  results: ClassFeaturesList[];
}

export interface ClassFeaturesList {
  index: string;
  name: string;
  url: string;
}

export interface ClassFeature {
  index: string;
  class: Class;
  name: string;
  level: number;
  prerequisites: any[];
  desc: string[];
  url: string;
  updated_at: Date;
}

interface Class {
  index: string;
  name: string;
  url: string;
}
