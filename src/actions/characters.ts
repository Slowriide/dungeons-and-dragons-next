"use server";

import { DNDCharacter } from "@/interface/character/DNDCharacter";
import type { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { mapCharacterToUpdateInput } from "@/app/(dnd)/characters/create-character/background/utils/characterToPrisma";
import { auth } from "@/auth.config";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";

// Helper
const toJsonValue = (value: any): Prisma.InputJsonValue => {
  if (value === null || value === undefined) {
    return null as unknown as Prisma.InputJsonValue;
  }
  // Conversión doble: any -> unknown -> InputJsonValue
  return value as unknown as Prisma.InputJsonValue;
};

// Type guard para validar
function validateCharacterForSave(
  data: Partial<DNDCharacter>,
): data is Pick<
  DNDCharacter,
  "name" | "characterClass" | "race" | "level" | "attributes"
> &
  Partial<DNDCharacter> {
  return !!(
    data.name &&
    data.characterClass &&
    data.race &&
    typeof data.level === "number" &&
    data.attributes
  );
}

export async function saveCharacter(
  characterData: Partial<DNDCharacter>,
): Promise<{
  success: boolean;
  characterId?: string;
  error?: string;
}> {
  try {
    if (!validateCharacterForSave(characterData)) {
      return {
        success: false,
        error:
          "Missing required fields: name, class, race, level, or attributes",
      };
    }

    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "Unauthorized",
      };
    }

    const character = await prisma.character.create({
      data: {
        //User id
        userId: session.user.id,
        // Required fields
        name: characterData.name,
        characterClass: characterData.characterClass!,
        race: characterData.race!,
        level: characterData.level,

        // Optional strings
        background: characterData.background,
        alignment: characterData.alignment,
        experiencePoints: 0, //TODO

        // Combat Stats
        hitDie: characterData.hit_die,
        hitPoints: characterData.hit_points,
        armorClass: characterData.armorClass ?? 10,
        speed: characterData.speed,
        proficiencyBonus: characterData.proficiencyBonus,

        size: characterData.size,
        iniciative: characterData.iniciative, // Nota: puede que quieras calcularlo dinámicamente

        // JSON fields - Attributes & Bonuses
        baseAttributes: toJsonValue(characterData.attributes),
        abilityBonuses: toJsonValue(characterData.abilityBonuses),
        selectedAbilityBonuses: characterData.selectedAbilityBonuses ?? [], // ← NUEVO

        // Skills
        skills: toJsonValue(characterData.skills),
        backgroundSkills: toJsonValue(characterData.backgroundSkills), // ← NUEVO
        classProficiencies: toJsonValue(characterData.classProficiencies),

        // Proficiencies
        proficiencies: characterData.proficiencies ?? [],
        selectedProficiencies: characterData.selectedProficiencies ?? [],

        // ← NUEVOS: Class proficiencies
        classWeaponProficiencies:
          characterData.class_weapon_proficiencies ?? [], // ← NUEVO
        classArmorProficiencies: characterData.class_armor_proficiencies ?? [], // ← NUEVO

        // Languages
        languages: characterData.languages ?? [],
        raceLanguages: characterData.raceLanguages ?? [],
        backgroundLanguages: characterData.backgroundLanguages ?? [],

        // Equipment & Gold
        equipment: toJsonValue(characterData.equipment),
        selectedEquipmentOption: characterData.selectedEquipmentOption,
        gold: toJsonValue(characterData.gold),

        // Traits & Features
        raceTraits: toJsonValue(characterData.raceTraits),
        selectedTraits: toJsonValue(characterData.selectedTraits),
        backgroundTrait: toJsonValue(characterData.backgroundTrait),
        classFeatures: toJsonValue(characterData.classFeatures),
        backgroundSelections: toJsonValue(characterData.backgroundSelections),
      },
    });

    revalidatePath("/characters");
    return { success: true, characterId: character.id };
  } catch (error) {
    console.error("❌ Error saving character:", error);

    if (error instanceof PrismaClientKnownRequestError) {
      return { success: false, error: `Database error: ${error.message}` };
    }

    return { success: false, error: "Failed to save character" };
  }
}

export async function updateCharacter(
  id: string,
  characterData: Partial<DNDCharacter>,
) {
  try {
    const data = mapCharacterToUpdateInput(characterData);

    const character = await prisma.character.update({
      where: { id: id },
      data: data,
    });

    revalidatePath("/characters");
    revalidatePath(`/characters/${id}`);
    return { success: true, character };
  } catch (error) {
    return { success: false, error: "Failed to update character" };
  }
}

export async function getCharacter(id: string) {
  try {
    const character = await prisma.character.findUnique({
      where: { id },
    });

    return character;
  } catch (error) {
    return null;
  }
}

export async function getAllCharacters() {
  try {
    const characters = await prisma.character.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        characterClass: true,
        race: true,
        level: true,
        createdAt: true,
        alignment: true,
        hitPoints: true,
        armorClass: true,
        speed: true,
        background: true,
        proficiencyBonus: true,
      },
    });

    return {
      ok: true,
      characters,
    };
  } catch (error) {
    console.error("Error fetching characters:", error);
    return {
      ok: false,
      message: "Failed to fetch characters",
      characters: [],
    };
  }
}
export async function getUserCharacters() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        ok: false,
        message: "Unauthorized",
        characters: [],
      };
    }

    const characters = await prisma.character.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        characterClass: true,
        race: true,
        level: true,
        createdAt: true,
        alignment: true,
        hitPoints: true,
        armorClass: true,
        speed: true,
        background: true,
        proficiencyBonus: true,
      },
    });

    return {
      ok: true,
      characters,
    };
  } catch (error) {
    console.error("Error fetching user characters:", error);
    return {
      ok: false,
      message: "Failed to fetch characters",
      characters: [],
    };
  }
}
export async function getFullCharacterById(id: string) {
  try {
    const character = await prisma.character.findUnique({
      where: { id },
    });

    return character;
  } catch (error) {
    return null;
  }
}

export async function deleteCharacter(characterId: string) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        ok: false,
        message: "Unauthorized",
      };
    }

    const character = await prisma.character.findFirst({
      where: {
        id: characterId,
        userId: session.user.id,
      },
    });

    if (!character) {
      return {
        ok: false,
        message: "Character not found",
      };
    }

    await prisma.character.delete({
      where: {
        id: characterId,
      },
    });

    revalidatePath("/characters");

    return {
      ok: true,
      message: "Character deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting character:", error);
    return {
      ok: false,
      message: "Failed to delete character",
    };
  }
}
