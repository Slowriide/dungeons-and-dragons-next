// components/magic-items/SideMagicItemsFiltersWrapper.tsx

import { getEquipmentDetails } from "@/services/equipment/getEquipmentDetails";
import { SideEquipmentFilters } from "./SideEquipmentFilters";

interface Props {
  page?: number;
  query?: string;
  categories: string[];
}

export async function SideEquipmentFilterWrapper(props: Props) {
  const { page, query, categories } = props;

  const data = await getEquipmentDetails({
    // solo para obtener categorías
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
