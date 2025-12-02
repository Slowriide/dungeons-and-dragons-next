"use client";

import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useSearchParams } from "next/navigation";
import { ResetFiltersButton } from "../ResetFiltersButton";
import { SearchCard } from "../SearchCard";
import { MagicItemsRarity } from "@/interface/magicItems/MagicItemsRarity";
import { useToggleFilters } from "@/hooks/useToggleFilters";
import { useFilteredMagicItems } from "@/hooks/magicItems/useFilteredMagicItems";

export const SideMagicItemsFilters = () => {
  const searchParams = useSearchParams();

  const selectedCategories = searchParams.getAll("category");
  const selectedRarity = searchParams.getAll("rarity");

  const { toggleFilters } = useToggleFilters();

  const { categories } = useFilteredMagicItems();

  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search magic items..."} />
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
              {categories.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category.index}
                  onClick={() => toggleFilters("category", category.index)}
                  className="p-2 hover:cursor-pointer pl-8"
                  checked={selectedCategories?.includes(category.index)}
                >
                  {category.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg`}
        >
          Rarity
        </span>
        <div className=" flex gap-2 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                onClick={() => toggleFilters("rarity", undefined)}
                className="w-full"
              >
                All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-(--radix-dropdown-menu-trigger-width)">
              {MagicItemsRarity.map((rarity) => (
                <DropdownMenuCheckboxItem
                  key={rarity.index}
                  onClick={() => toggleFilters("rarity", rarity.index)}
                  className="p-2 hover:cursor-pointer pl-8"
                  checked={selectedRarity?.includes(rarity.index)}
                >
                  {rarity.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      <ResetFiltersButton keys={["category", "rarity"]} />
    </div>
  );
};
