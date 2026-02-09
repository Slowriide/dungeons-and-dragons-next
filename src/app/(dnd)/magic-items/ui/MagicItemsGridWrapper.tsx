import { MagicItemsGrid } from "@/app/(dnd)/magic-items/ui/MagicItemsGrid";
import { getMagicItemsDetails } from "@/services/magic-items/getMagicItemsDetails";

interface Props {
  page: number;
  query?: string;
  categories?: string[];
  rarities?: string[];
}

/**
 * MagicItemsGridWrapper
 *
 * Server component that fetches paginated magic items and passes
 * them to the client-side MagicItemsGrid component.
 */
export default async function MagicItemsGridWrapper({
  page,
  query,
  categories,
  rarities,
}: Props) {
  const { items, totalPages } = await getMagicItemsDetails({
    page,
    take: 12,
    query,
    categories,
    rarities,
  });

  return <MagicItemsGrid magicItems={items} totalPages={totalPages} />;
}
