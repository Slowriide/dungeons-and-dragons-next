"use client";

import { geisCinzel } from "@/config/fonts";

import { monsters } from "@/mocks/data/monsters";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSearchParams } from "next/navigation";

import { useToggleFilters } from "@/hooks/useToggleFilters";
import { CR_LIST, parseCR } from "@/interface/monsters/ChallengeRating";
import { Card } from "@/components/ui/card";
import { SearchCard } from "@/components/SearchCard";
import { Button } from "@/components/ui/button";
import { ResetFiltersButton } from "@/components/ResetFiltersButton";

export const SideMonstersFilters = () => {
  const { toggleFilters } = useToggleFilters();

  const searchParams = useSearchParams();

  const activeCR = searchParams.getAll("challenge_rating") ?? [];
  const activeAlignment = searchParams.getAll("alignment") ?? [];

  const cr = CR_LIST;
  const alignment = Array.from(new Set(monsters.map((s) => s.alignment)));

  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search monsters..."} />

      {/* Challenge rating filter */}
      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg`}
        >
          Challenge Rating
        </span>
        <div className=" flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                onClick={() => toggleFilters("challenge_rating", undefined)}
                className="w-full"
              >
                All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-(--radix-dropdown-menu-trigger-width) text-start">
              {cr.map((cr) => (
                <DropdownMenuCheckboxItem
                  key={cr}
                  onClick={() => toggleFilters("challenge_rating", parseCR(cr))}
                  checked={activeCR.includes(parseCR(cr))}
                  className="pl-8"
                >
                  {cr}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>

      {/* Size filter */}
      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          Alignment
        </span>
        <div className=" flex flex-col gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                onClick={() => toggleFilters("alignment", undefined)}
                className="w-full"
              >
                All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-(--radix-dropdown-menu-trigger-width) text-start">
              {alignment.map((alignment) => (
                <DropdownMenuCheckboxItem
                  key={alignment}
                  onClick={() => toggleFilters("alignment", alignment)}
                  checked={activeAlignment.includes(alignment)}
                  className="pl-8"
                >
                  {alignment}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Card>
      <ResetFiltersButton keys={["challenge_rating", "alignment"]} />
    </div>
  );
};
