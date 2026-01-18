"use client";
import { Button } from "@/components/ui/button";
import { MiniRacesGrid } from "@/components/races/MiniRacesGrid";
import { useRouter } from "next/navigation";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";
import useDNDCharacterStore from "@/store/characte.store";
import { useEffect } from "react";

export const StepRace = () => {
  const router = useRouter();
  const hydrated = useStoreHydrated();
  const { character, prevStep } = useDNDCharacterStore();

  useEffect(() => {
    if (!hydrated) return;

    if (character.race) {
      const raceSlug = character.race.toLowerCase();

      router.replace(`/characters/create-character/race/${raceSlug}`);
    }
  }, [hydrated, character.race, router]);

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
        <div className="col-span-5">
          <MiniRacesGrid />
        </div>
      </div>

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
