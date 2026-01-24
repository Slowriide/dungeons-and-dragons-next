import { GoldEntry } from "@/interface/character/DNDCharacter";

export function getTotalGold(gold: unknown): number {
  if (!Array.isArray(gold)) return 0;

  return gold.reduce((total, entry) => total + entry.quantity, 0);
}
