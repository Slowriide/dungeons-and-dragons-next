// components/magic-items/SideMagicItemsFiltersWrapper.tsx

import { SideMagicItemsFilters } from "@/app/(dnd)/magic-items/ui/SideMagicItemsFilters";
import { getMagicItemsDetails } from "@/services/magic-items/getMagicItemsDetails";

interface Props {
  page: number;
  query?: string;
  categories?: string[];
  rarities?: string[];
}

export async function SideMagicFilterWrapper({
  page,
  query,
  categories: queryCategories,
  rarities,
}: Props) {
  const data = await getMagicItemsDetails({
    // solo para obtener categorías
    page,
    categories: queryCategories,
    rarities,
    query,
  });

  return (
    <SideMagicItemsFilters
      categories={queryCategories}
      categoriesAvailables={data.categories}
      rarities={rarities}
    />
  );
}
