"use client";

import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";

import { ResetFiltersButton } from "../../../../components/ResetFiltersButton";
import { SearchCard } from "../../../../components/SearchCard";
import { MagicItemsRarity } from "@/interface/magicItems/MagicItemsRarity";
import { useToggleFilters } from "@/hooks/useToggleFilters";

interface Props {
  categories?: string[];
  rarities?: string[];
  categoriesAvailables: {
    index: string;
    name: string;
  }[];
}
/**
 * SideMagicItemsFilters
 *
 * Client-side component for filtering magic items.
 * Features:
 * - Search bar
 * - Category filter dropdown
 * - Rarity filter dropdown
 * - Reset filters button
 */
export const SideMagicItemsFilters = ({
  categories,
  rarities,
  categoriesAvailables,
}: Props) => {
  const { toggleFilters } = useToggleFilters();

  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search magic items..."} />

      {/* Category Filter */}
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
              {categoriesAvailables.map((category) => (
                <DropdownMenuCheckboxItem
                  key={category.index}
                  onClick={() => toggleFilters("category", category.index)}
                  className="p-2 hover:cursor-pointer pl-8"
                  checked={categories?.includes(category.index)}
                >
                  {category.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      {/* Rarity Filter */}
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
                  checked={rarities?.includes(rarity.index)}
                >
                  {rarity.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      {/* Reset filters button */}
      <ResetFiltersButton keys={["category", "rarity"]} />
    </div>
  );
};
