import { EquipmentGrid } from "@/components/equipment/EquipmentGrid";
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

  const { items, totalCount, totalPages } = await getEquipmentDetails({
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
