export interface DNDCharacter {
  index: string;
  name: string;
  hit_points: number;
  hit_die: number;
  characterClass: CharacterClass;
  race: CharacterRace;
  level: number;
  size: string;
  speed: number;
  alignment: Alignment;
  proficiencyBonus: number;

  background: string;

  backgroundSelections: {
    specialty?: string; // "Actor", "Dancer", etc. (eligió 1)
    personalityTrait?: string; // Trait que eligió
    ideal?: string; // Ideal que eligió
    bond?: string; // Bond que eligió
    flaw?: string; // Flaw que eligió
  };

  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  iniciative: number;

  proficiencies: string[];
  selectedProficiencies: string[];
  classProficiencies: ClassProficiency[];

  abilityBonuses: {
    strength?: number; // +2 (Dragonborn)
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number; // +1 (Dragonborn)
  };
  selectedAbilityBonuses?: string[];

  class_features: CharacterClassFeature[];
  class_weapon_proficiencies: string[];
  class_armor_proficiencies: string[];

  languages: string[];
  raceLanguages?: string[];
  backgroundLanguages?: string[];

  skills: CharacterSkill[];
  backgroundSkills: CharacterSkill[];

  raceTraits: Trait[];
  selectedTraits: Trait[];

  backgroundTraits: Trait;

  equipment: Equipment[];
  selectedEquipmentOption: string;
  gold: number;
}

export interface ClassProficiency {
  index: string;
  type: "tool" | "instrument" | "armor" | "weapon";
}

export interface CharacterClassFeature {
  index: string;
  level: number;
  name: string;
  description: string;
}

export interface CharacterSkill {
  index: string;
  name: string;
  proficient: boolean;
  attribute: string;
}

export interface Equipment {
  index: string;
  name: string;
  type: EquipmentType;
  quantity: number;
  equipped?: boolean;
  description?: string;
  weight?: number;
  source: "class" | "background" | "other";
  value?: {
    amount: number;
    currency: "cp" | "sp" | "ep" | "gp" | "pp";
  };
}
export type EquipmentType =
  | "weapon"
  | "armor"
  | "tool"
  | "item"
  | "consumable"
  | "other";

export interface Trait {
  id: string; // "darkvision"
  name: string; // "Darkvision"
  description: string;
}

export type CharacterRace =
  | "Human"
  | "Elf"
  | "Dwarf"
  | "Halfling"
  | "Dragonborn"
  | "Gnome"
  | "Half-Elf"
  | "Half-Orc"
  | "Tiefling"
  | undefined;

export type CharacterClass =
  | "Barbarian"
  | "Bard"
  | "Cleric"
  | "Druid"
  | "Fighter"
  | "Monk"
  | "Paladin"
  | "Ranger"
  | "Rogue"
  | "Sorcerer"
  | "Warlock"
  | "Wizard"
  | undefined;

export type Size = "Small" | "Medium" | "Large" | "Extra-large";

export type Alignment =
  | "lawful-good"
  | "neutral-good"
  | "chaotic-good"
  | "lawful-neutral"
  | "neutral"
  | "chaotic-neutral"
  | "lawful-evil"
  | "neutral-evil"
  | "chaotic-evil"
  | undefined;

// export interface DNDCharacter {
//   index: string;
//   name: string;
//   size: string;
//   type: string;
//   alignment: string;
//   armor_class: ArmorClass[];
//   hit_points: number;
//   hit_dice: string;
//   hit_points_roll: string;
//   speed: Speed;
//   strength: number;
//   dexterity: number;
//   constitution: number;
//   intelligence: number;
//   wisdom: number;
//   charisma: number;
//   proficiencies: ProficiencyElement[];
//   damage_vulnerabilities: any[];
//   damage_resistances: any[];
//   damage_immunities: string[];
//   condition_immunities: any[];
//   senses: Senses;
//   languages: string;
//   challenge_rating: number;
//   proficiency_bonus: number;
//   xp: number;
//   special_abilities: LegendaryAction[];
//   actions: DNDCharacterAction[];
//   legendary_actions: LegendaryAction[];
//   image: string;
//   url: string;
//   updated_at: Date;
//   forms: any[];
//   reactions: any[];
// }

// export interface DNDCharacterAction {
//   damage: Damage[];
//   name: string;
//   multiattack_type?: string;
//   desc: string;
//   actions: ActionAction[];
//   attack_bonus?: number;
//   dc?: Dc;
//   usage?: ActionUsage;
// }

// export interface ActionAction {
//   action_name: string;
//   count: string;
//   type: string;
// }

// export interface Damage {
//   damage_type: DcTypeClass;
//   damage_dice: string;
// }

// export interface DcTypeClass {
//   index: string;
//   name: string;
//   url: string;
// }

// export interface Dc {
//   dc_type: DcTypeClass;
//   dc_value: number;
//   success_type: string;
// }

// export interface ActionUsage {
//   type: string;
//   dice: string;
//   min_value: number;
// }

// export interface ArmorClass {
//   type: string;
//   value: number;
// }

// export interface LegendaryAction {
//   name: string;
//   desc: string;
//   damage: Damage[];
//   dc?: Dc;
//   usage?: LegendaryActionUsage;
// }

// export interface LegendaryActionUsage {
//   type: string;
//   times: number;
//   rest_types: any[];
// }

// export interface ProficiencyElement {
//   value: number;
//   proficiency: DcTypeClass;
// }

// export interface Senses {
//   blindsight: string;
//   darkvision: string;
//   passive_perception: number;
// }

// export interface Speed {
//   walk: string;
//   fly: string;
//   swim: string;
// }
