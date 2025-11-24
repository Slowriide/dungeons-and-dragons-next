"use client";

import { geisCinzel } from "@/config/fonts";
import { SearchBar } from "../SearchBar";
import { Card } from "../ui/card";
import { environments, monsters } from "@/mocks/data/monsters";
import { Button } from "../ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter, useSearchParams } from "next/navigation";
import { ResetFiltersButton } from "../ResetFiltersButton";

export const SideMonstersFilters = () => {
  const [selectedCr, setSelectedCr] = useState<string | null>(null);
  const [selectedAlignment, setSelectedAlignment] = useState<string | null>(
    null
  );
  const [selectedHabitat, setSelectedHabitat] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCR = searchParams.getAll("challenge_rating") ?? [];
  const activeAlignment = searchParams.getAll("alignment") ?? [];

  const toggleFilters = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString());

    const current = params.getAll(key);

    let newParams: string[];
    if (value === undefined) {
      params.delete(key);
      params.set("page", "1");

      router.push(`?${params.toString()}`, { scroll: false });
      return;
    }

    if (current.includes(value)) {
      newParams = current.filter((params) => params != value);
    } else {
      newParams = [...current, value];
    }

    params.delete(key);

    newParams.forEach((value) => {
      params.append(key, value);
    });

    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const cr = Array.from(new Set(monsters.map((s) => s.cr)));
  const alignment = Array.from(new Set(monsters.map((s) => s.alignment)));

  //TODO add type filter
  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <Card className="p-4 items-start gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          Search
        </span>
        <SearchBar placeholder="Search monsters..." />
      </Card>

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
            <DropdownMenuContent>
              {cr.map((cr) => (
                <DropdownMenuCheckboxItem
                  key={cr}
                  onClick={() => toggleFilters("challenge_rating", cr)}
                  checked={activeCR.includes(cr)}
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
            <DropdownMenuContent className="w-full">
              {alignment.map((alignment) => (
                <DropdownMenuCheckboxItem
                  key={alignment}
                  onClick={() => toggleFilters("alignment", alignment)}
                  checked={activeAlignment.includes(alignment)}
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
