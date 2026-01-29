import { SideSpellsFilters } from "@/components/spells/SideSpellsFilters";
import { geisCinzel } from "@/config/fonts";
import { ScrollIcon } from "lucide-react";
import SpellsGridWrapper from "./ui/SpellsGridWrapper";

interface Props {
  searchParams: Promise<{
    page?: string;
    level?: string | string[];
    school?: string | string[];
    query?: string;
  }>;
}

export default async function SpellsPage({ searchParams }: Props) {
  const {
    page: pageString,
    level,
    query: queryString,
    school,
  } = await searchParams;

  const page = pageString ? parseInt(pageString) : 1;
  const levels = Array.isArray(level) ? level : level ? [level] : [];
  const schools = Array.isArray(school) ? school : school ? [school] : [];
  const query = queryString || "";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Header */}
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <ScrollIcon className="size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Spells
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideSpellsFilters />

          <SpellsGridWrapper
            page={page}
            levels={levels}
            schools={schools}
            query={query}
          />
        </div>
      </div>
    </div>
  );
}
