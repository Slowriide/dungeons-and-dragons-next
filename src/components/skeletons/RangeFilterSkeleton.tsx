import { Skeleton } from "../ui/skeleton";

export const RangeFilterSkeleton = () => {
  return (
    <div className="space-y-4 mt-3">
      <Skeleton className="h-6 w-36" />
      <div className="flex flex-row gap-x-5">
        <Skeleton className="h-10 w-30" />
        <Skeleton className="h-10 w-30" />
      </div>
    </div>
  );
};
