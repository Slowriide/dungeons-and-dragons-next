import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

/* ---------------- GET ---------------- */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    const character = await prisma.character.findUnique({
      where: { id },
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

/* ---------------- PUT ---------------- */
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    const body = await request.json();

    const character = await prisma.character.update({
      where: { id },
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

    return NextResponse.json({ character });
  } catch (error) {
    console.error("❌ Error updating character", error);

    return NextResponse.json(
      {
        error: "Error updating character",
        details: error instanceof Error ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

/* ---------------- DELETE ---------------- */
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  try {
    await prisma.character.delete({
      where: { id },
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
