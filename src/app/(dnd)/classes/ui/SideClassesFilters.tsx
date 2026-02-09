import { SearchCard } from "../../../../components/SearchCard";

export const SideClassesFilters = () => {
  return (
    <div className=" col-span-1 space-y-4">
      {/*
       * Search input for filtering classes by name.
       * This component only updates the URL query params;
       * actual filtering is handled by the grid component.
       * */}
      <SearchCard placeholder={"Search classes..."} />
    </div>
  );
};
