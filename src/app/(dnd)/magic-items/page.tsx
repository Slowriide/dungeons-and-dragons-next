import { geisCinzel } from "@/config/fonts";
import { Wand2Icon } from "lucide-react";
import { Suspense } from "react";
import { MagicItemsGridSkeleton } from "./ui/MagicItemsGridSkeleton";
import MagicItemsGridWrapper from "./ui/MagicItemsGridWrapper";
import { SideMagicFilterWrapper } from "./ui/SideMagicFilterWrapper";

interface Props {
  searchParams: Promise<{
    page: string;
    query: string;
    category: string | string[];
    rarity: string | string[];
  }>;
}

export default async function MagicItemsPage({ searchParams }: Props) {
  const {
    page: pageString,
    query: queryString,
    category,
    rarity,
  } = await searchParams;

  const page = pageString ? parseInt(pageString) : 1;
  const query = queryString || "";
  const categories = Array.isArray(category)
    ? category
    : category
      ? [category]
      : [];
  const rarities = Array.isArray(rarity) ? rarity : rarity ? [rarity] : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <Wand2Icon className="size-14 text-fuchsia-600 " />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Magic Items
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideMagicFilterWrapper
            page={page}
            categories={categories}
            query={query}
            rarities={rarities}
          />
          <Suspense fallback={<MagicItemsGridSkeleton />}>
            <MagicItemsGridWrapper
              page={page}
              query={query}
              categories={categories}
              rarities={rarities}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
