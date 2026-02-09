import { getEquipmentDetails } from "@/services/equipment/getEquipmentDetails";
import { SideEquipmentFilters } from "./SideEquipmentFilters";

interface Props {
  page?: number;
  query?: string;
  categories: string[];
}

/**
 * wrapper for the equipment filters sidebar.
 *
 * Responsibilities:
 * - Fetch available equipment categories from the API
 * - Keep filter UI fully server-aware
 * - Avoid duplicating category logic on the client
 */
export async function SideEquipmentFilterWrapper(props: Props) {
  const { page, query, categories } = props;

  /**
   * only use this request to retrieve available categories.
   * Filters are intentionally kept broad to avoid limiting results.
   */
  const data = await getEquipmentDetails({
    page,
    maxWeight: 999999,
    minWeight: 0,
    maxCost: 999999,
    minCost: 0,
    categories,
    query,
  });

  return (
    <SideEquipmentFilters
      categoriesAvailables={data.categories}
      categories={categories}
    />
  );
}
