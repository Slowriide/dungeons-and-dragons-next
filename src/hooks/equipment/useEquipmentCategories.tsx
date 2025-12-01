import { getEquipmentCategories } from "@/actions/equipment/getEquipmentCategories";
import { equipment } from "@/mocks/data/equipment";
import { useQuery } from "@tanstack/react-query";

export const useEquipmentCategories = () => {
  return useQuery({
    queryKey: ["equipment-categories"],
    queryFn: () => getEquipmentCategories(),
    staleTime: 60 * 60 * 24 * 365,
  });
};
