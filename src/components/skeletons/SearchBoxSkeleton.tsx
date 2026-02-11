import { Skeleton } from "../ui/skeleton";

export const SearchBoxSkeleton = () => {
  return (
    <div className="space-y-4 mt-3">
      <Skeleton className="h-6 w-36" />
      <Skeleton className="h-10 lg:w-62 w-full" />
    </div>
  );
};
