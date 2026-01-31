import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonHeader() {
  return (
    <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16 mt-10">
      {/* Left: Image Skeleton */}
      <div className="relative w-full max-w-md mx-auto my-auto">
        <Skeleton className="w-full aspect-square rounded-lg" />
      </div>

      {/* Right: Title and Quick Stats Skeleton */}
      <div className="flex flex-col justify-center space-y-6">
        {/* Title Skeleton */}
        <Skeleton className="h-14 w-3/4" />

        {/* Quick Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Armor Class */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-7 w-16" />
          </div>

          {/* Hit Points */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-7 w-32" />
          </div>

          {/* Speed */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-7 w-28" />
          </div>

          {/* Challenge Rating */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-7 w-24" />
          </div>

          {/* Monster Stats Table Skeleton */}
          <div className="sm:col-span-2">
            <div className="grid grid-cols-2 gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-1">
                  <Skeleton className="h-6 w-60" />
                </div>
              ))}
            </div>
          </div>

          {/* Senses */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <div className="space-y-1">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-6 w-36" />
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-32" />
          </div>
        </div>

        {/* Skills */}
        <div className="pt-4 space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-6 w-full" />
        </div>
      </div>
    </div>
  );
}
