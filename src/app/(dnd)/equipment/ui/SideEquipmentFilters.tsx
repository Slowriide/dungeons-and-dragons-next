"use client";

import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ResetFiltersButton } from "../../../../components/ResetFiltersButton";
import { SearchCard } from "../../../../components/SearchCard";
import { useToggleFilters } from "@/hooks/useToggleFilters";
import { useDebouncedFilters } from "@/hooks/useDebounceFilters";

interface Props {
  categories?: string[];
  categoriesAvailables: {
    index: string;
    name: string;
  }[];
}
export const SideEquipmentFilters = (props: Props) => {
  const { categories, categoriesAvailables } = props;

  const { toggleFilters } = useToggleFilters();

  const searchParams = useSearchParams();
  const router = useRouter();

  const [minCost, setMinCost] = useState(searchParams.get("minCost") ?? "");
  const [maxCost, setMaxCost] = useState(searchParams.get("maxCost") ?? "");

  const [minWeight, setMinWeight] = useState(
    searchParams.get("minWeight") ?? "",
  );
  const [maxWeight, setMaxWeight] = useState(
    searchParams.get("maxWeight") ?? "",
  );

  const debouncedFilters = useDebouncedFilters({
    minCost,
    maxCost,
    minWeight,
    maxWeight,
  });

  // Apply filters when debounced values change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (debouncedFilters.minCost)
      params.set("minCost", debouncedFilters.minCost);
    else params.delete("minCost");

    if (debouncedFilters.maxCost)
      params.set("maxCost", debouncedFilters.maxCost);
    else params.delete("maxCost");

    if (debouncedFilters.minWeight)
      params.set("minWeight", debouncedFilters.minWeight);
    else params.delete("minWeight");

    if (debouncedFilters.maxWeight)
      params.set("maxWeight", debouncedFilters.maxWeight);
    else params.delete("maxWeight");

    router.replace(`?${params.toString()}`);
  }, [debouncedFilters]);

  useEffect(() => {
    setMinCost(searchParams.get("minCost") ?? "");
    setMaxCost(searchParams.get("maxCost") ?? "");
    setMinWeight(searchParams.get("minWeight") ?? "");
    setMaxWeight(searchParams.get("maxWeight") ?? "");
  }, [searchParams]);

  console.log(categoriesAvailables);
  console.log(categories?.map((cat) => cat));

  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search equipment..."} />

      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg`}
        >
          Category
        </span>
        <div className=" flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                onClick={() => toggleFilters("category", undefined)}
                className="w-full"
              >
                All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-(--radix-dropdown-menu-trigger-width)">
              {categoriesAvailables?.map((cr) => (
                <DropdownMenuCheckboxItem
                  key={cr.index}
                  onClick={() => toggleFilters("category", cr.index)}
                  className="p-2 hover:cursor-pointer pl-8"
                  checked={categories?.includes(cr.index)}
                >
                  {cr.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      {/* Cost filter */}
      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg `}
        >
          Price
        </span>
        <div className=" flex flex-row gap-2 items-center ">
          <Input
            id="minPrice"
            type="text"
            placeholder="1 GP"
            className="placeholder:text-gray-400"
            value={minCost}
            min={0}
            onChange={(e) => setMinCost(e.target.value)}
          />
          <p>-</p>
          <Input
            id="maxPrice"
            type="text"
            placeholder="10 GP"
            className="placeholder:text-gray-400"
            value={maxCost}
            min={0}
            onChange={(e) => setMaxCost(e.target.value)}
          />
        </div>
      </Card>

      {/* School filter */}
      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg `}
        >
          Weight
        </span>
        <div className=" flex flex-row gap-2 items-center ">
          <Input
            id="minWeight"
            type="text"
            placeholder="1 lb"
            className="placeholder:text-gray-400"
            value={minWeight}
            onChange={(e) => setMinWeight(e.target.value)}
          />
          <p>-</p>
          <Input
            id="maxWeight"
            placeholder="100 lb"
            className="placeholder:text-gray-400"
            value={maxWeight}
            onChange={(e) => setMaxWeight(e.target.value)}
          />
        </div>
      </Card>
      <ResetFiltersButton
        keys={["minCost", "maxCost", "minWeight", "maxWeight", "category"]}
      />
    </div>
  );
};
