import { MagicItemsGrid } from "@/components/magic-items/MagicItemsGrid";
import { SideMagicItemsFilters } from "@/components/magic-items/SideMagicItemsFilters";
import { getMagicItems } from "@/services/magic-items/getMagicItems";
import { getMagicItemsDetails } from "@/services/magic-items/getMagicItemsDetails";

interface Props {
  page: number;
  query?: string;
  categories?: string[];
  rarities?: string[];
}

export default async function MagicItemsGridWrapper({
  page,
  query,
  categories,
  rarities,
}: Props) {
  const {
    items,
    totalPages,
    totalCount,
    categories: filterCategories,
  } = await getMagicItemsDetails({
    page,
    take: 12,
    query,
    categories,
    rarities,
  });

  return <MagicItemsGrid magicItems={items} totalPages={totalPages} />;
}
