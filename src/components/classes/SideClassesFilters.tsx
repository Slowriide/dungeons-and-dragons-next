"use client";

import { SearchCard } from "../SearchCard";

export const SideClassesFilters = () => {
  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search classes..."} />
    </div>
  );
};
