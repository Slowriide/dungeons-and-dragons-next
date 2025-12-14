import { DNDClass } from "../classes/DnDClass";
import { DNDRace } from "../races/DNDRace";

export interface DNDCharacter {
  index: string;
  name: string;
  hit_points: number;
  class: CharacterClass;
  race: CharacterRace;

  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };

  class_features: string[];
  class_weapon_proficiencies: string[];

  skills: Record<string, number>;

  equipment: {
    weapons: string[];
    armor: string | null;
    items: string[];
    gold: number;
  };
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
