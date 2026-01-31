import { Skeleton } from "../ui/skeleton";

export const TitleAndTextSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-6 w-26" />
      <Skeleton className="h-6 w-26" />
    </div>
  );
};
