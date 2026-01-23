import { SheetTrait } from "@/app/(dnd)/characters/create-character/summary/ui/TraitsSection";
import { DNDCharacter, Trait } from "@/interface/character/DNDCharacter";

// selectors/buildCharacterTraits.ts
export function buildCharacterTraits(
  character: Partial<DNDCharacter>,
): SheetTrait[] {
  const traits: SheetTrait[] = [];

  // 🧬 Racial traits
  if (character.raceTraits) {
    traits.push(
      ...character.raceTraits.map((t) => ({
        id: t.id,
        name: t.name,
        description: t.description,
        source: "racial" as SheetTrait["source"],
      })),
    );

    if (character.selectedTraits) {
      traits.push(
        ...character.selectedTraits.map((t) => ({
          id: t.id,
          name: t.name,
          description: t.description,
          source: "racial" as SheetTrait["source"],
        })),
      );
    }
  }

  // 🗡️ Class features
  if (character.classFeatures) {
    traits.push(
      ...character.classFeatures.map((feature) => ({
        id: feature.index,
        name: feature.name,
        description: feature.description,
        source: "class" as SheetTrait["source"],
      })),
    );
  }

  // 📜 Background feature (UNO SOLO)
  if (character.backgroundTrait) {
    traits.push({
      id: character.backgroundTrait.id,
      name: character.backgroundTrait.name,
      description: character.backgroundTrait.description,
      source: "background",
    });
  }

  return traits;
}
