// components/magic-items/SideMagicItemsFiltersWrapper.tsx

import { SideMagicItemsFilters } from "@/components/magic-items/SideMagicItemsFilters";
import { getMagicItemsDetails } from "@/services/magic-items/getMagicItemsDetails";

export async function SideMagicFilterWrapper({
  searchParams,
}: {
  searchParams: {
    category?: string | string[];
    rarity?: string | string[];
    query?: string;
  };
}) {
  const data = await getMagicItemsDetails({
    // solo para obtener categorías
    page: 1,
    take: 1,
    categories: [],
    rarities: [],
    query: "",
  });

  return <SideMagicItemsFilters categories={data.categories} />;
}
