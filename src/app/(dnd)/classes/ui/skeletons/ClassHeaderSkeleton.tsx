import { Skeleton } from "@/components/ui/skeleton";

export const ClassHeaderSkeleton = () => {
  return (
    <div className="mb-8 lg:mb-16 grid gap-8 lg:grid-cols-2 lg:gap-10 mt-10">
      {/* Image skeleton */}
      <section className="relative w-full max-w-md mx-auto my-auto">
        <Skeleton className="w-full aspect-square rounded-lg" />
      </section>

      {/* Content skeleton */}
      <div className="flex flex-col justify-center">
        {/* Title */}
        <Skeleton className="h-12 w-2/3 mb-12" />

        {/* Description */}
        <div className="space-y-3 mb-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[75%]" />
        </div>

        {/* Quick stats */}
        <div className="grid gap-4 grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
