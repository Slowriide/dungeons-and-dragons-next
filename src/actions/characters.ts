"use server";

import { DNDCharacter } from "@/interface/character/DNDCharacter";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { mapCharacterToUpdateInput } from "@/app/(dnd)/characters/create-character/background/utils/characterToPrisma";

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

export async function saveCharacter(characterData: Partial<DNDCharacter>) {
  try {
    if (!validateCharacterForSave(characterData)) {
      return {
        success: false,
        error:
          "Missing required fields: name, class, race, level, or attributes",
      };
    }

    const character = await prisma.character.create({
      data: {
        // Required fields
        name: characterData.name,
        characterClass: characterData.characterClass!,
        race: characterData.race!,
        level: characterData.level,

        // Optional strings
        background: characterData.background,
        alignment: characterData.alignment,
        experiencePoints: 10, // TODO

        // JSON fields - usar toJsonValue
        baseAttributes: toJsonValue(characterData.attributes),
        abilityBonuses: toJsonValue(characterData.abilityBonuses),

        // Numbers
        hitDie: characterData.hit_die,
        hitPoints: characterData.hit_points,
        armorClass: 12, // TODO
        speed: characterData.speed,
        proficiencyBonus: characterData.proficiencyBonus,

        // JSON arrays - usar toJsonValue
        skills: toJsonValue(characterData.skills),
        classProficiencies: toJsonValue(characterData.classProficiencies),

        // String arrays (estos NO necesitan conversión)
        proficiencies: characterData.proficiencies ?? [],
        selectedProficiencies: characterData.selectedProficiencies ?? [],
        languages: characterData.languages ?? [],
        raceLanguages: characterData.raceLanguages ?? [],
        backgroundLanguages: characterData.backgroundLanguages ?? [],

        // Equipment
        equipment: toJsonValue(characterData.equipment),
        selectedEquipmentOption: characterData.selectedEquipmentOption,
        gold: characterData.gold ?? 0,

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

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
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
      },
    });

    return characters;
  } catch (error) {
    return [];
  }
}
