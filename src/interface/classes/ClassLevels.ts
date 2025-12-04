export interface DNDClassLevels {
  level: number;
  ability_score_bonuses: number;
  prof_bonus: number;
  features: Feature[];
  class_specific?: ClassSpecific;
  spellcasting?: Spellcasting;
  index: string;
  class: {
    index: string;
    name: string;
    url: string;
  };
  url: string;
  updated_at: Date;
}

export interface Feature {
  index: string;
  name: string;
  url: string;
}

export interface Spellcasting {
  cantrips_known?: number;
  spells_known?: number;
  spell_slots_level_1?: number;
  spell_slots_level_2?: number;
  spell_slots_level_3?: number;
  spell_slots_level_4?: number;
  spell_slots_level_5?: number;
  spell_slots_level_6?: number;
  spell_slots_level_7?: number;
  spell_slots_level_8?: number;
  spell_slots_level_9?: number;
}

export interface ClassSpecific {
  // Barbarian
  rage_count?: number;
  rage_damage_bonus?: number;
  brutal_critical_dice?: number;

  // Bard
  bardic_inspiration_die?: number;
  song_of_rest_die?: number;
  magical_secrets_max_5?: number;
  magical_secrets_max_7?: number;
  magical_secrets_max_9?: number;

  // Cleric
  channel_divinity_charges?: number;
  destroy_undead_cr?: number;

  // Druid
  wild_shape_max_cr?: number;
  wild_shape_swim?: boolean;
  wild_shape_fly?: boolean;

  // Fighter
  action_surges?: number;
  indomitable_uses?: number;
  extra_attacks?: number;

  // Monk
  martial_arts?: {
    dice_count: number;
    dice_value: number;
  };
  ki_points?: number;
  unarmored_movement?: number;

  // Paladin
  aura_range?: number;

  // Ranger
  favored_enemies?: number;
  favored_terrain?: number;

  // Rogue
  sneak_attack?: {
    dice_count: number;
    dice_value: number;
  };

  // Sorcerer
  sorcery_points?: number;
  metamagic_known?: number;

  // Warlock
  invocations_known?: number;
  mystic_arcanum_level_6?: number;
  mystic_arcanum_level_7?: number;
  mystic_arcanum_level_8?: number;
  mystic_arcanum_level_9?: number;

  // Wizard
  arcane_recovery_levels?: number;
}
