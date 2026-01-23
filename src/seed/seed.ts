// prisma/seed-data.ts
export const seedCharacters = [
  {
    name: "Thorin Blackforge",
    characterClass: "Fighter",
    race: "Dwarf",
    background: "Soldier",
    level: 5,
    alignment: "lawful-good",
    experiencePoints: 6500,

    baseAttributes: {
      strength: 16,
      dexterity: 12,
      constitution: 16,
      intelligence: 10,
      wisdom: 12,
      charisma: 8,
    },

    abilityBonuses: {
      constitution: 2,
    },

    hitDie: 10,
    hitPoints: 47,
    armorClass: 18,
    speed: 25,
    proficiencyBonus: 3,

    skills: [
      {
        index: "athletics",
        name: "Athletics",
        proficient: true,
        attribute: "strength",
      },
      {
        index: "intimidation",
        name: "Intimidation",
        proficient: true,
        attribute: "charisma",
      },
      {
        index: "perception",
        name: "Perception",
        proficient: true,
        attribute: "wisdom",
      },
    ],

    classProficiencies: [{ index: "smiths-tools", type: "tool" }],

    proficiencies: [
      "all-armor",
      "shields",
      "simple-weapons",
      "martial-weapons",
    ],
    selectedProficiencies: [],
    languages: ["common", "dwarvish"],
    raceLanguages: [],
    backgroundLanguages: [],

    equipment: [
      {
        index: "plate-armor",
        name: "Plate Armor",
        quantity: 1,
        type: "armor",
        equipped: true,
        source: "class",
      },
      {
        index: "battleaxe",
        name: "Battleaxe",
        quantity: 1,
        type: "weapon",
        equipped: true,
        source: "class",
      },
      {
        index: "shield",
        name: "Shield",
        quantity: 1,
        type: "armor",
        equipped: true,
        source: "class",
      },
      {
        index: "backpack",
        name: "Backpack",
        quantity: 1,
        type: "item",
        equipped: false,
        source: "background",
      },
    ],

    selectedEquipmentOption: "A",
    gold: 25,

    raceTraits: [
      {
        id: "darkvision",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet",
      },
      {
        id: "dwarven-resilience",
        name: "Dwarven Resilience",
        description: "Advantage on saving throws against poison",
      },
    ],

    selectedTraits: [],

    backgroundTrait: {
      id: "military-rank",
      name: "Military Rank",
      description: "You have a military rank from your career as a soldier",
    },

    classFeatures: [
      {
        index: "fighting-style",
        level: 1,
        name: "Fighting Style",
        description: "Defense: +1 AC when wearing armor",
      },
      {
        index: "second-wind",
        level: 1,
        name: "Second Wind",
        description: "Regain 1d10 + fighter level HP",
      },
      {
        index: "action-surge",
        level: 2,
        name: "Action Surge",
        description: "Take one additional action",
      },
      {
        index: "extra-attack",
        level: 5,
        name: "Extra Attack",
        description: "Attack twice when you take the Attack action",
      },
    ],

    backgroundSelections: {
      personalityTrait: "I can stare down a hell hound without flinching",
      ideal:
        "Greater Good. Our lot is to lay down our lives in defense of others",
      bond: "I would still lay down my life for the people I served with",
      flaw: "I have little respect for anyone who is not a proven warrior",
    },
  },
  {
    name: "Elara Moonwhisper",
    characterClass: "Wizard",
    race: "Elf",
    background: "Sage",
    level: 3,
    alignment: "neutral-good",
    experiencePoints: 900,

    baseAttributes: {
      strength: 8,
      dexterity: 14,
      constitution: 12,
      intelligence: 17,
      wisdom: 13,
      charisma: 10,
    },

    abilityBonuses: {
      dexterity: 2,
      intelligence: 1,
    },

    hitDie: 6,
    hitPoints: 18,
    armorClass: 12,
    speed: 30,
    proficiencyBonus: 2,

    skills: [
      {
        index: "arcana",
        name: "Arcana",
        proficient: true,
        attribute: "intelligence",
      },
      {
        index: "history",
        name: "History",
        proficient: true,
        attribute: "intelligence",
      },
      {
        index: "investigation",
        name: "Investigation",
        proficient: true,
        attribute: "intelligence",
      },
      {
        index: "perception",
        name: "Perception",
        proficient: true,
        attribute: "wisdom",
      },
    ],

    classProficiencies: [],

    proficiencies: [
      "daggers",
      "darts",
      "slings",
      "quarterstaffs",
      "light-crossbows",
    ],
    selectedProficiencies: [],
    languages: ["common", "elvish", "draconic"],
    raceLanguages: [],
    backgroundLanguages: ["draconic"],

    equipment: [
      {
        index: "quarterstaff",
        name: "Quarterstaff",
        quantity: 1,
        type: "weapon",
        equipped: true,
        source: "class",
      },
      {
        index: "spellbook",
        name: "Spellbook",
        quantity: 1,
        type: "item",
        equipped: false,
        source: "class",
      },
      {
        index: "component-pouch",
        name: "Component Pouch",
        quantity: 1,
        type: "item",
        equipped: true,
        source: "class",
      },
    ],

    selectedEquipmentOption: "B",
    gold: 15,

    raceTraits: [
      {
        id: "darkvision",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet",
      },
      {
        id: "fey-ancestry",
        name: "Fey Ancestry",
        description: "Advantage against being charmed",
      },
      {
        id: "trance",
        name: "Trance",
        description: "Elves don't need to sleep",
      },
    ],

    selectedTraits: [],

    backgroundTrait: {
      id: "researcher",
      name: "Researcher",
      description:
        "You know how to obtain information from libraries and sages",
    },

    classFeatures: [
      {
        index: "spellcasting",
        level: 1,
        name: "Spellcasting",
        description: "Can cast wizard spells",
      },
      {
        index: "arcane-recovery",
        level: 1,
        name: "Arcane Recovery",
        description: "Recover spell slots on short rest",
      },
    ],

    backgroundSelections: {
      personalityTrait:
        "I use polysyllabic words that convey the impression of great erudition",
      ideal:
        "Knowledge. The path to power and self-improvement is through knowledge",
      bond: "I have an ancient text that holds terrible secrets",
      flaw: "I am easily distracted by the promise of information",
    },
  },
  {
    name: "Grimm Skullcrusher",
    characterClass: "Barbarian",
    race: "Half-Orc",
    background: "Outlander",
    level: 4,
    alignment: "chaotic-neutral",
    experiencePoints: 2700,

    baseAttributes: {
      strength: 18,
      dexterity: 14,
      constitution: 16,
      intelligence: 8,
      wisdom: 12,
      charisma: 10,
    },

    abilityBonuses: {
      strength: 2,
      constitution: 1,
    },

    hitDie: 12,
    hitPoints: 42,
    armorClass: 15,
    speed: 30,
    proficiencyBonus: 2,

    skills: [
      {
        index: "athletics",
        name: "Athletics",
        proficient: true,
        attribute: "strength",
      },
      {
        index: "intimidation",
        name: "Intimidation",
        proficient: true,
        attribute: "charisma",
      },
      {
        index: "survival",
        name: "Survival",
        proficient: true,
        attribute: "wisdom",
      },
    ],

    classProficiencies: [],

    proficiencies: [
      "light-armor",
      "medium-armor",
      "shields",
      "simple-weapons",
      "martial-weapons",
    ],
    selectedProficiencies: [],
    languages: ["common", "orc"],
    raceLanguages: [],
    backgroundLanguages: ["giant"],

    equipment: [
      {
        index: "greataxe",
        name: "Greataxe",
        quantity: 1,
        type: "weapon",
        equipped: true,
        source: "class",
      },
      {
        index: "handaxe",
        name: "Handaxe",
        quantity: 2,
        type: "weapon",
        equipped: false,
        source: "class",
      },
      {
        index: "hide-armor",
        name: "Hide Armor",
        quantity: 1,
        type: "armor",
        equipped: true,
        source: "class",
      },
    ],

    selectedEquipmentOption: "A",
    gold: 30,

    raceTraits: [
      {
        id: "darkvision",
        name: "Darkvision",
        description: "You can see in dim light within 60 feet",
      },
      {
        id: "relentless-endurance",
        name: "Relentless Endurance",
        description: "Drop to 1 HP instead of 0 once per long rest",
      },
      {
        id: "savage-attacks",
        name: "Savage Attacks",
        description: "Extra damage die on critical hits",
      },
    ],

    selectedTraits: [],

    backgroundTrait: {
      id: "wanderer",
      name: "Wanderer",
      description: "You have an excellent memory for maps and geography",
    },

    classFeatures: [
      {
        index: "rage",
        level: 1,
        name: "Rage",
        description: "Bonus damage and resistance in combat",
      },
      {
        index: "unarmored-defense",
        level: 1,
        name: "Unarmored Defense",
        description: "AC = 10 + DEX + CON when not wearing armor",
      },
      {
        index: "reckless-attack",
        level: 2,
        name: "Reckless Attack",
        description: "Advantage on attacks but enemies have advantage",
      },
      {
        index: "danger-sense",
        level: 2,
        name: "Danger Sense",
        description: "Advantage on DEX saves you can see",
      },
    ],

    backgroundSelections: {
      personalityTrait: "I place no stock in wealthy or well-mannered folk",
      ideal: "Freedom. Chains are meant to be broken",
      bond: "I will bring terrible wrath down on the evildoers who destroyed my homeland",
      flaw: "Violence is my answer to almost any challenge",
    },
  },
  {
    name: "Lyra Songweaver",
    characterClass: "Bard",
    race: "Human",
    background: "Entertainer",
    level: 2,
    alignment: "chaotic-good",
    experiencePoints: 300,

    baseAttributes: {
      strength: 10,
      dexterity: 14,
      constitution: 12,
      intelligence: 13,
      wisdom: 11,
      charisma: 16,
    },

    abilityBonuses: {
      charisma: 1,
      dexterity: 1,
    },

    hitDie: 8,
    hitPoints: 14,
    armorClass: 14,
    speed: 30,
    proficiencyBonus: 2,

    skills: [
      {
        index: "acrobatics",
        name: "Acrobatics",
        proficient: true,
        attribute: "dexterity",
      },
      {
        index: "performance",
        name: "Performance",
        proficient: true,
        attribute: "charisma",
      },
      {
        index: "persuasion",
        name: "Persuasion",
        proficient: true,
        attribute: "charisma",
      },
      {
        index: "deception",
        name: "Deception",
        proficient: true,
        attribute: "charisma",
      },
    ],

    classProficiencies: [
      { index: "lute", type: "instrument" },
      { index: "flute", type: "instrument" },
      { index: "pan-flute", type: "instrument" },
    ],

    proficiencies: [
      "light-armor",
      "simple-weapons",
      "hand-crossbows",
      "longswords",
      "rapiers",
      "shortswords",
    ],
    selectedProficiencies: [],
    languages: ["common", "elvish"],
    raceLanguages: [],
    backgroundLanguages: ["elvish"],

    equipment: [
      {
        index: "rapier",
        name: "Rapier",
        quantity: 1,
        type: "weapon",
        equipped: true,
        source: "class",
      },
      {
        index: "leather-armor",
        name: "Leather Armor",
        quantity: 1,
        type: "armor",
        equipped: true,
        source: "class",
      },
      {
        index: "lute",
        name: "Lute",
        quantity: 1,
        type: "tool",
        equipped: false,
        source: "class",
      },
      {
        index: "costume",
        name: "Costume",
        quantity: 1,
        type: "item",
        equipped: false,
        source: "background",
      },
    ],

    selectedEquipmentOption: "B",
    gold: 18,

    raceTraits: [],

    selectedTraits: [],

    backgroundTrait: {
      id: "by-popular-demand",
      name: "By Popular Demand",
      description: "You can always find a place to perform",
    },

    classFeatures: [
      {
        index: "spellcasting",
        level: 1,
        name: "Spellcasting",
        description: "Can cast bard spells",
      },
      {
        index: "bardic-inspiration",
        level: 1,
        name: "Bardic Inspiration",
        description: "Give allies a d6 bonus",
      },
      {
        index: "jack-of-all-trades",
        level: 2,
        name: "Jack of All Trades",
        description: "Add half proficiency to non-proficient checks",
      },
      {
        index: "song-of-rest",
        level: 2,
        name: "Song of Rest",
        description: "Allies heal extra d6 on short rest",
      },
    ],

    backgroundSelections: {
      personalityTrait: "I know a story relevant to almost every situation",
      ideal: "Creativity. The world is in need of new ideas and bold action",
      bond: "I want to be famous, whatever it takes",
      flaw: "I'll do anything to win fame and renown",
    },
  },
];
