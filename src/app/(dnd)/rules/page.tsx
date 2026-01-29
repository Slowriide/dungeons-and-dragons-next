import { SideRacesFilters } from "@/components/races/SideRacesFilters";
import { geisCinzel } from "@/config/fonts";
import { NotebookTextIcon } from "lucide-react";
import { RulesGridWrapper } from "./ui/RulesGridWrapper";

interface Props {
  searchParams: Promise<{
    query: string;
  }>;
}

export default async function RulesPage({ searchParams }: Props) {
  const { query: queryString } = await searchParams;

  const query = queryString || "";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <NotebookTextIcon className="size-14 text-emerald-500" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Rules
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideRacesFilters />
          <RulesGridWrapper query={query} />
        </div>
      </div>
    </div>
  );
}
