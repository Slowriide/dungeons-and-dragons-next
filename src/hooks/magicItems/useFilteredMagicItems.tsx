"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useMagicItems } from "./useMagicItems";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

export const useFilteredMagicItems = (take: number = 12) => {
  const search = useSearchParams();
  const router = useRouter();
  const { data, isLoading, isError } = useMagicItems();

  const page = Number(search.get("page") || 1);

  const searchText = search.get("search")?.toLowerCase() || "";
  const type = search.get("type") || null;
  const rarity = search.get("rarity") || null;

  // --- valores por defecto si data no cargó ---
  const allMagicItems: DNDMagicItem[] = data?.magicItemspr ?? [];

  console.log(data);

  // --- FILTROS ---
  const filtered = useMemo(() => {
    return allMagicItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.index.toLowerCase().includes(searchText);

      const matchesType = type ? item.equipment_category.index === type : true;

      const matchesRarity = rarity
        ? item.rarity.name.toLowerCase() === rarity
        : true;

      return matchesSearch && matchesType && matchesRarity;
    });
  }, [allMagicItems, searchText, type, rarity]);

  // --- PAGINACIÓN ---
  const totalPages = Math.max(1, Math.ceil(filtered.length / take));

  // prevenir page inválida SIN romper el orden de hooks
  useEffect(() => {
    if (isLoading) return;
    if (page > totalPages) {
      const params = new URLSearchParams(search.toString());
      params.set("page", "1");
      router.replace(`?${params.toString()}`);
    }
  }, [page, totalPages, router, search]);

  const start = (page - 1) * take;
  const end = start + take;

  const paginated = filtered.slice(start, end);

  return {
    filtered,
    paginated,
    totalPages,
    page,
    isLoading,
    isError,
  };
};
