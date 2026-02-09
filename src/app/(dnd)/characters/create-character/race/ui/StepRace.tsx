"use client";
import { Button } from "@/components/ui/button";
import { MiniRacesGrid } from "@/app/(dnd)/characters/create-character/race/ui/MiniRacesGrid";
import { useRouter } from "next/navigation";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";
import useDNDCharacterStore from "@/store/characte.store";
import { useEffect } from "react";

/**
 * StepRace
 *
 * Race selection step in the character creation flow.
 *
 * Responsibilities:
 * - Display the list of available races
 * - Redirect automatically if a race is already selected
 * - Ensure Zustand store is hydrated before accessing state
 *
 * Navigation logic:
 * - If a race already exists in the store, redirect to the race detail step
 * - Allow user to go back to the previous step
 */

export const StepRace = () => {
  const router = useRouter();
  const hydrated = useStoreHydrated();
  const { character, prevStep } = useDNDCharacterStore();

  /**
   * If the store is hydrated and a race is already selected,
   * redirect the user to the race detail page.
   *
   * This prevents users from re-selecting a race unintentionally
   * and keeps the step flow consistent.
   */
  useEffect(() => {
    if (!hydrated) return;

    if (character.race) {
      const raceSlug = character.race.toLowerCase();

      router.replace(`/characters/create-character/race/${raceSlug}`);
    }
  }, [hydrated, character.race, router]);

  /**
   * While the Zustand store is hydrating,
   * render a full-page loading state.
   */
  if (!hydrated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  // Si ya tiene raza, no mostrar nada (se está redirigiendo)
  if (character.race) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-2 space-y-6">
        {/* Race selection grid */}
        <div className="col-span-5">
          <MiniRacesGrid />
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between">
        <Button
          variant={"outline"}
          type="submit"
          onClick={() => {
            prevStep();
            router.back();
          }}
        >
          Previous
        </Button>
      </div>
    </div>
  );
};
