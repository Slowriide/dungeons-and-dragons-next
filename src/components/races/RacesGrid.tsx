"use client";

import { useRacesList } from "@/hooks/races/useRacesList";
import { useRacesDetails } from "@/hooks/races/useRacesDetails";
import { RacesCard } from "./RacesCard";

export const RacesGrid = () => {
  const { data: racesList, isLoading: loadingList } = useRacesList();

  const racesIndexes = racesList?.results?.map((race) => race.index) || [];

  const { data, isLoading, isError } = useRacesDetails({
    racesIndexes,
  });

  console.log(data);

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-3 gap-2">
        {data.race.map((race) => (
          <RacesCard key={race.name} race={race} />
        ))}
      </div>
    </main>
  );
};
