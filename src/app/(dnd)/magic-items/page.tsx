import { geisCinzel } from "@/config/fonts";
import { Wand2Icon } from "lucide-react";
import MagicItemsGridWrapper from "./ui/MagicItemsGridWrapper";
import { SideMagicFilterWrapper } from "./ui/SideMagicFilterWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{
    page: string;
    query: string;
    category: string | string[];
    rarity: string | string[];
  }>;
}

/**
 * Metadata for Magic Items page
 *
 * SEO & Social Sharing:
 * - Title and description optimized for search engines
 * - Open Graph tags for social media sharing
 * - Keywords for improved discoverability
 */
export const metadata: Metadata = {
  title: "Magic Items | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e magic items. Filter by level, school, and more.",
  openGraph: {
    title: "D&D 5e magic items",
    description:
      "Complete magic items list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/magic-items",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/magic items.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Magic Items",
      },
    ],
    type: "website",
  },
  keywords: ["D&D magic items", "5e magic items", "magic items"],
};

/**
 * MagicItemsPage
 *
 * Displays a searchable and filterable list of magic items.
 *
 *  Responsible for:
 * - Parsing and normalizing URL search params
 * - Rendering filters and magic item grid
 * - Keeping layout responsive and scalable
 */
export default async function MagicItemsPage({ searchParams }: Props) {
  const {
    page: pageString,
    query: queryString,
    category,
    rarity,
  } = await searchParams;

  /**
   * Normalize searchParams.
   */
  const page = pageString ? parseInt(pageString) : 1;
  const query = queryString || "";
  const categories = Array.isArray(category)
    ? category
    : category
      ? [category]
      : [];
  const rarities = Array.isArray(rarity) ? rarity : rarity ? [rarity] : [];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <Wand2Icon className="size-10 lg:size-14 text-fuchsia-600 " />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-4xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Magic Items
          </h1>
        </header>

        {/* Main layout: sidebar + content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside>
            <SideMagicFilterWrapper
              page={page}
              categories={categories}
              query={query}
              rarities={rarities}
            />
          </aside>

          {/* Magic items grid */}
          <section className="lg:col-span-3">
            <MagicItemsGridWrapper
              page={page}
              query={query}
              categories={categories}
              rarities={rarities}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
