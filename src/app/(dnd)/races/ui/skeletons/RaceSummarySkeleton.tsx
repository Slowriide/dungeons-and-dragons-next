// components/races/RaceSummarySkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const RaceSummarySkeleton = () => {
  return (
    <div className="space-y-8 mb-10">
      {/* Alignment Section */}
      <section>
        <Skeleton className="h-8 w-32 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </section>

      {/* Age & Size Section */}
      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <Skeleton className="h-8 w-16 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        </div>

        <div>
          <Skeleton className="h-8 w-16 mb-4" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section>
        <Skeleton className="h-8 w-32 mb-4" />
        <div className="mb-3 flex flex-wrap gap-2">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-7 w-20 rounded-full" />
          ))}
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </section>

      {/* Racial Traits Section */}
      <section>
        <Skeleton className="h-8 w-36 mb-4" />
        <div className="flex flex-wrap gap-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-7 w-28 rounded-full" />
          ))}
        </div>
      </section>
    </div>
  );
};
