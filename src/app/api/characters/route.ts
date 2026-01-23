// app/api/characters/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const character = await prisma.character.create({
      data: {
        // Básicos
        name: body.name,
        characterClass: body.characterClass,
        race: body.race,
        level: body.level || 1,
        baseAttributes: body.baseAttributes,

        // Opcionales simples
        background: body.background,
        alignment: body.alignment,
        experiencePoints: body.experiencePoints || 0,

        // JSON opcionales
        abilityBonuses: body.abilityBonuses || null,

        // Números opcionales
        hitDie: body.hit_die || body.hitDie,
        hitPoints: body.hit_points || body.hitPoints,
        armorClass: body.armorClass,
        speed: body.speed,
        proficiencyBonus: body.proficiencyBonus,

        // Arrays
        proficiencies: body.proficiencies || [],
        selectedProficiencies: body.selectedProficiencies || [],
        languages: body.languages || [],
        raceLanguages: body.raceLanguages || [],
        backgroundLanguages: body.backgroundLanguages || [],

        // ← AGREGAR ESTOS UNO POR UNO
        skills: body.skills || null,
        classProficiencies: body.classProficiencies || null,
        equipment: body.equipment || null,
        selectedEquipmentOption: body.selectedEquipmentOption,
        gold: body.gold || 0,
        raceTraits: body.raceTraits || null,
        selectedTraits: body.selectedTraits || null,
        backgroundTrait: body.backgroundTrait || null,
        classFeatures: body.classFeatures || null,
        backgroundSelections: body.backgroundSelections || null,
      },
    });

    return NextResponse.json(
      { success: true, characterId: character.id, character },
      { status: 201 },
    );
  } catch (error) {
    console.error("❌ ERROR COMPLETO:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: "Error creating character", details: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    const characters = await prisma.character.findMany({
      where: userId ? { userId } : {},
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        characterClass: true,
        race: true,
        level: true,
        createdAt: true,
        // Solo campos básicos para la lista
      },
    });

    return NextResponse.json({ characters });
  } catch (error) {
    console.error("❌ Error fetching characters:", error);

    return NextResponse.json(
      { error: "Error fetching characters" },
      { status: 500 },
    );
  }
}
