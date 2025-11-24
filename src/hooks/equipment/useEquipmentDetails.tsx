"use client";

import { getEquipmentDetails } from "@/actions/equipment/getEquipmentDetails";
import { useQuery } from "@tanstack/react-query";

export const useEquipmentDetails = (equipmentIndexes: string[]) => {
  return useQuery({
    queryKey: ["equipment-details", equipmentIndexes],
    queryFn: () => getEquipmentDetails({ equipmentIndexes }),
    enabled: equipmentIndexes.length > 0,
    staleTime: Infinity,
  });
};
