export interface SelectEquipmentOptions {
  dndClass: DndClass;
  choose: number;
  options: EquipmentChoice[];
}

interface EquipmentChoice {
  optionIndex: "A" | "B" | "C";
  description: string;
  items: EquipmentItem[];
}

interface EquipmentItem {
  index: string;
  name: string;
  quantity: number;
}

type DndClass =
  | "barbarian"
  | "bard"
  | "cleric"
  | "druid"
  | "fighter"
  | "monk"
  | "paladin"
  | "ranger"
  | "rogue"
  | "sorcerer"
  | "warlock"
  | "wizard";

export const EQUIPMENT_OPTIONS: SelectEquipmentOptions[] = [
  {
    dndClass: "barbarian",
    choose: 1,
    options: [
      {
        description: "Greataxe, 4 Handaxes, Explorer’s Pack, and 15 GP",
        optionIndex: "A",
        items: [
          { index: "greataxe", name: "Greataxe", quantity: 1 },
          { index: "handaxe", name: "Handaxe", quantity: 4 },
          { index: "explorers-pack", name: "Explorer's Pack", quantity: 1 },
          { index: "gold", name: "Gold", quantity: 15 },
        ],
      },
      {
        description: "75 GP",
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 75 }],
      },
    ],
  },
  // ======================
  // BARD
  // ======================
  {
    dndClass: "bard",
    choose: 1,
    options: [
      {
        description:
          "Leather Armor, 2 Daggers, Musical Instrument of your choice, Entertainer’s Pack, and 19 GP",
        optionIndex: "A",
        items: [
          { index: "leather-armor", name: "Leather Armor", quantity: 1 },
          { index: "dagger", name: "Dagger", quantity: 2 },
          {
            index: "musical-instrument",
            name: "Musical Instrument (choice)",
            quantity: 1,
          },
          {
            index: "entertainers-pack",
            name: "Entertainer’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 19 },
        ],
      },
      {
        description: "90 GP",
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 90 }],
      },
    ],
  },

  // ======================
  // CLERIC
  // ======================
  {
    dndClass: "cleric",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "chain-shirt", name: "Chain Shirt", quantity: 1 },
          { index: "shield", name: "Shield", quantity: 1 },
          { index: "mace", name: "Mace", quantity: 1 },
          { index: "holy-symbol", name: "Holy Symbol", quantity: 1 },
          { index: "priests-pack", name: "Priest’s Pack", quantity: 1 },
          { index: "gp", name: "Gold", quantity: 7 },
        ],
        description:
          "Chain Shirt, Shield, Mace, Holy Symbol, Priest’s Pack, and 7 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 110 }],
        description: "110GP",
      },
    ],
  },

  // ======================
  // DRUID
  // ======================
  {
    dndClass: "druid",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "leather-armor", name: "Leather Armor", quantity: 1 },
          { index: "shield", name: "Shield", quantity: 1 },
          { index: "sickle", name: "Sickle", quantity: 1 },
          {
            index: "druidic-focus",
            name: "Druidic Focus (Quarterstaff)",
            quantity: 1,
          },
          {
            index: "explorers-pack",
            name: "Explorer’s Pack",
            quantity: 1,
          },
          {
            index: "herbalism-kit",
            name: "Herbalism Kit",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 9 },
        ],
        description:
          "Chain Shirt, Shield, Mace, Holy Symbol, Priest’s Pack, and 7 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 50 }],
        description: "50 GP",
      },
    ],
  },

  // ======================
  // FIGHTER
  // ======================
  {
    dndClass: "fighter",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "chain-mail", name: "Chain Mail", quantity: 1 },
          { index: "greatsword", name: "Greatsword", quantity: 1 },
          { index: "flail", name: "Flail", quantity: 1 },
          { index: "javelin", name: "Javelin", quantity: 8 },
          {
            index: "dungeoneers-pack",
            name: "Dungeoneer’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 4 },
        ],
        description:
          "Chain Mail, Greatsword, Flail, 8 Javelins, Dungeoneer’s Pack, and 4 GP",
      },
      {
        optionIndex: "B",
        items: [
          {
            index: "studded-leather-armor",
            name: "Studded Leather Armor",
            quantity: 1,
          },
          { index: "scimitar", name: "Scimitar", quantity: 1 },
          { index: "shortsword", name: "Shortsword", quantity: 1 },
          { index: "longbow", name: "Longbow", quantity: 1 },
          { index: "arrow", name: "Arrow", quantity: 20 },
          { index: "quiver", name: "Quiver", quantity: 1 },
          {
            index: "dungeoneers-pack",
            name: "Dungeoneer’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 11 },
        ],
        description:
          "Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Dungeoneer’s Pack, and 11 GP;",
      },
      {
        optionIndex: "C",
        items: [{ index: "gp", name: "Gold", quantity: 155 }],
        description: "155 GP",
      },
    ],
  },

  // ======================
  // MONK
  // ======================
  {
    dndClass: "monk",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "spear", name: "Spear", quantity: 1 },
          { index: "dagger", name: "Dagger", quantity: 5 },
          {
            index: "tool-or-instrument",
            name: "Artisan’s Tools or Musical Instrument",
            quantity: 1,
          },
          {
            index: "explorers-pack",
            name: "Explorer’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 11 },
        ],
        description:
          "Spear, 5 Daggers, Artisan’s Tools or Musical Instrument chosen for the tool proficiency, Explorer’s Pack, and 11 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 50 }],
        description: "50 GP",
      },
    ],
  },

  // ======================
  // PALADIN
  // ======================
  {
    dndClass: "paladin",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "chain-mail", name: "Chain Mail", quantity: 1 },
          { index: "shield", name: "Shield", quantity: 1 },
          { index: "longsword", name: "Longsword", quantity: 1 },
          { index: "javelin", name: "Javelin", quantity: 6 },
          { index: "holy-symbol", name: "Holy Symbol", quantity: 1 },
          {
            index: "priests-pack",
            name: "Priest’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 9 },
        ],
        description:
          "Chain Mail, Shield, Longsword, 6 Javelins, Holy Symbol, Priest’s Pack, and 9 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 150 }],
        description: "150 GP",
      },
    ],
  },
  // ======================
  // RANGER
  // ======================
  {
    dndClass: "ranger",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "leather-armor", name: "Leather Armor", quantity: 1 },
          { index: "scimitar", name: "Scimitar", quantity: 1 },
          { index: "longbow", name: "Longbow", quantity: 1 },
          { index: "arrow", name: "Arrow", quantity: 20 },
          { index: "quiver", name: "Quiver", quantity: 6 },
          { index: "explorers-pack", name: "Explorer’s Pack", quantity: 1 },

          { index: "gp", name: "Gold", quantity: 7 },
        ],
        description:
          "Studded Leather Armor, Scimitar, Shortsword, Longbow, 20 Arrows, Quiver, Druidic Focus (sprig of mistletoe), Explorer’s Pack, and 7 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 150 }],
        description: "150 GP",
      },
    ],
  },

  // ======================
  // ROGUE
  // ======================
  {
    dndClass: "rogue",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "leather-armor", name: "Leather Armor", quantity: 1 },
          { index: "dagger", name: "Dagger", quantity: 2 },
          { index: "shortsword", name: "Shortsword", quantity: 1 },
          { index: "shortbow", name: "Shortbow", quantity: 1 },
          { index: "arrow", name: "Arrow", quantity: 20 },
          { index: "quiver", name: "Quiver", quantity: 1 },
          {
            index: "thieves-tools",
            name: "Thieves’ Tools",
            quantity: 1,
          },
          {
            index: "burglars-pack",
            name: "Burglar’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 8 },
        ],
        description:
          "Leather Armor, 2 Daggers, Shortsword, Shortbow, 20 Arrows, Quiver, Thieves’ Tools, Burglar’s Pack, and 8 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 100 }],
        description: "100 GP",
      },
    ],
  },

  // ======================
  // SORCERER
  // ======================
  {
    dndClass: "sorcerer",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "spear", name: "Spear", quantity: 1 },
          { index: "dagger", name: "Dagger", quantity: 2 },
          {
            index: "arcane-focus",
            name: "Arcane Focus (Crystal)",
            quantity: 1,
          },
          {
            index: "dungeoneers-pack",
            name: "Dungeoneer’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 28 },
        ],
        description:
          "Spear, 2 Daggers, Arcane Focus (crystal), Dungeoneer’s Pack, and 28 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 50 }],
        description: "50 GP",
      },
    ],
  },

  // ======================
  // WARLOCK
  // ======================
  {
    dndClass: "warlock",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "leather-armor", name: "Leather Armor", quantity: 1 },
          { index: "sickle", name: "Sickle", quantity: 1 },
          { index: "dagger", name: "Dagger", quantity: 2 },
          {
            index: "arcane-focus",
            name: "Arcane Focus (Orb)",
            quantity: 1,
          },
          {
            index: "occult-book",
            name: "Book of Occult Lore",
            quantity: 1,
          },
          {
            index: "scholars-pack",
            name: "Scholar’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 15 },
        ],
        description:
          "Leather Armor, Sickle, 2 Daggers, Arcane Focus (orb), Book (occult lore), Scholar’s Pack, and 15 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 100 }],
        description: "100 GP",
      },
    ],
  },

  // ======================
  // WIZARD
  // ======================
  {
    dndClass: "wizard",
    choose: 1,
    options: [
      {
        optionIndex: "A",
        items: [
          { index: "dagger", name: "Dagger", quantity: 2 },
          {
            index: "arcane-focus",
            name: "Arcane Focus (Quarterstaff)",
            quantity: 1,
          },
          { index: "robe", name: "Robe", quantity: 1 },
          { index: "spellbook", name: "Spellbook", quantity: 1 },
          {
            index: "scholars-pack",
            name: "Scholar’s Pack",
            quantity: 1,
          },
          { index: "gp", name: "Gold", quantity: 5 },
        ],
        description:
          "2 Daggers, Arcane Focus (Quarterstaff), Robe, Spellbook, Scholar’s Pack, and 5 GP",
      },
      {
        optionIndex: "B",
        items: [{ index: "gp", name: "Gold", quantity: 55 }],
        description: "55 GP",
      },
    ],
  },
];
