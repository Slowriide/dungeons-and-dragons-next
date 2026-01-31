// components/monsters/MonsterSummarySkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export const MonsterSummarySkeleton = () => {
  return (
    <div className="mb-16">
      {/* Traits Skeleton */}
      <section className="mb-16">
        <Skeleton className="h-9 w-32 mb-6" />

        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-6">
            <Skeleton className="h-7 w-48 mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        ))}
      </section>

      {/* Actions Skeleton */}
      <section className="space-y-6 border-b border-red-500 pb-8">
        <Skeleton className="h-9 w-32" />

        {[...Array(4)].map((_, i) => (
          <div key={i}>
            <Skeleton className="h-7 w-40 mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        ))}
      </section>

      {/* Legendary Actions Skeleton */}
      <section className="space-y-6 border-b border-red-500 pb-8 mt-8">
        <Skeleton className="h-9 w-48" />

        {[...Array(2)].map((_, i) => (
          <div key={i}>
            <Skeleton className="h-7 w-44 mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
