import { MonstersGrid } from "@/app/(dnd)/monsters/ui/MonstersGrid";
import { SideMonstersFilters } from "@/components/monsters/SideMonstersFilters";
import { geisCinzel } from "@/config/fonts";
import { getMonsters } from "@/services/monsters/getMonsters";
import { SwordsIcon } from "lucide-react";
import MonstersGridWrapper from "./ui/MonstersGridWrapper";

interface Props {
  searchParams: Promise<{
    page: string;
    query: string;
    challenge_rating: string | string[];
    alignment: string | string[];
  }>;
}

export default async function MonstersPage({ searchParams }: Props) {
  const {
    page: pageString,
    query: queryString,
    challenge_rating,
    alignment: alignmentString,
  } = await searchParams;

  const page = pageString ? parseInt(pageString) : 1;
  const query = queryString || "";
  const cr = Array.isArray(challenge_rating)
    ? challenge_rating
    : challenge_rating
      ? [challenge_rating]
      : [];
  const alignment = Array.isArray(alignmentString)
    ? alignmentString
    : alignmentString
      ? [alignmentString]
      : [];

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
          <MonstersGridWrapper
            page={page}
            challenge_rating={cr}
            alignment={alignment}
            query={query}
          />
        </div>
      </div>
    </div>
  );
}
