"use client";

import { geisCinzel } from "@/config/fonts";
import { SearchBar } from "../SearchBar";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const types = ["sword", "axe", "arrow"];

export const SideEquipmentFilters = () => {
  const [selectedTypes, setSelectedTypes] = useState<string | null>(null);

  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <Card className="p-4 items-start gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          Search
        </span>
        <SearchBar placeholder="Search spells..." />
      </Card>

      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg`}
        >
          Type
        </span>
        <div className=" flex flex-wrap gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                onClick={() => setSelectedTypes(null)}
                className="w-full"
              >
                All
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {types.map((cr) => (
                <DropdownMenuItem key={cr} onClick={() => setSelectedTypes(cr)}>
                  {cr}
                </DropdownMenuItem>
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
          <Input placeholder="1 GP" className="placeholder:text-gray-400" />
          <p>-</p>
          <Input placeholder="10 GP" className="placeholder:text-gray-400" />
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
          <Input placeholder="1 lb" className="placeholder:text-gray-400" />
          <p>-</p>
          <Input placeholder="100 lb" className="placeholder:text-gray-400" />
        </div>
      </Card>
    </div>
  );
};
