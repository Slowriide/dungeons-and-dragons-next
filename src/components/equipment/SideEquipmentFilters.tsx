"use client";

import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ResetFiltersButton } from "../ResetFiltersButton";
import { SearchCard } from "../SearchCard";
import { useToggleFilters } from "@/hooks/useToggleFilters";
import { EquipmentCategories } from "@/interface/equipment/EquipmentCategory";

export const SideEquipmentFilters = () => {
  const { toggleFilters } = useToggleFilters();

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategories = searchParams.getAll("category") ?? [];

  const [minCost, setMinCost] = useState(searchParams.get("minCost") ?? "");
  const [maxCost, setMaxCost] = useState(searchParams.get("maxCost") ?? "");

  const [minWeight, setMinWeight] = useState(
    searchParams.get("minWeight") ?? ""
  );
  const [maxWeight, setMaxWeight] = useState(
    searchParams.get("maxWeight") ?? ""
  );

  const handleParamChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set(key, value);
    else params.delete(key);

    router.replace(`?${params.toString()}`);
  };

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
              {EquipmentCategories?.map((cr) => (
                <DropdownMenuCheckboxItem
                  key={cr.index}
                  onClick={() => toggleFilters("category", cr.index)}
                  className="p-2 hover:cursor-pointer pl-8"
                  checked={selectedCategories.includes(cr.index)}
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
            onKeyDown={(e) =>
              e.key === "Enter" && handleParamChange("minCost", minCost)
            }
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
            onKeyDown={(e) =>
              e.key === "Enter" && handleParamChange("maxCost", maxCost)
            }
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
            onKeyDown={(e) =>
              e.key === "Enter" && handleParamChange("minWeight", minWeight)
            }
          />
          <p>-</p>
          <Input
            id="maxWeight"
            placeholder="100 lb"
            className="placeholder:text-gray-400"
            value={maxWeight}
            onChange={(e) => setMaxWeight(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleParamChange("maxWeight", maxWeight)
            }
          />
        </div>
      </Card>
      <ResetFiltersButton
        keys={["minCost", "maxCost", "minWeight", "maxWeight", "category"]}
      />
    </div>
  );
};
