import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const character = await prisma.character.findUnique({
      where: { id: params.id },
    });

    if (!character) {
      return NextResponse.json(
        { error: "Character not found" },
        { status: 404 },
      );
    }
    return NextResponse.json({ character });
  } catch (error) {
    console.error("❌ Error fetching character:", error);

    return NextResponse.json(
      { error: "Error fetching character" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const character = await prisma.character.update({
      where: { id: params.id },
      data: {
        name: body.name,
        characterClass: body.characterClass,
        race: body.race,
        level: body.level,
        background: body.background,
        alignment: body.alignment,
        experiencePoints: body.experiencePoints,
        baseAttributes: body.baseAttributes,
        abilityBonuses: body.abilityBonuses,
        hitDie: body.hit_die || body.hitDie,
        hitPoints: body.hit_points || body.hitPoints,
        armorClass: body.armorClass,
        speed: body.speed,
        proficiencyBonus: body.proficiencyBonus,
        skills: body.skills,
        classProficiencies: body.classProficiencies,
        proficiencies: body.proficiencies || [],
        selectedProficiencies: body.selectedProficiencies || [],
        languages: body.languages || [],
        raceLanguages: body.raceLanguages || [],
        backgroundLanguages: body.backgroundLanguages || [],
        equipment: body.equipment,
        selectedEquipmentOption: body.selectedEquipmentOption,
        gold: body.gold,
        raceTraits: body.raceTraits,
        selectedTraits: body.selectedTraits,
        backgroundTrait: body.backgroundTrait,
        classFeatures: body.classFeatures,
        backgroundSelections: body.backgroundSelections,
      },
    });
  } catch (error) {
    console.error("❌ Error updating character", error);
    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Error updating character", details: error.message },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { error: "Unknown error updating character" },
      { status: 500 },
    );
  }
}

export async function Delete(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.character.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { success: true, message: "Character deleted" },
      { status: 200 },
    );
  } catch (error) {
    console.error("❌ Error deleting character", error);

    return NextResponse.json(
      { error: "Error deleting character" },
      { status: 500 },
    );
  }
}
