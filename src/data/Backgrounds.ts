// src/data/backgrounds.ts

import { DND_LANGUAGES, DNDLanguage } from "@/interface/DNDLaunguages";

export interface BackgroundIdeal {
  text: string;
  alignment: string;
}

export interface BackgroundFeature {
  title: string;
  description: string;
}

export interface BackgroundChoiceOption {
  index: string;
  name: string;
}

export interface BackgroundChoiceGroup {
  choose: number;
  options: BackgroundChoiceOption[];
}

export interface BackgroundEquipmentItem {
  index: string;
  name: string;
  quantity?: number;
}

export interface Proficiencies {
  index: string;
  name: string;
}

export interface Background {
  id: string;
  name: string;
  feature: BackgroundFeature;
  specialty?: string[];
  personalityTraits: string[];
  ideals: BackgroundIdeal[];
  bonds: string[];
  flaws: string[];

  startingProficiencies: Proficiencies[];
  startingEquipment: BackgroundEquipmentItem[];

  proficienciesOptions?: BackgroundChoiceGroup;
  languageOptions?: BackgroundChoiceGroup;
  startingEquipmentOptions?: BackgroundChoiceGroup[];
}

/* ======================================================
   BACKGROUNDS
====================================================== */

export const BACKGROUNDS: Background[] = [
  /* ================= Acolyte ================= */
  {
    id: "acolyte",
    name: "Acolyte",
    feature: {
      title: "Shelter of the Faithful",
      description: `As an acolyte, you command the respect of those who share your faith, and you can perform the religious cerem onies of your deity. You and your adventuring com panions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material com ponents needed for spells. T hose w ho share your religion will support you (but only you) at a m odest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new hom e. W hile near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.`,
    },
    personalityTraits: [
      "I idolize a particular hero of my faith.",
      "I can find common ground between the fiercest enemies.",
      "I see omens in every event.",
      "Nothing can shake my optimistic attitude.",
      "I quote sacred texts in almost every situation.",
      "I am tolerant of other faiths.",
    ],
    ideals: [
      { text: "Tradition", alignment: "Lawful" },
      { text: "Charity", alignment: "Good" },
      { text: "Change", alignment: "Chaotic" },
      { text: "Power", alignment: "Lawful" },
      { text: "Faith", alignment: "Lawful" },
      { text: "Aspiration", alignment: "Any" },
    ],
    bonds: [
      "I would die to recover an ancient relic of my faith.",
      "I will someday get revenge on the corrupt hierarchy who branded me a heretic.",
      "I owe my life to a priest who took me in when my parents died.",
      "Everything I do is for the common people.",
      "I seek to preserve a sacred text.",
      "I protect a sacred site.",
    ],
    flaws: [
      "I judge others harshly, and myself even more severely.",
      "I put too much trust in those who wield power within my temple's hierarchy.",
      "My piety sometimes leads me to blindly trust those that profess faith in my god.",
      "I am inflexible in my thinking.",
      "I am suspicious of strangers and expect the worst of them.",
      "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life.",
    ],
    startingProficiencies: [
      { index: "skill-insight", name: "Insight" },
      { index: "skill-religion", name: "Religion" },
    ],

    startingEquipment: [
      { index: "clothes-common", name: "Clothes, common", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 15 },
    ],
    startingEquipmentOptions: [
      {
        choose: 1,
        options: [
          { index: "amulet", name: "Amulet" },
          { index: "emblem", name: "Emblem" },
          { index: "reliquary", name: "Reliquary" },
        ],
      },
    ],
    languageOptions: {
      choose: 2,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },
  },

  /* ================= Guild Artisan ================= */
  {
    id: "guild-artisan",
    name: "Guild Artisan",
    feature: {
      title: "Guild Membership",
      description: `As an established and respected member of a guild, you can rely on certain benefits that m em bership provides. Your fellow guild m em bers will provide you with lodging and food if necessary, and pay for your funeral if needed. In som e cities and towns, a guildhall offers a central place to meet other m em bers of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield trem endous political power. If you are accused of a crim e, your guild will support you if a good case can be made for your innocence or the crim e is justifiable. You can also gain access to pow erful political figures through the guild, if you are a mem ber in good standing. Such connections might require the donation of money or m agic items to the guild's coffers. You must pay dues of 5 gp per month to the guild. If you m iss payments, you must make up back dues to remain in the guild's good graces.`,
    },
    specialty: [
      "Alchemists and apothecaries",
      "Armorers, locksmiths, and finesmiths",
      "Brewers, distillers, and vintners",
      "Calligraphers, scribes, and scriveners",
      "Carpenters, roofers, and plasterers",
      "Cartographers, surveyors, and chart-makers",
      "Cobblers and shoemakers",
      "Cooks and bakers",
      "Glassblowers and glaziers",
      "Jewelers and gemcutters",
      "Leatherworkers, skinners, and tanners",
      "Masons and stonecutters",
      "Painters, limners, and sign-makers",
      "Potters and tile-makers",
      "Shipwrights and sailmakers",
      "Smiths and metal-forgers",
      "Tinkers, pewterers, and casters",
      "Wagon-makers and wheelwrights",
      "Weavers and dyers",
      "Woodcarvers, coopers, and bowyers",
    ],
    personalityTraits: [
      "I believe that anything worth doing is worth doing right. I can't help it— I'm a perfectionist.",
      "I'm a snob who looks down on those who can't appreciate fine art.",
      "I always want to know how things work and what makes people tick.",
      "I'm full of witty aphorisms and have a proverb for every occasion.",
      "I'm rude to people who lack my commitment to hard work and fair play.",
      "I like to talk at length about my profession.",
      "I don't part with my money easily and will haggle tirelessly to get the best deal possible",
      "I'm well known for my work, and I want to make sure everyone appreciates it. I'm always taken aback when people haven't heard of me.",
    ],
    ideals: [
      { text: "Community", alignment: "Lawful" },
      { text: "Generosity", alignment: "Good" },
      { text: "Freedom", alignment: "Chaotic" },
      { text: "Greed", alignment: "Evil" },
      { text: "Aspiration", alignment: "Any" },
      { text: "Excellence", alignment: "Any" },
    ],
    bonds: [
      "The workshop where I learned my trade is the most important place in the world to me.",
      "I created a great work for someone, and then found them unworthy to receive it. I'm still looking for someone worthy.",
      "I owe my guild a great debt for forging me into the person I am today.",
      "I pursue wealth to secure someone's love.",
      "One day I will return to my guild and prove that I am the greatest artisan of them all.",
      "I will get revenge on the evil forces that destroyed my place of business and ruined my livelihood.",
    ],
    flaws: [
      "I'll do anything to get my hands on something rare or priceless.",
      "I'm quick to assume that someone is trying to cheat me.",
      "No one must ever learn that I once stole money from guild coffers.",
      "I'm never satisfied with what I have— I always want more.",
      "I would kill to acquire a noble title.",
      "I'm horribly jealous of anyone who can outshine my handiwork. Everywhere I go, I'm surrounded by rivals.",
    ],

    startingProficiencies: [
      { index: "skill-acrobatics", name: "Acrobatics" },
      { index: "skill-performance", name: "Performance" },
      { index: "tool-disguise-kit", name: "Disguise Kit" },
    ],

    proficienciesOptions: {
      choose: 1,
      options: [{ index: "artisans-tools", name: "Artisan's Tools" }],
    },

    startingEquipment: [
      { index: "artisan-tools", name: "Set of artisan's tools", quantity: 1 },
      {
        index: "letter-of-introduction",
        name: "Letter of introduction from your guild",
        quantity: 1,
      },
      {
        index: "clothes-travelers",
        name: "Clothes, traveler's",
        quantity: 1,
      },
      { index: "pouch", name: "Pouch", quantity: 15 },
    ],

    startingEquipmentOptions: [
      {
        choose: 1,
        options: [
          {
            index: "alchemists-supplies",
            name: "Alchemist's Supplies",
          },
          {
            index: "brewers-supplies",
            name: "Brewer's Supplies",
          },
          {
            index: "calligraphers-supplies",
            name: "Calligrapher's Supplies",
          },
          {
            index: "carpenters-tools",
            name: "Carpenter's Tools",
          },
          {
            index: "cartographers-tools",
            name: "Cartographer's Tools",
          },
          {
            index: "cobblers-tools",
            name: "Cobbler's Tools",
          },
          {
            index: "cooks-utensils",
            name: "Cook's utensils",
          },
          {
            index: "glassblowers-tools",
            name: "Glassblower's Tools",
          },
          {
            index: "jewelers-tools",
            name: "Jeweler's Tools",
          },
          {
            index: "leatherworkers-tools",
            name: "Leatherworker's Tools",
          },
          {
            index: "masons-tools",
            name: "Mason's Tools",
          },
          {
            index: "painters-supplies",
            name: "Painter's Supplies",
          },
          {
            index: "potters-tools",
            name: "Potter's Tools",
          },
          {
            index: "smiths-tools",
            name: "Smith's Tools",
          },
          {
            index: "tinkers-tools",
            name: "Tinker's Tools",
          },
          {
            index: "weavers-tools",
            name: "Weaver's Tools",
          },
          {
            index: "woodcarvers-tools",
            name: "Woodcarver's Tools",
          },
        ],
      },
    ],

    languageOptions: {
      choose: 1,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },
  },

  /* ================= Entertainer ================= */
  {
    id: "entertainer",
    name: "Entertainer",
    feature: {
      title: "By Popular Demand",
      description: `You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a m odest or com fortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your perform ance m akes you som ething of a local figure. W hen strangers recognize you in a town where you have perform ed, they typically take a liking to you.
`,
    },
    specialty: [
      "Actor",
      "Instrumentalist",
      "Dancer",
      "Poet",
      "Fire-eater",
      "Singer",
      "jester",
      "Storyteller",
      "juggler",
      "Tumbler",
    ],
    personalityTraits: [
      "I know a story relevant to almost every situation.",
      "Whenever I come to a new place, I collect local rumors and spread gossip.",
      "I'm a hopeless romantic, always searching for that “special someone.”",
      "Nobody stays angry at me or around me for long, since I can defuse any amount of tension.",
      "I love a good insult, even one directed at me.",
      "I get bitter if I'm not the center of attention.",
      "I'll settle for nothing less than perfection.",
      "I change my mood or my mind as quickly as I change key in a song.",
    ],
    ideals: [
      { text: "Beauty", alignment: "Good" },
      { text: "Tradition", alignment: "Lawful" },
      { text: "Creativity", alignment: "Chaotic" },
      { text: "Greed", alignment: "Evil" },
      { text: "People", alignment: "Neutral" },
      { text: "Honesty", alignment: "Any" },
    ],
    bonds: [
      "My instrument is my most treasured possession, and it reminds me of someone I love.",
      "Someone stole my precious instrument, and someday I'll get it back.",
      "I want to be famous, whatever it takes.",
      "I idolize a hero of the old tales and measure my deeds against that person's.",
      "I will do anything to prove myself superior to my hated rival.",
      "I would do anything for the other members of my old troupe.",
    ],
    flaws: [
      "I'll do anything to win fame and renown.",
      "I'm a sucker for a pretty face.",
      "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.",
      "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.",
      "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
      "Despite my best efforts, I am unreliable to my friends.",
    ],

    startingProficiencies: [
      { index: "skill-acrobatics", name: "Acrobatics" },
      { index: "skill-performance", name: "Performance" },
      { index: "tool-disguise-kit", name: "Disguise Kit" },
    ],

    proficienciesOptions: {
      choose: 1,
      options: [{ index: "musical-instruments", name: "Musical Instrument" }],
    },

    startingEquipment: [
      { index: "clothes-costume", name: "Clothes, Costume", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 15 },
    ],

    startingEquipmentOptions: [
      {
        choose: 1,
        options: [
          { index: "love-letter", name: "Love Letter" },
          { index: "lock-of-hair", name: "Lock Of Hair" },
          { index: "trinket", name: "Trinket" },
        ],
      },
      {
        choose: 1,
        options: [
          {
            index: "bagpipes",
            name: "Bagpipes",
          },
          {
            index: "drum",
            name: "Drum",
          },
          {
            index: "dulcimer",
            name: "Dulcimer",
          },
          {
            index: "flute",
            name: "Flute",
          },
          {
            index: "lute",
            name: "Lute",
          },
          {
            index: "lyre",
            name: "Lyre",
          },
          {
            index: "horn",
            name: "Horn",
          },
          {
            index: "pan-flute",
            name: "Pan flute",
          },
          {
            index: "shawm",
            name: "Shawm",
          },
          {
            index: "viol",
            name: "Viol",
          },
        ],
      },
    ],
  },

  /* ================= Charlatan ================= */
  {
    id: "charlatan",
    name: "Charlatan",
    feature: {
      title: "False Identity",
      description: `You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge docum ents including official papers and personal letters, as long as you have seen an example of the kind of docum ent or the handwriting you are trying to copy.`,
    },
    specialty: [
      "I cheat at games of chance.",
      "I shave coins or forge documents.",
      "I insinuate myself into people's lives to prey on their weakness and secure their fortunes.",
      "I put on new identities like clothes.",
      "I run sleight-of-hand cons on street corners.",
      "I convince people that worthless junk is worth their hard-earned money.",
    ],
    personalityTraits: [
      "I fall in and out of love easily, and am always pursuing someone.",
      "I have a joke for every occasion, especially occasions where humor is inappropriate.",
      "Flattery is my preferred trick for getting what I want.",
      "I'm a born gambler who can't resist taking a risk for a potential payoff.",
      "I lie about almost everything, even when there's no good reason to.",
      "Sarcasm and insults are my weapons of choice.",
      "I keep multiple holy symbols on me and invoke whatever deity might come in useful at any given moment.",
      "I pocket anything I see that might have some value.",
    ],
    ideals: [
      { text: "Independence", alignment: "Chaotic" },
      { text: "Fairness", alignment: "Lawful" },
      { text: "Charity", alignment: "Good" },
      { text: "Creativity", alignment: "Chaotic" },
      { text: "Friendship", alignment: "Good" },
      { text: "Aspiration", alignment: "Any" },
    ],
    bonds: [
      "I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.",
      "I owe everything to my mentor—a horrible person who's probably rotting in jail somewhere.",
      "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.",
      "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.",
      "A powerful person killed someone I love. Some day soon, I'll have my revenge.",
      "I swindled and ruined a person who didn't deserve it. I seek to atone for my misdeeds but might never be able to forgive myself.",
    ],
    flaws: [
      "I can't resist a pretty face.",
      "I'm always in debt. I spend my ill-gotten gains on decadent luxuries faster than I bring them in.",
      "I'm convinced that no one could ever fool me the way I fool others.",
      "I'm too greedy for my own good. I can't resist taking a risk if there's money involved.",
      "I can't resist swindling people who are more powerful than me.",
      "I hate to admit it and will hate myself for it, but I'll run and preserve my own hide if the going gets tough.",
    ],
    startingProficiencies: [
      { index: "skill-deception", name: "Deception" },
      { index: "skill-sleight-of-hand", name: "Sleight of Hand" },
      { index: "tool-disguise-kit", name: "Disguise Kit" },
      { index: "tool-forgery-kit", name: "Forgery Kit" },
    ],

    startingEquipment: [
      { index: "clothes-fine", name: "Clothes, Fine", quantity: 1 },
      { index: "disguise-kit", name: "Disguise Kit", quantity: 1 },
      { index: "forgery-kit", name: "Forgery Kit", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 15 },
    ],

    startingEquipmentOptions: [
      {
        choose: 1,
        options: [
          {
            index: "con-tools",
            name: "Ten Stoppered Bottles Filled with Colored Liquid",
          },
          { index: "weighted-dice-set", name: "Weighted Dice" },
          { index: "marked-cards-set", name: "Marked Cards" },
          { index: "signet-ring", name: "Signet Ring of an Imaginary Duke" },
        ],
      },
    ],
  },

  /* ================= Criminal ================= */
  {
    id: "criminal",
    name: "Criminal",
    feature: {
      title: "Criminal Contact",
      description: `You have a reliable and trustworthy contact who acts as your liaison to a network o f other criminals. You know how to get m essages to and from your contact, even over great distances; specifically, you know the local m essengers, corrupt caravan masters, and seedy sailors w ho can deliver m essages for you.`,
    },
    specialty: [
      "Blackmailer",
      "Highway robber",
      "Burglar",
      "Hired killer",
      "Enforcer",
      "Pickpocket",
      "Fence",
      "Smuggler",
    ],
    personalityTraits: [
      "I always have a plan for what to do when things go wrong.",
      "I am always calm, no matter what the situation. I never raise my voice or let my emotions control me.",
      "The first thing I do in a new place is note the locations of everything valuable—or where such things could be hidden.",
      "I would rather make a new friend than a new enemy.",
      "I am incredibly slow to trust. Those who seem the fairest often have the most to hide.",
      "I don't pay attention to the risks in a situation. Never tell me the odds.",
      "The best way to get me to do something is to tell me I can't do it.",
      "I blow up at the slightest insult.",
    ],
    ideals: [
      { text: "Honor", alignment: "Lawful" },
      { text: "Freedom", alignment: "Chaotic" },
      { text: "Charity", alignment: "Good" },
      { text: "Greed", alignment: "Evil" },
      { text: "People", alignment: "Neutral" },
      { text: "Redemption", alignment: "Good" },
    ],
    bonds: [
      "I'm trying to pay off an old debt I owe to a generous benefactor.",
      "My ill-gotten gains go to support my family.",
      "Something important was taken from me, and I aim to steal it back.",
      "I will become the greatest thief that ever lived.",
      "I'm guilty of a terrible crime. I hope I can redeem myself for it.",
      "Someone I loved died because of a mistake I made. That will never happen again.",
    ],
    flaws: [
      "When I see something valuable, I can't think about anything but how to steal it.",
      "When faced with a choice between money and my friends, I usually choose the money.",
      "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.",
      "I have a “tell” that reveals when I'm lying.",
      "I turn tail and run when things look bad.",
      "An innocent person is in prison for a crime that I committed. I'm okay with that.",
    ],
    startingProficiencies: [
      { index: "skill-deception", name: "Deception" },
      { index: "skill-stealth", name: "Stealth" },
      { index: "tool-thieves-tools", name: "Thieves’ Tools" },
    ],
    proficienciesOptions: {
      choose: 1,
      options: [
        {
          index: "gaming-sets",
          name: "Gaming Set",
        },
      ],
    },

    startingEquipment: [
      { index: "crowbar", name: "Crowbar", quantity: 1 },
      { index: "clothes-common", name: "Clothes, Common", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 15 },
    ],
    startingEquipmentOptions: [
      {
        choose: 1,
        options: [
          { index: "dice-set", name: "Dice Set" },
          { index: "playing-card-set", name: "Playing Card Set" },
        ],
      },
    ],
  },

  /* ================= Hermit ================= */
  {
    id: "hermit",
    name: "Hermit",
    feature: {
      title: "Discovery",
      description: `The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosm os, the deities, the pow erful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed som e relic of the past that could rewrite history. It might be information that would be damaging to the people w ho or consigned you to exile, and hence the reason for your return to society. W ork with your DM to determine the details of your discovery and its impact on the campaign.`,
    },
    specialty: [
      "I was searching for spiritual enlightenment.",
      "I was partaking of communal living in accordance with the dictates of a religious order.",
      "I was exiled for a crime I didn't commit.",
      "I retreated from society after a life-altering event.",
      "I needed a quiet place to work on my art, literature, music, or manifesto.",
      "I needed to commune with nature, far from civilization.",
      "I was the caretaker of an ancient ruin or relic.",
      "I was a pilgrim in search of a person, place, or relic of spiritual significance",
    ],
    personalityTraits: [
      "I've been isolated for so long that I rarely speak, preferring gestures and the occasional grunt.",
      "I am utterly serene, even in the face of disaster.",
      "The leader of my community had something wise to say on every topic, and I am eager to share that wisdom.",
      "I feel tremendous empathy for all who suffer.",
      "I'm oblivious to etiquette and social expectations.",
      "I connect everything that happens to me to a grand, cosmic plan.",
      "I often get lost in my own thoughts and contemplation, becoming oblivious to my surroundings.",
      "I am working on a grand philosophical theory and love sharing my ideas.",
    ],
    ideals: [
      { text: "Greater Good", alignment: "Good" },
      { text: "Logic", alignment: "Lawful" },
      { text: "Free Thinking", alignment: "Chaotic" },
      { text: "Power", alignment: "Evil" },
      { text: "Live and Let Live", alignment: "Neutral" },
      { text: "Self-Knowledge", alignment: "Any" },
    ],
    bonds: [
      "Nothing is more important than the other members of my hermitage, order, or association.",
      "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.",
      "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.",
      "I entered seclusion because I loved someone I could not have.",
      "Should my discovery come to light, it could bring ruin to the world.",
      "My isolation gave me great insight into a great evil that only I can destroy.",
    ],
    flaws: [
      "Now that I've returned to the world, I enjoy its delights a little too much.",
      "I harbor dark, bloodthirsty thoughts that my isolation and meditation failed to quell.",
      "I am dogmatic in my thoughts and philosophy.",
      "I let my need to win arguments overshadow friendships and harmony.",
      "I'd risk too much to uncover a lost bit of knowledge.",
      "I like keeping secrets and won't share them with anyone.",
    ],
    startingProficiencies: [
      { index: "skill-medicine", name: "Medicine" },
      { index: "skill-religion", name: "Religion" },
      { index: "tool-herbalism-kit", name: "Herbalism Kit" },
    ],

    languageOptions: {
      choose: 1,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },

    startingEquipment: [
      {
        index: "case-scroll",
        name: "Scroll Case Stuffed Full of Notes",
        quantity: 1,
      },
      { index: "clothes-common", name: "Clothes, Common", quantity: 1 },
      { index: "herbalism-kit", name: "Herbalism Kit", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 5 },
    ],
  },

  /* ================= Outlander ================= */
  {
    id: "outlander",
    name: "Outlander",
    feature: {
      title: "Wanderer",
      description: `You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth. `,
    },
    specialty: [
      "Forester",
      "Bounty hunter",
      "Trapper",
      "Pilgrim",
      "Homesteader",
      "Tribal nomad",
      "Guide",
      "Hunter-gatherer",
      "Exile or outcast",
      "Tribal marauder",
    ],
    personalityTraits: [
      "I'm driven by a wanderlust that led me away from home.",
      "I watch over my friends as if they were a litter of newborn pups.",
      "I once ran twenty-five miles without stopping to warn my clan of an approaching orc horde. I'd do it again if I had to.",
      "I have a lesson for every situation, drawn from observing nature.",
      "I place no stock in wealthy or well-mannered folk. Money and manners won't save you from a hungry owlbear.",
      "I'm always picking things up, absently fiddling with them, and sometimes accidentally breaking them.",
      "I feel far more comfortable around animals than people.",
      "I was, in fact, raised by wolves.",
    ],
    ideals: [
      { text: "Change", alignment: "Chaotic" },
      { text: "Greater Good", alignment: "Good" },
      { text: "Honor", alignment: "Lawful" },
      { text: "Might", alignment: "Evil" },
      { text: "Nature", alignment: "Neutral" },
      { text: "Glory", alignment: "Any" },
    ],
    bonds: [
      "My family, clan, or tribe is the most important thing in my life, even when they are far from me.",
      "An injury to the unspoiled wilderness of my home is an injury to me.",
      "I will bring terrible wrath down on the evildoers who destroyed my homeland.",
      "I am the last of my tribe, and it is up to me to ensure their names enter legend.",
      "I suffer awful visions of a coming disaster and will do anything to prevent it.",
      "It is my duty to provide children to sustain my tribe.",
    ],
    flaws: [
      "I am too enamored of ale, wine, and other intoxicants.",
      "There's no room for caution in a life lived to the fullest.",
      "I remember every insult I've received and nurse a silent resentment toward anyone who's ever wronged me.",
      "I am slow to trust members of other races, tribes, and societies.",
      "Violence is my answer to almost any challenge.",
      "Don't expect me to save those who can't save themselves. It is nature's way that the strong thrive and the weak perish.",
    ],
    startingProficiencies: [
      { index: "skill-athletics", name: "Athletics" },
      { index: "skill-survival", name: "Survival" },
    ],
    proficienciesOptions: {
      choose: 1,
      options: [
        { index: "tool-musical-instrument", name: "Musical Instrument" },
      ],
    },

    languageOptions: {
      choose: 1,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },
    startingEquipment: [
      { index: "staff", name: "Staff", quantity: 1 },
      { index: "hunting-trap", name: "Hunting Trap", quantity: 1 },
      {
        index: "trophy",
        name: "Trophy from an Animal You Killed",
        quantity: 1,
      },
      { index: "clothes-traveler", name: "Traveler's Clothes", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 10 },
    ],
  },

  /* ================= Folk Hero ================= */
  {
    id: "folk-hero",
    name: "Folk Hero",
    feature: {
      title: "Rustic Hospitality",
      description: `Since you come from the ranks of the common folk, you fit in am ong them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have show n yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you`,
    },
    specialty: [
      "I stood up to a tyrant's agents.",
      "I saved people during a natural disaster.",
      "I stood alone against a terrible monster.",
      "I stole from a corrupt merchant to help the poor.",
      "I led a militia to fight off an invading army.",
      "I broke into a tyrant's castle and stole weapons to arm the people.",
      "I trained the peasantry to use farm implements as weapons against a tyrant's soldiers.",
      "A lord rescinded an unpopular decree after I led a symbolic act of protect against it.",
      "A celestial, fey, or similar creature gave me a blessing or revealed my secret origin.",
      "Recruited into a lord's army, I rose to leadership and was commended for my heroism.",
    ],
    personalityTraits: [
      "I judge people by their actions, not their words.",
      "If someone is in trouble, I'm always ready to lend help.",
      "When I set my mind to something, I follow through no matter what gets in my way.",
      "I have a strong sense of fair play and always try to find the most equitable solution to arguments.",
      "I'm confident in my own abilities and do what I can to instill confidence in others.",
      "Thinking is for other people. I prefer action.",
      "I misuse long words in an attempt to sound smarter.",
      "I get bored easily. When am I going to get on with my destiny?",
    ],
    ideals: [
      { text: "Respect", alignment: "Good" },
      { text: "Fairness", alignment: "Lawful" },
      { text: "Freedom", alignment: "Chaotic" },
      { text: "Might", alignment: "Evil" },
      { text: "Sincerity", alignment: "Neutral" },
      { text: "Destiny", alignment: "Any" },
    ],
    bonds: [
      "I have a family, but I have no idea where they are. One day, I hope to see them again.",
      "I worked the land, I love the land, and I will protect the land.",
      "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.",
      "My tools are symbols of my past life, and I carry them so that I will never forget my roots.",
      "I protect those who cannot protect themselves.",
      "I wish my childhood sweetheart had come with me to pursue my destiny.",
    ],
    flaws: [
      "The tyrant who rules my land will stop at nothing to see me killed.",
      "I'm convinced of the significance of my destiny, and blind to my shortcomings and the risk of failure.",
      "The people who knew me when I was young know my shameful secret, so I can never go home again.",
      "I have a weakness for the vices of the city, especially hard drink.",
      "Secretly, I believe that things would be better if I were a tyrant lording over the land.",
      "I have trouble trusting in my allies.",
    ],
    startingProficiencies: [
      { index: "skill-animal-handling", name: "Animal Handling" },
      { index: "skill-survival", name: "Survival" },
      { index: "land-vehicles", name: "Vehicles (Land)" },
    ],
    proficienciesOptions: {
      choose: 1,
      options: [{ index: "artisans-tools", name: "Artisan’s Tools" }],
    },

    languageOptions: {
      choose: 1,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },

    startingEquipment: [
      { index: "shovel", name: "Shovel", quantity: 1 },
      { index: "iron-pot", name: "Iron Pot", quantity: 1 },
      { index: "clothes-common", name: "Clothes, Common", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 1 },
    ],
  },

  /* ================= Noble ================= */
  {
    id: "noble",
    name: "Noble",
    feature: {
      title: "Position of Privilege",
      description: `Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The com m on folk m ake every effort to accom m odate you and avoid your displeasure, and other people of high birth treat you as a m em ber of the sam e social sphere. You can secure an audience with a local noble if you need to. `,
    },
    personalityTraits: [
      "My eloquent flattery makes everyone I talk to feel like the most wonderful and important person in the world.",
      "The common folk love me for my kindness and generosity.",
      "No one could doubt by looking at my regal bearing that I am a cut above the unwashed masses.",
      "I take great pains to always look my best and follow the latest fashions.",
      "I don't like to get my hands dirty, and I won't be caught dead in unsuitable accommodations.",
      "Despite my noble birth, I do not place myself above other folk. We all have the same blood.",
      "My favor, once lost, is lost forever.",
      "If you do me an injury, I will crush you, ruin your name, and salt your fields.",
    ],
    ideals: [
      { text: "Respect", alignment: "Good" },
      { text: "Responsibility", alignment: "Lawful" },
      { text: "Independence", alignment: "Chaotic" },
      { text: "Power", alignment: "Evil" },
      { text: "Family", alignment: "Any" },
      { text: "Noblesse Oblige", alignment: "Good" },
    ],
    bonds: [
      "I will face any challenge to win the approval of my family.",
      "My house's alliance with another noble family must be sustained at all costs.",
      "Nothing is more important than the other members of my family.",
      "I am in love with the heir of a family that my family despises.",
      "My loyalty to my sovereign is unwavering.",
      "The common folk must see me as a hero of the people.",
    ],
    flaws: [
      "I secretly believe that everyone is beneath me.",
      "I hide a truly scandalous secret that could ruin my family forever.",
      "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.",
      "I have an insatiable desire for carnal pleasures.",
      "In fact, the world does revolve around me.",
      "By my words and actions, I often bring shame to my family.",
    ],
    startingProficiencies: [
      { index: "skill-history", name: "History" },
      { index: "skill-persuasion", name: "Persuasion" },
    ],
    proficienciesOptions: {
      choose: 1,
      options: [{ index: "gaming-sets", name: "Gaming Sets" }],
    },

    languageOptions: {
      choose: 1,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },

    startingEquipment: [
      { index: "clothes-fine", name: "Clothes, Fine", quantity: 1 },
      { index: "signet-ring", name: "Signet Ring", quantity: 1 },
      { index: "scroll-pedigree", name: "Scroll of Pedigree", quantity: 1 },
      { index: "purse", name: "Purse", quantity: 25 },
    ],
  },

  /* ================= Sage ================= */
  {
    id: "sage",
    name: "Sage",
    feature: {
      title: "Researcher",
      description: `When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from w hom you can obtain it. Usually, this information com es from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an alm ost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign. `,
    },
    specialty: [
      "Alchemist",
      "Professor",
      "Astronomer",
      "Researcher",
      "Discredited academic",
      "Wizard's apprentice",
      "Scribe",
      "Librarian",
    ],
    personalityTraits: [
      "I use polysyllabic words that convey the impression of great erudition.",
      "I've read every book in the world's greatest libraries—or I like to boast that I have.",
      "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
      "There's nothing I like more than a good mystery.",
      "I'm willing to listen to every side of an argument before I make my own judgment.",
      "I speak slowly when talking to idiots, which almost everyone is compared to me.",
      "I am horribly, horribly awkward in social situations.",
      "I'm convinced that people are always trying to steal my secrets.",
    ],
    ideals: [
      { text: "Knowledge", alignment: "Neutral" },
      { text: "Beauty", alignment: "Good" },
      { text: "Logic", alignment: "Lawful" },
      { text: "No Limits", alignment: "Chaotic" },
      { text: "Power", alignment: "Evil" },
      { text: "Self-Improvement", alignment: "Any" },
    ],
    bonds: [
      "It is my duty to protect my students.",
      "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.",
      "I work to preserve a library, university, scriptorium, or monastery.",
      "My life's work is a series of tomes related to a specific field of lore.",
      "I've been searching my whole life for the answer to a certain question.",
      "I sold my soul for knowledge. I hope to do great deeds and win it back.",
    ],
    flaws: [
      "I am easily distracted by the promise of information.",
      "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
      "Unlocking an ancient mystery is worth the price of a civilization.",
      "I overlook obvious solutions in favor of complicated ones.",
      "I speak without really thinking through my words, invariably insulting others.",
      "I can't keep a secret to save my life, or anyone else's.",
    ],
    startingProficiencies: [
      { index: "skill-arcana", name: "Arcana" },
      { index: "skill-history", name: "History" },
    ],

    languageOptions: {
      choose: 2,
      options: DND_LANGUAGES.map((l) => ({
        index: l.index,
        name: l.name,
      })),
    },

    startingEquipment: [
      { index: "bottle-ink", name: "Bottle of Ink", quantity: 1 },
      { index: "quill", name: "Quill", quantity: 1 },
      { index: "small-knife", name: "Small Knife", quantity: 1 },
      {
        index: "letter-dead-colleague",
        name: "Letter from a Dead Colleague",
        quantity: 1,
      },
      { index: "clothes-common", name: "Clothes, Common", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 10 },
    ],
  },

  /* ================= Sailor ================= */
  {
    id: "sailor",
    name: "Sailor",
    feature: {
      title: "Ship's Passage",
      description: `When you need to, you can secure free passage on a sailing ship for yourself and your adventuring com panions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a form er crewmate). Because you’re calling in a favor, you can’t be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get w here you need to go. In return for your free passage, you and your com panions are expected to assist the crew during the voyage. `,
    },

    personalityTraits: [
      "My friends know they can rely on me, no matter what.",
      "I work hard so that I can play hard when the work is done.",
      "I enjoy sailing into new ports and making new friends over a flagon of ale.",
      "I stretch the truth for the sake of a good story.",
      "To me, a tavern brawl is a nice way to get to know a new city.",
      "I never pass up a friendly wager.",
      "My language is as foul as an otyugh nest.",
      "I like a job well done, especially if I can convince someone else to do it.",
    ],
    ideals: [
      { text: "Respect", alignment: "Good" },
      { text: "Fairness", alignment: "Lawful" },
      { text: "Freedom", alignment: "Chaotic" },
      { text: "Mastery", alignment: "Evil" },
      { text: "People", alignment: "Neutral" },
      { text: "Aspiration", alignment: "Any" },
    ],
    bonds: [
      "I'm loyal to my captain first, everything else second.",
      "The ship is most important—crewmates and captains come and go.",
      "I'll always remember my first ship.",
      "In a harbor town, I have a paramour whose eyes nearly stole me from the sea.",
      "I was cheated out of my fair share of the profits, and I want to get my due.",
      "Ruthless pirates murdered my captain and crewmates, plundered our ship, and left me to die. Vengeance will be mine.",
    ],
    flaws: [
      "I follow orders, even if I think they're wrong.",
      "I'll say anything to avoid having to do extra work.",
      "Once someone questions my courage, I never back down no matter how dangerous the situation.",
      "Once I start drinking, it's hard for me to stop.",
      "I can't help but pocket loose coins and other trinkets I come across.",
      "My pride will probably lead to my destruction.",
    ],
    startingProficiencies: [
      { index: "skill-athletics", name: "Athletics" },
      { index: "skill-Perception", name: "Perception" },
      { index: "navigators-tools", name: "Navigator's tools" },
      { index: "water-vehicles", name: "Vehicles (water)" },
    ],

    startingEquipment: [
      { index: "club", name: "Belaying Pin (club)", quantity: 1 },
      { index: "rope-silk-50-feet", name: "Rope, Silk (50 feet)", quantity: 1 },
      { index: "clothes-common", name: "Clothes, Common", quantity: 1 },
      { index: "lucky-charm", name: "Lucky Charm", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 10 },
    ],
  },

  /* ================= Soldier ================= */
  {
    id: "soldier",
    name: "Soldier",
    feature: {
      title: "Military Rank",
      description: `You have a military rank from your career as a soldier. Soldiers loyal to your form er military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for tem porary use. You can also usually gain access to friendly military encampm ents and fortresses w here your rank is recognized. `,
    },
    specialty: [
      "Officer",
      "Quartermaster",
      "Scout",
      "Standard bearer",
      "Infantry",
      "Support staff (cook blacksmith, or the like)",
      "Cavalry",
      "Healer",
    ],
    personalityTraits: [
      "I'm always polite and respectful.",
      "I'm haunted by memories of war. I can't get the images of violence out of my mind.",
      "I've lost too many friends, and I'm slow to make new ones.",
      "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
      "I can stare down a hell hound without flinching.",
      "I enjoy being strong and like breaking things.",
      "I have a crude sense of humor.",
      "I face problems head-on. A simple, direct solution is the best path to success.",
    ],
    ideals: [
      { text: "Greater Good", alignment: "Good" },
      { text: "Responsibility", alignment: "Lawful" },
      { text: "Independence", alignment: "Chaotic" },
      { text: "Might", alignment: "Evil" },
      { text: "Live and Let Live.", alignment: "Neutral" },
      { text: "Nation", alignment: "Any" },
    ],
    bonds: [
      "I would still lay down my life for the people I served with.",
      "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
      "My honor is my life.",
      "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
      "Those who fight beside me are those worth dying for.",
      "I fight for those who cannot fight for themselves.",
    ],
    flaws: [
      "The monstrous enemy we faced in battle still leaves me quivering with fear.",
      "I have little respect for anyone who is not a proven warrior.",
      "I made a terrible mistake in battle that cost many lives—and I would do anything to keep that mistake secret.",
      "My hatred of my enemies is blind and unreasoning.",
      "I obey the law, even if the law causes misery.",
      "I'd rather eat my armor than admit when I'm wrong.",
    ],
    startingProficiencies: [
      { index: "skill-athletics", name: "Athletics" },
      { index: "skill-intimidation", name: "Intimidation" },
    ],
    proficienciesOptions: {
      choose: 1,
      options: [
        {
          index: "gaming-sets",
          name: "Gaming Set",
        },
      ],
    },

    startingEquipment: [
      { index: "clothes-common", name: "Common Clothes", quantity: 1 },
      { index: "pouch", name: "Pouch", quantity: 1 },
      { index: "insignia-of-rank", name: "Insignia of Rank" },
      {
        index: "trophy-from-fallen-enemy",
        name: "Trophy taken from a fallen enemy",
      },
    ],
    startingEquipmentOptions: [
      {
        choose: 1,
        options: [
          { index: "dice-set", name: "Dice Set" },
          { index: "playing-card-set", name: "Playing Card Set" },
        ],
      },
    ],
  },
];
