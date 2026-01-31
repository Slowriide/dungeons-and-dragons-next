import { Skeleton } from "@/components/ui/skeleton";

export const RaceHeaderSkeleton = () => {
  return (
    <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
      {/* Image Skeleton */}
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col justify-center">
        {/* Title */}
        <Skeleton className="h-14 w-3/4 mb-4" />

        {/* Description */}
        <div className="mb-8 space-y-3">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-4/5" />
        </div>

        {/* Stats Section */}
        <div className="mb-6 gap-x-8 gap-y-4 border-y border-border py-6">
          <div className="flex flex-row space-y-2 gap-x-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-8" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
          <div className="mb-8 space-y-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>

        {/* Ability Score Section */}
        <div>
          <Skeleton className="h-4 w-48 mb-3" />
          <div className="flex flex-wrap gap-3">
            {[...Array(2)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-32 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
