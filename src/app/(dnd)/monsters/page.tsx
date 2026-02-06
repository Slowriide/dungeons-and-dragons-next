import { SideMonstersFilters } from "@/components/monsters/SideMonstersFilters";
import { geisCinzel } from "@/config/fonts";
import { SwordsIcon } from "lucide-react";
import MonstersGridWrapper from "./ui/MonstersGridWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{
    page: string;
    query: string;
    challenge_rating: string | string[];
    alignment: string | string[];
  }>;
}

export const metadata: Metadata = {
  title: "Monsters | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e monsters. Filter by level, school, and more.",
  openGraph: {
    title: "D&D 5e Monsters",
    description:
      "Complete monsters list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/monsters",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/Monsters.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Races",
      },
    ],
    type: "website",
  },
  keywords: ["D&D monsters", "5e monsters", "monsters"],
};

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
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <SwordsIcon className="size-12 lg:size-14 text-purple-800" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Monsters
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside>
            <SideMonstersFilters />
          </aside>
          <article className="col-span-1 lg:col-span-3">
            <MonstersGridWrapper
              page={page}
              challenge_rating={cr}
              alignment={alignment}
              query={query}
            />
          </article>
        </section>
      </div>
    </main>
  );
}
