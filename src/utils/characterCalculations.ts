// utils/characterCalculations.ts

import { AbilityBonus } from "@/interface/races/DNDRace";

export interface Attributes {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface AbilityBonuses {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
}

export const getModifier = (score: number): number => {
  return Math.floor((score - 10) / 2);
};

export const getFinalAttributes = (
  baseAttributes: Attributes,
  abilityBonuses: AbilityBonuses,
) => {
  return {
    strength: baseAttributes.strength + (abilityBonuses.strength || 0),
    dexterity: baseAttributes.dexterity + (abilityBonuses.dexterity || 0),
    constitution:
      baseAttributes.constitution + (abilityBonuses.constitution || 0),
    intelligence:
      baseAttributes.intelligence + (abilityBonuses.intelligence || 0),
    wisdom: baseAttributes.wisdom + (abilityBonuses.wisdom || 0),
    charisma: baseAttributes.charisma + (abilityBonuses.charisma || 0),
  };
};

export const getInitiative = (finalDexterity: number): number => {
  return getModifier(finalDexterity);
};

export const getMaxHP = (
  hitDie: number,
  level: number,
  finalConstitution: number,
): number => {
  const conModifier = getModifier(finalConstitution);
  return hitDie + (hitDie + conModifier) * (level - 1); // Nivel 1 usa el hit die completo
};

export const getArmorClass = (
  baseAC: number,
  finalDexterity: number,
  maxDexBonus?: number, // Para armaduras medianas/pesadas
): number => {
  const dexModifier = getModifier(finalDexterity);
  const actualDexBonus =
    maxDexBonus !== undefined
      ? Math.min(dexModifier, maxDexBonus)
      : dexModifier;
  return baseAC + actualDexBonus;
};
