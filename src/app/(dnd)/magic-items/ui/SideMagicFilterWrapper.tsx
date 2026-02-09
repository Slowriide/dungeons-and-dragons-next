// components/magic-items/SideMagicItemsFiltersWrapper.tsx

import { SideMagicItemsFilters } from "@/app/(dnd)/magic-items/ui/SideMagicItemsFilters";
import { getMagicItemsDetails } from "@/services/magic-items/getMagicItemsDetails";

interface Props {
  page: number;
  query?: string;
  categories?: string[];
  rarities?: string[];
}

/**
 * SideMagicFilterWrapper
 *
 * Fetches available categories and passes props to the client-side
 * SideMagicItemsFilters component.
 *
 */
export async function SideMagicFilterWrapper({
  page,
  query,
  categories: queryCategories,
  rarities,
}: Props) {
  /**
   * only use this request to retrieve available categories.
   * Filters are intentionally kept broad to avoid limiting results.
   */
  const data = await getMagicItemsDetails({
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
