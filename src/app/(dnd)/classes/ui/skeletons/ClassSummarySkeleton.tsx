import { Skeleton } from "@/components/ui/skeleton";

export const ClassSummarySkeleton = () => {
  return (
    <div>
      {/* Proficiencies */}
      <section className="mb-10">
        <Skeleton className="h-8 w-56 mb-6" />

        <dl className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 border-b border-border pb-4">
              <Skeleton className="h-4 w-26 shrink-0" />
              <Skeleton className="h-4 w-full max-w-xl" />
            </div>
          ))}
        </dl>
      </section>

      {/* Becoming a Class */}
      <section className="space-y-6 border-b border-border pb-6">
        <Skeleton className="h-8 w-72" />
        <Skeleton className="h-4 w-full max-w-2xl" />

        <div className="space-y-4">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-8 w-48 rounded-full" />
        </div>

        {/* Level 1 */}
        <div className="space-y-3">
          <Skeleton className="h-6 w-56" />
          <Skeleton className="h-4 w-full max-w-xl" />
          <Skeleton className="h-4 w-full max-w-lg" />
        </div>

        {/* Multiclass */}
        <div className="space-y-3">
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-4 w-full max-w-xl" />
          <Skeleton className="h-4 w-full max-w-lg" />
        </div>

        {/* Table placeholder */}
        <div className="mt-6 space-y-2">
          <Skeleton className="h-10 w-full" />
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-8 border-b border-border pb-6 space-y-4">
        <Skeleton className="h-8 w-48" />
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-4 w-full max-w-3xl" />
        ))}
      </section>

      {/* Subclasses */}
      <section className="mt-8 space-y-4">
        <Skeleton className="h-8 w-56" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 2 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-lg" />
          ))}
        </div>
      </section>
    </div>
  );
};
