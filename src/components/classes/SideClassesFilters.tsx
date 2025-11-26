"use client";

import { geisCinzel } from "@/config/fonts";
import { SearchBar } from "../SearchBar";
import { Card } from "../ui/card";
import { useRouter, useSearchParams } from "next/navigation";

export const SideClassesFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

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
        <SearchBar placeholder="Search classes..." />
      </Card>
    </div>
  );
};
