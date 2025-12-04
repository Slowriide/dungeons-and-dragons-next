export interface DNDSubclass {
  index: string;
  class: Class;
  name: string;
  subclass_flavor: string;
  desc: string[];
  subclass_levels: string;
  url: string;
  updated_at: Date;
  spells: any[];
}

export interface Class {
  index: string;
  name: string;
  url: string;
}
