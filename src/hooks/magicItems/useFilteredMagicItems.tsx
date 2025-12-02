"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useMagicItems } from "./useMagicItems";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

export const useFilteredMagicItems = (
  take: number = 12,
  magicItemIndex?: string
) => {
  const search = useSearchParams();
  const router = useRouter();
  const { data, isLoading, isError } = useMagicItems();

  const page = Number(search.get("page") || 1);

  const searchText = search.get("query")?.toLowerCase() || "";
  const category =
    search.getAll("category").map((a) => a.toLowerCase()) || null;
  const rarity = search.getAll("rarity").map((a) => a.toLowerCase()) || null;

  // --- valores por defecto si data no cargó ---
  const allMagicItems: DNDMagicItem[] = data?.magicItemspr ?? [];

  const findedMagicItem = allMagicItems.find(
    (item) => item.index === magicItemIndex
  );

  // --- FILTROS ---
  const filtered = useMemo(() => {
    return allMagicItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.index.toLowerCase().includes(searchText);

      const matchesType =
        category.length > 0
          ? category.includes(item.equipment_category.index)
          : true;

      const matchesRarity =
        rarity.length > 0
          ? rarity.includes(item.rarity.name.toLowerCase().replace(/\s+/g, "-"))
          : true;

      return matchesSearch && matchesType && matchesRarity;
    });
  }, [allMagicItems, searchText, category, rarity]);

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

  const categories = useMemo(() => {
    if (!allMagicItems.length) return [];

    const map = new Map<string, string>();

    allMagicItems.forEach((item) => {
      map.set(item.equipment_category.index, item.equipment_category.name);
    });

    return Array.from(map).map(([index, name]) => ({ index, name }));
  }, [allMagicItems]);

  return {
    filtered,
    paginated,
    totalPages,
    page,
    isLoading,
    isError,
    categories,
    findedMagicItem,
  };
};
