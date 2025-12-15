"use client";

import { useRacesList } from "@/hooks/races/useRacesList";
import { useRacesDetails } from "@/hooks/races/useRacesDetails";
import { MiniRacesCard } from "./MiniRacesCard";

export const MiniRacesGrid = () => {
  const { data: racesList, isLoading: loadingList } = useRacesList();

  const racesIndexes = racesList?.results?.map((race) => race.index) || [];

  const { data, isLoading, isError, filteredResults } = useRacesDetails({
    racesIndexes,
  });

  if (isLoading || !filteredResults) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-5 gap-2">
        {filteredResults.map((race) => (
          <MiniRacesCard key={race.name} race={race} />
        ))}
      </div>
    </main>
  );
};
