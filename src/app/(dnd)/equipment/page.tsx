import { geisCinzel } from "@/config/fonts";
import { ShieldIcon } from "lucide-react";
import { EquipmentGridWrapper } from "./ui/EquipmentGridWrapper";
import { SideEquipmentFilterWrapper } from "./ui/SideEquipmentFilterWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{
    page: string;
    query: string;
    minCost: string;
    maxCost: string;
    minWeight: string;
    maxWeight: string;
    category: string | string[];
  }>;
}

/**
 * Metadata for Equipment page
 *
 * SEO & Social Sharing:
 * - Title and description optimized for search engines
 * - Open Graph tags for social media sharing
 * - Keywords for improved discoverability
 */
export const metadata: Metadata = {
  title: "Equipment | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e equipment. Filter by category, price, and weight.",
  openGraph: {
    title: "D&D 5e Equipment",
    description:
      "Complete equipment list for Dungeons & Dragons 5e. Search, filter and explore.",
    url: "https://tu-dominio.com/equipment",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/equipment.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Equipment",
      },
    ],
    type: "website",
  },
  keywords: ["D&D equipment", "5e equipment", "equipment"],
};

/**
 * Equipment main page.
 *
 * Responsible for:
 * - Parsing and normalizing URL search params
 * - Rendering filters and equipment grid
 * - Keeping layout responsive and scalable
 */

export default async function EquipmentPage({ searchParams }: Props) {
  const {
    page: pageString,
    query: queryString,
    category,
    minCost,
    maxCost,
    minWeight,
    maxWeight,
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
  const minCostNumber = Number(minCost || "0");
  const maxCostNumber = Number(maxCost || "999999");
  const minWeightNumber = Number(minWeight || "0");
  const maxWeightNumber = Number(maxWeight || "999999");

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <ShieldIcon className="size-12 lg:size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-4xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Equipment
          </h1>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside>
            <SideEquipmentFilterWrapper
              categories={categories}
              query={query}
              page={page}
            />
          </aside>

          <section className="lg:col-span-3">
            <EquipmentGridWrapper
              page={page}
              query={query}
              take={12}
              categories={categories}
              minCost={minCostNumber}
              maxCost={maxCostNumber}
              minWeight={minWeightNumber}
              maxWeight={maxWeightNumber}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
