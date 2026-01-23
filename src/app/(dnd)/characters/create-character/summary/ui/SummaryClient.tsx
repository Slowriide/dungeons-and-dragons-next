"use client";

import useDNDCharacterStore from "@/store/characte.store";
import { CharacterSheet } from "./CharacterSheet";

import { useState } from "react";
import { useRouter } from "next/navigation";

// This page exists to separate concerns.

export default function SummaryClient() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const { character, saveCharacter } = useDNDCharacterStore();

  const handleSave = async () => {
    setIsSaving(true);

    try {
      const characterId = await saveCharacter();
      // router.push(`/characters/${characterId}`);
      router.push(`/characters`);
    } catch (error) {
      alert("Error guardando el personaje");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <CharacterSheet character={character} />
      <button onClick={handleSave} disabled={isSaving}>
        {isSaving ? "Guardando..." : "Guardar Personaje"}
      </button>
    </div>
  );
}
