export interface DNDRace {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  languages: Language[];
  language_desc: string;
  traits: Language[];
  subraces: Subrace[];
  url: string;
  updated_at: Date;
}

export interface AbilityBonus {
  ability_score: Language;
  bonus: number;
}

export interface Language {
  index: string;
  name: string;
  url: string;
}
export interface Subrace {
  index: string;
  name: string;
  url: string;
}
