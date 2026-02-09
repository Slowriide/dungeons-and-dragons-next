"use client";

import useDNDCharacterStore from "@/store/characte.store";
import { CharacterSheet } from "./CharacterSheet";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// Client-side summary page
// Responsible for rendering the final character sheet and handling save logic

export default function SummaryClient() {
  const router = useRouter();

  // Local UI state to prevent multiple save attempts
  const [isSaving, setIsSaving] = useState(false);

  // Character data and actions from global store
  const { character, saveCharacter, resetCharacter, isCharacterComplete } =
    useDNDCharacterStore();

  // Handles final character save
  const handleSave = async () => {
    setIsSaving(true);

    try {
      // Validate that all required steps are completed
      const isComplete = isCharacterComplete();

      console.log(isComplete);

      if (!isComplete) {
        toast.error("Must complete the character before save");
        return;
      }

      // Persist character (API / local / backend abstraction)
      saveCharacter();

      toast.success("Character completed");

      // Clear store after successful save
      resetCharacter();

      router.push(`/characters`);
    } catch (error) {
      // Basic error handling (can be replaced by toast later)
      toast.error("Error on character save");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      {/* Full character sheet preview */}
      <CharacterSheet character={character} />

      {/* Save action */}
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
