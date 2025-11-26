"use client";

import { useQuery } from "@tanstack/react-query";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

export const useEquipment = () => {
  return useQuery<{
    equipment: DNDEquipment[];
  }>({
    queryKey: ["equipment"],
    queryFn: async () => {
      const res = await fetch("/api/equipment");
      return res.json();
    },
    staleTime: Infinity,
  });
};
