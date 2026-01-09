"use client";
import useDNDCharacterStore from "@/store/characte.store";
import { CharacterSheet } from "./ui/CharacterSheet";

export default function SummaryPage() {
  const character = useDNDCharacterStore((state) => state.character);
  return (
    <div className="min-h-screen bg-background">
      <CharacterSheet character={character} />
    </div>
  );
}
