import { EquipmentGrid } from "@/app/(dnd)/equipment/ui/EquipmentGrid";
import { getEquipmentDetails } from "@/services/equipment/getEquipmentDetails";

interface Props {
  page?: number;
  take?: number;
  query?: string;
  categories?: string[];
  minCost: number;
  maxCost: number;
  minWeight: number;
  maxWeight: number;
}

/**
 * Server-side wrapper for the Equipment grid.
 *
 * Responsibilities:
 * - Fetch paginated & filtered equipment data
 * - Keep data fetching out of the client component
 * - Pass clean, ready-to-render props to the UI grid
 */
export const EquipmentGridWrapper = async (props: Props) => {
  const {
    maxCost,
    maxWeight,
    minCost,
    minWeight,
    categories,
    page,
    query,
    take = 12,
  } = props;

  /**
   * Fetch equipment list using current filters.
   * Pagination and filtering are fully server-driven.
   */
  const { items, totalPages } = await getEquipmentDetails({
    maxCost,
    maxWeight,
    minCost,
    minWeight,
    categories,
    page,
    query,
    take,
  });

  return <EquipmentGrid totalPages={totalPages} paginated={items} />;
};
