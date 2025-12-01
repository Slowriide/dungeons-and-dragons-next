"use client";

import { SearchCard } from "../SearchCard";

export const SideRacesFilters = () => {
  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search races..."} />
    </div>
  );
};
