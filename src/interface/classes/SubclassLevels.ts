export interface SubclassLevels {
  level: number;
  features: Class[];
  class: Class;
  subclass: Class;
  url: string;
  index: string;
  updated_at: Date;
}

export interface Class {
  index: string;
  name: string;
  url: string;
}
