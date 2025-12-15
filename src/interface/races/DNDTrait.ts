export interface DNDTrait {
  index: string;
  races?: Race[];
  subraces?: Subrace[];
  name: string;
  desc: string[];
  proficiencies: any[];
  trait_specific?: TraitSpecific;
  language_options?: LanguageOptions;
  proficiency_choices?: ProficiencyChoices;
  url: string;
  updated_at: Date;
}

export interface Race {
  index: string;
  name: string;
  url: string;
}

export interface TraitSpecific {
  subtrait_options: SubtraitOptions;
  damage_type?: DamageType;
}

export interface SubtraitOptions {
  choose: number;
  from: From;
  type: string;
}
export interface DamageType {
  index: string;
  name: string;
  url: string;
}

export interface LanguageOptions {
  choose: number;
  type: string;
  from: From;
}
export interface ProficiencyChoices {
  choose: number;
  type: string;
  from: From;
}

export interface From {
  option_set_type: string;
  options: Option[];
}

export interface Option {
  option_type: OptionType;
  item: Race;
}
export interface Subrace {
  index: string;
  name: string;
  url: string;
}

export enum OptionType {
  Reference = "reference",
}
