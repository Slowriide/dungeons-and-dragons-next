import { useQuery } from "@tanstack/react-query";
import { getEquipmentCategoryDetails } from "../../services/equipment/getEquipmentCategoryDetails";

interface Props {
  equipmentCatIndexes: string[];
}
console.log("SERVICE IMPORT", getEquipmentCategoryDetails);
export const useEquipmentCategoryDetails = ({ equipmentCatIndexes }: Props) => {
  const cleaned = equipmentCatIndexes.filter(Boolean); // ❗Saca strings vacías

  return useQuery({
    queryKey: ["equipment-categories-details", cleaned],
    queryFn: () =>
      getEquipmentCategoryDetails({ equipmentCatIndexes: cleaned }),
    enabled: cleaned.length > 0, // ⬅ EVITA la llamada vacía
    staleTime: 60 * 60 * 24 * 365,
  });
};
