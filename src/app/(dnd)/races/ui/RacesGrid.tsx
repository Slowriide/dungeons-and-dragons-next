import { RacesCard } from "./RacesCard";
import { DNDRace } from "@/interface/races/DNDRace";

interface Props {
  races: DNDRace[];
}

/**
 * Races grid layout component.
 *
 * Displays a responsive grid of race cards.
 * Handles empty states gracefully.
 */
export const RacesGrid = ({ races }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {races.map((race) => (
          <RacesCard key={race.name} race={race} />
        ))}
      </div>
    </main>
  );
};
