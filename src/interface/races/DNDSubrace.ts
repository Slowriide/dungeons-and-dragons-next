export interface DNDSubrace {
  index: string;
  name: string;
  race: Race;
  desc: string;
  ability_bonuses: AbilityBonus[];
  racial_traits: Race[];
  url: string;
  updated_at: Date;
}

export interface AbilityBonus {
  ability_score: Race;
  bonus: number;
}

export interface Race {
  index: string;
  name: string;
  url: string;
}
