// src/mappers/character.mapper.ts
import { Character } from "@prisma/client";
import {
  DNDCharacter,
  CharacterClass,
  CharacterRace,
  Alignment,
  Trait,
} from "@/interface/character/DNDCharacter";

export function mapPrismaCharacterToDND(character: Character): DNDCharacter {
  return {
    index: character.id,
    name: character.name,
    characterClass: character.characterClass as CharacterClass,
    race: character.race as CharacterRace,
    background: character.background || "",
    level: character.level,
    alignment: (character.alignment as Alignment) ?? "neutral",
    // experiencePoints: character.experiencePoints,
    attributes: character.baseAttributes as any,
    abilityBonuses: character.abilityBonuses as any,

    hit_die: character.hitDie ?? 1,
    hit_points: character.hitPoints ?? 1,
    armorClass: character.armorClass ?? 1,
    speed: character.speed ?? 1,
    proficiencyBonus: character.proficiencyBonus ?? 0,

    skills: character.skills as any,
    classProficiencies: character.classProficiencies as any,

    proficiencies: character.proficiencies,
    selectedProficiencies: character.selectedProficiencies,
    languages: character.languages,
    raceLanguages: character.raceLanguages,
    backgroundLanguages: character.backgroundLanguages,

    equipment: character.equipment as any,
    selectedEquipmentOption: character.selectedEquipmentOption ?? "",
    gold: character.gold as any,

    raceTraits: character.raceTraits as any,
    selectedTraits: character.selectedTraits as any,

    backgroundTrait: (character.backgroundTrait as unknown as Trait) ?? {
      id: "",
      name: "",
      description: "",
    },
    classFeatures: character.classFeatures as any,
    backgroundSelections: character.backgroundSelections as any,
    backgroundSkills: character.backgroundSkills as any,
    class_armor_proficiencies: character.classArmorProficiencies,
    class_weapon_proficiencies: character.classArmorProficiencies,
    iniciative: character.iniciative ?? 0,
    size: character.size ?? "",
    selectedAbilityBonuses: character.selectedAbilityBonuses,
  };
}
