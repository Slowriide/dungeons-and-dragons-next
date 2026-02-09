"use client";

import { SearchCard } from "../../../../components/SearchCard";

/**
 * SideRacesFilters
 *
 * Displays the sidebar search and filters for the Races/Rules page.
 * Currently includes:
 * - Search input for races/rules
 */
export const SideRacesFilters = () => {
  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <SearchCard placeholder={"Search races..."} />
    </div>
  );
};
