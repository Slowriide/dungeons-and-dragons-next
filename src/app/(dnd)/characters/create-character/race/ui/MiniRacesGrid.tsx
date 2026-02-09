"use client";

import { useRacesList } from "@/hooks/races/useRacesList";
import { useRacesDetails } from "@/hooks/races/useRacesDetails";
import { MiniRacesCard } from "./MiniRacesCard";

/**
 * MiniRacesGrid
 *
 * Displays a compact grid of all available D&D races
 * for the character creation flow.
 *
 * Data flow:
 * 1. Fetch race indexes from the races list endpoint
 * 2. Fetch full race details using those indexes
 * 3. Render a card for each available race
 *
 * This component is client-side because it relies on hooks
 * and interactive selection.
 */
export const MiniRacesGrid = () => {
  /**
   * Fetch base races list (only indexes + names)
   */
  const { data: racesList } = useRacesList();

  const racesIndexes = racesList?.results?.map((race) => race.index) || [];

  /**
   * Fetch full race details using the indexes
   */
  const { filteredResults } = useRacesDetails({
    racesIndexes,
  });

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {/* Race cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
        {filteredResults.map((race) => (
          <MiniRacesCard key={race.name} race={race} />
        ))}
      </div>
    </main>
  );
};
