import { SideRacesFilters } from "@/app/(dnd)/races/ui/SideRacesFilters";
import { geisCinzel } from "@/config/fonts";
import { Users2 } from "lucide-react";
import { RacesGridWrapper } from "./ui/RacesGridWrapper";
import { Metadata } from "next";
interface Props {
  searchParams: Promise<{
    query: string;
  }>;
}

/**
 * Metadata for Races listing page
 *
 * Optimized for:
 * - SEO (search engines)
 * - Social sharing (Open Graph)
 */
export const metadata: Metadata = {
  title: "Races | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e races. Filter by level, school, and more.",
  openGraph: {
    title: "D&D 5e Races",
    description:
      "Complete races list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/races",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/races.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Races",
      },
    ],
    type: "website",
  },
  keywords: ["D&D races", "5e races", "races"],
};

/**
 * RacesPage
 *
 * Displays a searchable and filterable list of races.
 *
 *  Responsible for:
 * - Parsing and normalizing URL search params
 * - Rendering filters and races grid
 * - Keeping layout responsive and scalable
 */
export default async function RacesPage({ searchParams }: Props) {
  const { query: queryString } = await searchParams;

  const query = queryString || "";

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <Users2 className="size-12 lg:size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Races
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside>
            <SideRacesFilters />
          </aside>
          <article className="col-span-1 lg:col-span-3">
            <RacesGridWrapper query={query} />
          </article>
        </section>
      </div>
    </main>
  );
}
