export interface Equipment {
  id: string;
  name: string;
  type: string;
  rarity: Rarity;
  cost?: string;
  weight?: string;
  description: string;
  properties?: string[];
}

export type Rarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Very Rare"
  | "Legendary"
  | undefined;

export const equipment: Equipment[] = [
  {
    id: "longsword",
    name: "Longsword",
    type: "Martial Melee Weapon",
    rarity: "Common",
    cost: "15 gp",
    weight: "3 lb.",
    description: "A versatile blade, effective in one hand or two.",
    properties: ["Versatile (1d10)"],
  },
  {
    id: "shortbow",
    name: "Shortbow",
    type: "Simple Ranged Weapon",
    rarity: "Common",
    cost: "25 gp",
    weight: "2 lb.",
    description: "A compact bow for ranged combat.",
    properties: ["Ammunition (range 80/320)", "Two-Handed"],
  },
  {
    id: "plate-armor",
    name: "Plate Armor",
    type: "Heavy Armor",
    rarity: "Common",
    cost: "1,500 gp",
    weight: "65 lb.",
    description: "Full suit of interlocking metal plates. AC 18.",
    properties: ["Strength 15 required", "Disadvantage on Stealth"],
  },
  {
    id: "leather-armor",
    name: "Leather Armor",
    type: "Light Armor",
    rarity: "Common",
    cost: "10 gp",
    weight: "10 lb.",
    description:
      "Boiled leather for protection without sacrificing mobility. AC 11 + Dex modifier.",
    properties: [],
  },
  {
    id: "healing-potion",
    name: "Potion of Healing",
    type: "Potion",
    rarity: "Common",
    cost: "50 gp",
    weight: "0.5 lb.",
    description:
      "A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points.",
    properties: [],
  },
  {
    id: "rope-hempen",
    name: "Rope, Hempen (50 feet)",
    type: "Adventuring Gear",
    rarity: "Common",
    cost: "1 gp",
    weight: "10 lb.",
    description:
      "A rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.",
    properties: [],
  },
  {
    id: "thieves-tools",
    name: "Thieves' Tools",
    type: "Tools",
    rarity: "Common",
    cost: "25 gp",
    weight: "1 lb.",
    description:
      "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add your proficiency bonus to any ability checks you make to disarm traps or open locks.",
    properties: [],
  },
  {
    id: "bag-of-holding",
    name: "Bag of Holding",
    type: "Wondrous Item",
    rarity: "Uncommon",
    description:
      "This bag has an interior space considerably larger than its outside dimensions, roughly 2 feet in diameter at the mouth and 4 feet deep. The bag can hold up to 500 pounds, not exceeding a volume of 64 cubic feet. The bag weighs 15 pounds, regardless of its contents.",
    properties: ["Extradimensional space"],
  },
  {
    id: "cloak-of-protection",
    name: "Cloak of Protection",
    type: "Wondrous Item",
    rarity: "Uncommon",
    description:
      "You gain a +1 bonus to AC and saving throws while you wear this cloak.",
    properties: ["Requires attunement"],
  },
  {
    id: "flame-tongue",
    name: "Flame Tongue",
    type: "Weapon (any sword)",
    rarity: "Rare",
    description:
      "You can use a bonus action to speak this magic sword's command word, causing flames to erupt from the blade. These flames shed bright light in a 40-foot radius and dim light for an additional 40 feet. While the sword is ablaze, it deals an extra 2d6 fire damage to any target it hits.",
    properties: ["Requires attunement"],
  },
  {
    id: "boots-of-speed",
    name: "Boots of Speed",
    type: "Wondrous Item",
    rarity: "Rare",
    description:
      "While you wear these boots, you can use a bonus action and click the boots' heels together. If you do, the boots double your walking speed, and any creature that makes an opportunity attack against you has disadvantage on the attack roll. If you click your heels together again, you end the effect.",
    properties: ["Requires attunement"],
  },
  {
    id: "ring-of-protection",
    name: "Ring of Protection",
    type: "Ring",
    rarity: "Rare",
    description:
      "You gain a +1 bonus to AC and saving throws while wearing this ring.",
    properties: ["Requires attunement"],
  },
  {
    id: "staff-of-power",
    name: "Staff of Power",
    type: "Staff",
    rarity: "Very Rare",
    description:
      "This staff can be wielded as a magic quarterstaff that grants a +2 bonus to attack and damage rolls made with it. While holding it, you gain a +2 bonus to Armor Class, saving throws, and spell attack rolls. The staff has 20 charges for various spells.",
    properties: ["Requires attunement by a sorcerer, warlock, or wizard"],
  },
  {
    id: "vorpal-sword",
    name: "Vorpal Sword",
    type: "Weapon (any sword that deals slashing damage)",
    rarity: "Legendary",
    description:
      "You gain a +3 bonus to attack and damage rolls made with this magic weapon. In addition, the weapon ignores resistance to slashing damage. When you attack a creature that has at least one head with this weapon and roll a 20 on the attack roll, you cut off one of the creature's heads.",
    properties: ["Requires attunement"],
  },
  {
    id: "deck-of-many-things",
    name: "Deck of Many Things",
    type: "Wondrous Item",
    rarity: "Legendary",
    description:
      "Usually found in a box or pouch, this deck contains a number of cards made of ivory or vellum. Most (75 percent) of these decks have only thirteen cards, but the rest have twenty-two. Before you draw a card, you must declare how many cards you intend to draw and then draw them randomly.",
    properties: ["Extremely powerful and unpredictable effects"],
  },
];
