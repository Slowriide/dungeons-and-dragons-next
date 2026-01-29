import { RacesCard } from "../../../../components/races/RacesCard";
import { DNDRace } from "@/interface/races/DNDRace";

interface Props {
  races: DNDRace[];
}

export const RacesGrid = ({ races }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-3 gap-2">
        {races.map((race) => (
          <RacesCard key={race.name} race={race} />
        ))}
      </div>
    </main>
  );
};
