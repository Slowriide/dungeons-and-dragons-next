import { SideSpellsFilters } from "@/app/(dnd)/spells/ui/SideSpellsFilters";
import { geisCinzel } from "@/config/fonts";
import { ScrollIcon } from "lucide-react";
import SpellsGridWrapper from "./ui/SpellsGridWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{
    page?: string;
    level?: string | string[];
    school?: string | string[];
    query?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Spells | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e spells. Filter by level, school, and more.",
  openGraph: {
    title: "D&D 5e Spells",
    description:
      "Complete spell list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/spells",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/spells.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Spells",
      },
    ],
    type: "website",
  },
  keywords: ["D&D spells", "5e spells", "magic spells", "spellbook"],
};

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
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <ScrollIcon className="size-12 lg:size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-4xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Spells
          </h1>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside>
            <SideSpellsFilters />
          </aside>

          <section className="lg:col-span-3">
            <SpellsGridWrapper
              page={page}
              levels={levels}
              schools={schools}
              query={query}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
