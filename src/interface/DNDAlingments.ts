export const DND_ALIGNMENTS = [
  { index: "lawful-good", name: "Lawful Good" },
  { index: "neutral-good", name: "Neutral Good" },
  { index: "chaotic-good", name: "Chaotic Good" },
  { index: "lawful-neutral", name: "Chaotic Good" },
  { index: "neutral", name: "Chaotic Good" },
  { index: "chaotic-neutral", name: "Chaotic Good" },
  { index: "lawful-evil", name: "Chaotic Good" },
  { index: "neutral-evil", name: "Chaotic Good" },
  { index: "chaotic-evil", name: "Chaotic Good" },
];

export type Alignment = (typeof DND_ALIGNMENTS)[number]["index"];
