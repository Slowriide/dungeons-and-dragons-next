"use client";

import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { useQuery } from "@tanstack/react-query";

export const useMagicItems = () => {
  return useQuery<{
    magicItemspr: DNDMagicItem[];
  }>({
    queryKey: ["magicItems"],
    queryFn: async () => {
      const res = await fetch("/api/magic-items");
      const json = await res.json();

      return json;
    },
    staleTime: Infinity,
  });
};
