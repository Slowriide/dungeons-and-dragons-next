export interface Monster {
  id: string;
  name: string;
  size: string;
  type: string;
  alignment: string;
  cr: string;
  ac: number;
  hp: string;
  speed: string;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  skills?: string;
  damageResistances?: string;
  damageImmunities?: string;
  conditionImmunities?: string;
  senses: string;
  languages: string;
  traits?: { name: string; description: string }[];
  actions: { name: string; description: string }[];
  environment?: string[];
  image: string;
}

export const monsters: Monster[] = [
  {
    id: "goblin",
    name: "Goblin",
    size: "Small",
    type: "humanoid",
    alignment: "neutral evil",
    cr: "1/4",
    ac: 15,
    hp: "7 (2d6)",
    speed: "30 ft.",
    str: 8,
    dex: 14,
    con: 10,
    int: 10,
    wis: 8,
    cha: 8,
    skills: "Stealth +6",
    senses: "darkvision 60 ft., passive Perception 9",
    languages: "Common, Goblin",
    traits: [
      {
        name: "Nimble Escape",
        description:
          "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
      },
    ],
    actions: [
      {
        name: "Scimitar",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
      },
      {
        name: "Shortbow",
        description:
          "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
      },
    ],
    environment: ["Forest", "Grassland", "Hills"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "dragon-red-ancient",
    name: "Ancient Red Dragon",
    size: "Gargantuan",
    type: "dragon",
    alignment: "chaotic evil",
    cr: "24",
    ac: 22,
    hp: "546 (28d20 + 252)",
    speed: "40 ft., climb 40 ft., fly 80 ft.",
    str: 30,
    dex: 10,
    con: 29,
    int: 18,
    wis: 15,
    cha: 23,
    skills: "Perception +16, Stealth +7",
    damageImmunities: "fire",
    senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
    languages: "Common, Draconic",
    traits: [
      {
        name: "Legendary Resistance (3/Day)",
        description:
          "If the dragon fails a saving throw, it can choose to succeed instead.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
      },
      {
        name: "Fire Breath (Recharge 5-6)",
        description:
          "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
      },
    ],
    environment: ["Mountain", "Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "owlbear",
    name: "Owlbear",
    size: "Large",
    type: "monstrosity",
    alignment: "unaligned",
    cr: "3",
    ac: 13,
    hp: "59 (7d10 + 21)",
    speed: "40 ft.",
    str: 20,
    dex: 12,
    con: 17,
    int: 3,
    wis: 12,
    cha: 7,
    skills: "Perception +3",
    senses: "darkvision 60 ft., passive Perception 13",
    languages: "—",
    traits: [
      {
        name: "Keen Sight and Smell",
        description:
          "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The owlbear makes two attacks: one with its beak and one with its claws.",
      },
      {
        name: "Beak",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.",
      },
      {
        name: "Claws",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
      },
    ],
    environment: ["Forest"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "beholder",
    name: "Beholder",
    size: "Large",
    type: "aberration",
    alignment: "lawful evil",
    cr: "13",
    ac: 18,
    hp: "180 (19d10 + 76)",
    speed: "0 ft., fly 20 ft. (hover)",
    str: 10,
    dex: 14,
    con: 18,
    int: 17,
    wis: 15,
    cha: 17,
    skills: "Perception +12",
    conditionImmunities: "prone",
    senses: "darkvision 120 ft., passive Perception 22",
    languages: "Deep Speech, Undercommon",
    traits: [
      {
        name: "Antimagic Cone",
        description:
          "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone.",
      },
    ],
    actions: [
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage.",
      },
      {
        name: "Eye Rays",
        description:
          "The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it.",
      },
    ],
    environment: ["Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "gelatinous-cube",
    name: "Gelatinous Cube",
    size: "Large",
    type: "ooze",
    alignment: "unaligned",
    cr: "2",
    ac: 6,
    hp: "84 (8d10 + 40)",
    speed: "15 ft.",
    str: 14,
    dex: 3,
    con: 20,
    int: 1,
    wis: 6,
    cha: 1,
    conditionImmunities:
      "blinded, charmed, deafened, exhaustion, frightened, prone",
    senses:
      "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
    languages: "—",
    traits: [
      {
        name: "Ooze Cube",
        description:
          "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.",
      },
      {
        name: "Transparent",
        description:
          "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked.",
      },
    ],
    actions: [
      {
        name: "Pseudopod",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.",
      },
      {
        name: "Engulf",
        description:
          "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.",
      },
    ],
    environment: ["Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "kobold",
    name: "Kobold",
    size: "Small",
    type: "humanoid",
    alignment: "lawful evil",
    cr: "1/8",
    ac: 12,
    hp: "5 (2d6 - 2)",
    speed: "30 ft.",
    str: 7,
    dex: 15,
    con: 9,
    int: 8,
    wis: 7,
    cha: 8,
    senses: "darkvision 60 ft., passive Perception 8",
    languages: "Common, Draconic",
    traits: [
      {
        name: "Sunlight Sensitivity",
        description:
          "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
      },
      {
        name: "Pack Tactics",
        description:
          "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated.",
      },
    ],
    actions: [
      {
        name: "Dagger",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
      },
      {
        name: "Sling",
        description:
          "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
      },
    ],
    environment: ["Forest", "Hills", "Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "troll",
    name: "Troll",
    size: "Large",
    type: "giant",
    alignment: "chaotic evil",
    cr: "5",
    ac: 15,
    hp: "84 (8d10 + 40)",
    speed: "30 ft.",
    str: 18,
    dex: 13,
    con: 20,
    int: 7,
    wis: 9,
    cha: 7,
    skills: "Perception +2",
    senses: "darkvision 60 ft., passive Perception 12",
    languages: "Giant",
    traits: [
      {
        name: "Keen Smell",
        description:
          "The troll has advantage on Wisdom (Perception) checks that rely on smell.",
      },
      {
        name: "Regeneration",
        description:
          "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The troll makes three attacks: one with its bite and two with its claws.",
      },
      {
        name: "Bite",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.",
      },
      {
        name: "Claw",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
      },
    ],
    environment: [
      "Arctic",
      "Forest",
      "Hills",
      "Mountain",
      "Swamp",
      "Underdark",
    ],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "mind-flayer",
    name: "Mind Flayer",
    size: "Medium",
    type: "aberration",
    alignment: "lawful evil",
    cr: "7",
    ac: 15,
    hp: "71 (13d8 + 13)",
    speed: "30 ft.",
    str: 11,
    dex: 12,
    con: 12,
    int: 19,
    wis: 17,
    cha: 17,
    skills:
      "Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4",
    senses: "darkvision 120 ft., passive Perception 16",
    languages: "Deep Speech, Undercommon, telepathy 120 ft.",
    traits: [
      {
        name: "Magic Resistance",
        description:
          "The mind flayer has advantage on saving throws against spells and other magical effects.",
      },
      {
        name: "Innate Spellcasting (Psionics)",
        description:
          "The mind flayer's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components: At will: detect thoughts, levitate.",
      },
    ],
    actions: [
      {
        name: "Tentacles",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15 (2d10 + 4) psychic damage. If the target is Medium or smaller, it is grappled (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be stunned until this grapple ends.",
      },
      {
        name: "Extract Brain",
        description:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one incapacitated humanoid grappled by the mind flayer. Hit: The target takes 55 (10d10) piercing damage. If this damage reduces the target to 0 hit points, the mind flayer kills the target by extracting and devouring its brain.",
      },
      {
        name: "Mind Blast (Recharge 5-6)",
        description:
          "The mind flayer magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (4d8 + 4) psychic damage and be stunned for 1 minute.",
      },
    ],
    environment: ["Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "zombie",
    name: "Zombie",
    size: "Medium",
    type: "undead",
    alignment: "neutral evil",
    cr: "1/4",
    ac: 8,
    hp: "22 (3d8 + 9)",
    speed: "20 ft.",
    str: 13,
    dex: 6,
    con: 16,
    int: 3,
    wis: 6,
    cha: 5,
    damageImmunities: "poison",
    conditionImmunities: "poisoned",
    senses: "darkvision 60 ft., passive Perception 8",
    languages: "understands the languages it knew in life but can't speak",
    traits: [
      {
        name: "Undead Fortitude",
        description:
          "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
      },
    ],
    actions: [
      {
        name: "Slam",
        description:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
      },
    ],
    environment: ["Urban", "Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "displacer-beast",
    name: "Displacer Beast",
    size: "Large",
    type: "monstrosity",
    alignment: "lawful evil",
    cr: "3",
    ac: 13,
    hp: "85 (10d10 + 30)",
    speed: "40 ft.",
    str: 18,
    dex: 15,
    con: 16,
    int: 6,
    wis: 12,
    cha: 8,
    senses: "darkvision 60 ft., passive Perception 11",
    languages: "—",
    traits: [
      {
        name: "Avoidance",
        description:
          "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
      },
      {
        name: "Displacement",
        description:
          "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn.",
      },
    ],
    actions: [
      {
        name: "Multiattack",
        description:
          "The displacer beast makes two attacks with its tentacles.",
      },
      {
        name: "Tentacle",
        description:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage.",
      },
    ],
    environment: ["Forest", "Underground"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "skeleton",
    name: "Skeleton",
    size: "Medium",
    type: "undead",
    alignment: "lawful evil",
    cr: "1/4",
    ac: 13,
    hp: "13 (2d8 + 4)",
    speed: "30 ft.",
    str: 10,
    dex: 14,
    con: 15,
    int: 6,
    wis: 8,
    cha: 5,
    damageImmunities:
      "poison; bludgeoning, piercing, and slashing from nonmagical attacks",
    conditionImmunities: "exhaustion, poisoned",
    senses: "darkvision 60 ft., passive Perception 9",
    languages: "understands all languages it knew in life but can't speak",
    actions: [
      {
        name: "Shortsword",
        description:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
      },
      {
        name: "Shortbow",
        description:
          "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
      },
    ],
    environment: ["Underground", "Urban"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "lich",
    name: "Lich",
    size: "Medium",
    type: "undead",
    alignment: "any evil alignment",
    cr: "21",
    ac: 17,
    hp: "135 (18d8 + 54)",
    speed: "30 ft.",
    str: 11,
    dex: 16,
    con: 16,
    int: 20,
    wis: 14,
    cha: 16,
    skills: "Arcana +18, History +12, Insight +9, Perception +9",
    damageResistances: "cold, lightning, necrotic",
    senses: "truesight 120 ft., passive Perception 19",
    languages: "Common plus up to five other languages",
    traits: [
      {
        name: "Legendary Resistance (3/Day)",
        description:
          "If the lich fails a saving throw, it can choose to succeed instead.",
      },
      {
        name: "Rejuvenation",
        description:
          "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.",
      },
    ],
    actions: [
      {
        name: "Paralyzing Touch",
        description:
          "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute.",
      },
    ],
    environment: ["Underground", "Urban"],
    image: "/placeholder.svg?height=200&width=300",
  },
];

export const monsterTypes = [
  "aberration",
  "beast",
  "celestial",
  "construct",
  "dragon",
  "elemental",
  "fey",
  "fiend",
  "giant",
  "humanoid",
  "monstrosity",
  "ooze",
  "plant",
  "undead",
];
export const monsterSizes = [
  "Tiny",
  "Small",
  "Medium",
  "Large",
  "Huge",
  "Gargantuan",
];
export const monsterAlignments = [
  "lawful good",
  "neutral good",
  "chaotic good",
  "lawful neutral",
  "neutral",
  "chaotic neutral",
  "lawful evil",
  "neutral evil",
  "chaotic evil",
  "unaligned",
];
export const challengeRatings = [
  "0",
  "1/8",
  "1/4",
  "1/2",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "30",
];
export const environments = [
  "Arctic",
  "Coastal",
  "Desert",
  "Forest",
  "Grassland",
  "Hills",
  "Mountain",
  "Swamp",
  "Underdark",
  "Underground",
  "Urban",
  "Water",
];
