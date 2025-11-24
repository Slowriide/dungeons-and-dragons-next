import { MonstersGrid } from "@/components/monsters/MonstersGrid";
import { SideMonstersFilters } from "@/components/monsters/SideMonstersFilters";
import { SideSpellsFilters } from "@/components/spells/SideSpellsFilters";
import { SpellsGrid } from "@/components/spells/SpellsGrid";
import { geisCinzel } from "@/config/fonts";
import { SwordsIcon } from "lucide-react";

export default function MonstersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <SwordsIcon className="size-14 text-purple-800" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Monsters
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideMonstersFilters />
          <MonstersGrid />
        </div>
      </div>
    </div>
  );
}
