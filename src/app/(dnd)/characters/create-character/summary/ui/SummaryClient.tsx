"use client";

import useDNDCharacterStore from "@/store/characte.store";
import { CharacterSheet } from "./CharacterSheet";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// This page exists to separate concerns.

export default function SummaryClient() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const { character, saveCharacter, resetCharacter } = useDNDCharacterStore();

  const handleSave = async () => {
    setIsSaving(true);

    try {
      saveCharacter();

      resetCharacter();

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

      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-red-600 hover:bg-red-700"
        >
          {isSaving ? "Saving..." : "Save Character"}
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <div className="h-0.5 w-64 mx-auto bg-linear-to-r from-transparent via-gold/50 to-transparent mb-4" />
        <p className="text-xs text-muted-foreground font-serif tracking-wider ">
          D&D 5e Character Sheet
        </p>
      </div>
    </div>
  );
}
