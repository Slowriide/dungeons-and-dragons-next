"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useEquipment } from "./useEquipment";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

export const useFilteredEquipment = (take: number = 12) => {
  const search = useSearchParams();
  const router = useRouter();
  const { data, isLoading, isError } = useEquipment();

  const page = Number(search.get("page") || 1);

  const searchText = search.get("search")?.toLowerCase() || "";
  const type = search.get("type") || null;

  const minCost = Number(search.get("minCost") || "0");
  const maxCost = Number(search.get("maxCost") || "999999");

  const minWeight = Number(search.get("minWeight") || "0");
  const maxWeight = Number(search.get("maxWeight") || "999999");

  // --- valores por defecto si data no cargó ---
  const allEquipment: DNDEquipment[] = data?.equipment ?? [];

  // --- FILTROS ---
  const filtered = useMemo(() => {
    return allEquipment.filter((item) => {
      const cost = item.cost?.quantity ?? 0;
      const weight = item.weight ?? 0;

      const matchesSearch =
        item.name.toLowerCase().includes(searchText) ||
        item.index.toLowerCase().includes(searchText);

      const matchesType = type ? item.equipment_category.index === type : true;

      return (
        matchesSearch &&
        matchesType &&
        cost >= minCost &&
        cost <= maxCost &&
        weight >= minWeight &&
        weight <= maxWeight
      );
    });
  }, [allEquipment, searchText, type, minCost, maxCost, minWeight, maxWeight]);

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
