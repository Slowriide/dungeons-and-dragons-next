import { Skeleton } from "../ui/skeleton";

export const RangeFilterSkeleton = () => {
  return (
    <div className="space-y-4 mt-6">
      <Skeleton className="h-6 w-36" />
      <div className="flex flex-row gap-x-5">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10  w-full" />
      </div>
    </div>
  );
};
