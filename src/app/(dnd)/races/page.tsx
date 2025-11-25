import { RacesGrid } from "@/components/races/RacesGrid";
import { SideRacesFilters } from "@/components/races/SideRacesFilters";
import { geisCinzel } from "@/config/fonts";
import { Users2 } from "lucide-react";

export default function RacesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <Users2 className="size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Races
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideRacesFilters />
          <RacesGrid />
        </div>
      </div>
    </div>
  );
}
