// mappers/characterToPrisma.ts
import { Prisma } from "@prisma/client";
import { DNDCharacter } from "@/interface/character/DNDCharacter";

const toJsonValue = (value: any): Prisma.InputJsonValue => {
  if (value === null || value === undefined) {
    return null as unknown as Prisma.InputJsonValue;
  }
  // Conversión doble: any -> unknown -> InputJsonValue
  return value as unknown as Prisma.InputJsonValue;
};
export function mapCharacterToUpdateInput(
  characterData: Partial<DNDCharacter>,
): Prisma.CharacterUpdateInput {
  return {
    ...(characterData.name && { name: characterData.name }),
    ...(characterData.characterClass && {
      characterClass: characterData.characterClass,
    }),
    ...(characterData.race && { race: characterData.race }),
    ...(characterData.level !== undefined && {
      level: characterData.level,
    }),
    ...(characterData.background && {
      background: characterData.background,
    }),
    ...(characterData.alignment && { alignment: characterData.alignment }),

    ...(characterData.attributes && {
      baseAttributes: toJsonValue(characterData.attributes),
    }),
    ...(characterData.abilityBonuses && {
      abilityBonuses: toJsonValue(characterData.abilityBonuses),
    }),

    ...(characterData.hit_die !== undefined && {
      hitDie: characterData.hit_die,
    }),
    ...(characterData.hit_points !== undefined && {
      hitPoints: characterData.hit_points,
    }),
    ...(characterData.speed !== undefined && {
      speed: characterData.speed,
    }),
    ...(characterData.proficiencyBonus !== undefined && {
      proficiencyBonus: characterData.proficiencyBonus,
    }),

    ...(characterData.skills && {
      skills: toJsonValue(characterData.skills),
    }),
    ...(characterData.classProficiencies && {
      classProficiencies: toJsonValue(characterData.classProficiencies),
    }),

    ...(characterData.proficiencies && {
      proficiencies: characterData.proficiencies,
    }),
    ...(characterData.languages && { languages: characterData.languages }),

    ...(characterData.equipment && {
      equipment: toJsonValue(characterData.equipment),
    }),
    ...(characterData.gold && {
      gold: characterData.gold as unknown as Prisma.InputJsonValue,
    }),

    ...(characterData.raceTraits && {
      raceTraits: toJsonValue(characterData.raceTraits),
    }),
    ...(characterData.selectedTraits && {
      selectedTraits: toJsonValue(characterData.selectedTraits),
    }),
    ...(characterData.classFeatures && {
      classFeatures: toJsonValue(characterData.classFeatures),
    }),
  };
}
