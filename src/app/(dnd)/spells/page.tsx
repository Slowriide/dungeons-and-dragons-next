import { SideSpellsFilters } from "@/components/spells/SideSpellsFilters";
import { SpellsGrid } from "@/components/spells/SpellsGrid";
import { geisCinzel } from "@/config/fonts";
import { ScrollIcon } from "lucide-react";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function SpellsPage({ searchParams }: Props) {
  const { page: pageString } = await searchParams;
  const page = pageString ? parseInt(pageString) : 1;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <ScrollIcon className="size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Spells
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideSpellsFilters />
          <SpellsGrid page={page} />
        </div>
      </div>
    </div>
  );
}
