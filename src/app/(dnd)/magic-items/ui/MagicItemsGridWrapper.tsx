import { MagicItemsGrid } from "@/app/(dnd)/magic-items/ui/MagicItemsGrid";
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
