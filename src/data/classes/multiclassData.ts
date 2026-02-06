// types/multiclass.ts
export interface MulticlassData {
  prerequisite: string;
  gains: string[];
  spellcasting?: {
    casterLevel: "full" | "half" | "third";
    spellSlots: boolean;
  };
}

// data/multiclass-prerequisites.ts
export const multiclassData: Record<string, MulticlassData> = {
  barbarian: {
    prerequisite: "Strength 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Shields",
      "Proficiency with Simple weapons",
      "Proficiency with Martial weapons",
    ],
  },

  bard: {
    prerequisite: "Charisma 13",
    gains: [
      "Hit Point Die",
      "Proficiency in one skill of your choice",
      "Proficiency with one Musical Instrument of your choice",
      "Training with Light armor",
    ],
    spellcasting: {
      casterLevel: "full",
      spellSlots: true,
    },
  },

  cleric: {
    prerequisite: "Wisdom 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor",
      "Proficiency with Medium armor",
      "Proficiency with Shields",
    ],
    spellcasting: {
      casterLevel: "full",
      spellSlots: true,
    },
  },

  druid: {
    prerequisite: "Wisdom 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor (druids will not wear armor or use shields made of metal)",
      "Proficiency with Medium armor (druids will not wear armor or use shields made of metal)",
      "Proficiency with Shields (druids will not wear armor or use shields made of metal)",
    ],
    spellcasting: {
      casterLevel: "full",
      spellSlots: true,
    },
  },

  fighter: {
    prerequisite: "Strength 13 or Dexterity 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor",
      "Proficiency with Medium armor",
      "Proficiency with Shields",
      "Proficiency with Simple weapons",
      "Proficiency with Martial weapons",
    ],
  },

  monk: {
    prerequisite: "Dexterity 13 and Wisdom 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Simple weapons",
      "Proficiency with Shortswords",
    ],
  },

  paladin: {
    prerequisite: "Strength 13 and Charisma 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor",
      "Proficiency with Medium armor",
      "Proficiency with Shields",
      "Proficiency with Simple weapons",
      "Proficiency with Martial weapons",
    ],
    spellcasting: {
      casterLevel: "half",
      spellSlots: true,
    },
  },

  ranger: {
    prerequisite: "Dexterity 13 and Wisdom 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor",
      "Proficiency with Medium armor",
      "Proficiency with Shields",
      "Proficiency with Simple weapons",
      "Proficiency with Martial weapons",
      "Proficiency in one skill from the class's skill list",
    ],
    spellcasting: {
      casterLevel: "half",
      spellSlots: true,
    },
  },

  rogue: {
    prerequisite: "Dexterity 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor",
      "Proficiency in one skill from the class's skill list",
      "Proficiency with Thieves' tools",
    ],
  },

  sorcerer: {
    prerequisite: "Charisma 13",
    gains: ["Hit Point Die"],
    spellcasting: {
      casterLevel: "full",
      spellSlots: true,
    },
  },

  warlock: {
    prerequisite: "Charisma 13",
    gains: [
      "Hit Point Die",
      "Proficiency with Light armor",
      "Proficiency with Simple weapons",
    ],
    spellcasting: {
      casterLevel: "full",
      spellSlots: false, // Warlock usa Pact Magic, no spell slots normales
    },
  },

  wizard: {
    prerequisite: "Intelligence 13",
    gains: ["Hit Point Die"],
    spellcasting: {
      casterLevel: "full",
      spellSlots: true,
    },
  },
};
