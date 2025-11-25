"use client";

import { useQuery } from "@tanstack/react-query";

export const useEquipment = () => {
  return useQuery({
    queryKey: ["equipment"],
    queryFn: async () => {
      const res = await fetch("/api/equipment");
      return res.json();
    },
    staleTime: Infinity,
  });
};
