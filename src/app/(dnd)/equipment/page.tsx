import { EquipmentGrid } from "@/components/equipment/EquipmentGrid";
import { SideEquipmentFilters } from "@/app/(dnd)/equipment/ui/SideEquipmentFilters";
import { geisCinzel } from "@/config/fonts";
import { ShieldIcon } from "lucide-react";
import { EquipmentGridWrapper } from "./ui/EquipmentGridWrapper";
import { SideEquipmentFilterWrapper } from "./ui/SideEquipmentFilterWrapper";

interface Props {
  searchParams: Promise<{
    page: string;
    query: string;
    minCost: string;
    maxCost: string;
    minWeight: string;
    maxWeight: string;
    category: string | string[];
  }>;
}

export default async function EquipmentPage({ searchParams }: Props) {
  const {
    page: pageString,
    query: queryString,
    category,
    minCost,
    maxCost,
    minWeight,
    maxWeight,
  } = await searchParams;

  const page = pageString ? parseInt(pageString) : 1;
  const query = queryString || "";
  const categories = Array.isArray(category)
    ? category
    : category
      ? [category]
      : [];
  const minCostNumber = Number(minCost || "0");
  const maxCostNumber = Number(maxCost || "999999");
  const mimWeightNumber = Number(minWeight || "0");
  const maxWeightNumber = Number(maxWeight || "999999");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <ShieldIcon className="size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Equipment
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideEquipmentFilterWrapper
            categories={categories}
            query={query}
            page={page}
          />

          <EquipmentGridWrapper
            page={page}
            query={query}
            take={12}
            categories={categories}
            minCost={minCostNumber}
            maxCost={maxCostNumber}
            minWeight={mimWeightNumber}
            maxWeight={maxWeightNumber}
          />
        </div>
      </div>
    </div>
  );
}
