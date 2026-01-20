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
  }

  // 🗡️ Class features
  if (character.class_features) {
    traits.push(
      ...character.class_features.map((feature) => ({
        id: feature.index,
        name: feature.name,
        description: feature.description,
        source: "class" as SheetTrait["source"],
      })),
    );
  }

  // 📜 Background feature (UNO SOLO)
  if (character.backgroundTraits) {
    traits.push({
      id: character.backgroundTraits.id,
      name: character.backgroundTraits.name,
      description: character.backgroundTraits.description,
      source: "background",
    });
  }

  return traits;
}
