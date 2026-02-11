import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        {/* ============================= */}
        {/* HEADER SECTION (RaceHeaderCard) */}
        {/* ============================= */}

        <div className="mb-8 lg:mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
          {/* Image */}
          <Skeleton className="w-full h-130  lg:h-180 rounded-xl" />

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Title */}
            <Skeleton className="h-12 w-3/4" />

            {/* Description */}
            <div className="space-y-3">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
              <Skeleton className="h-5 w-5/6" />
              <Skeleton className="h-5 w-4/6" />
              <Skeleton className="h-5 w-4/6" />
            </div>

            {/* Core attributes */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-6 w-20" />
                </div>
              ))}
            </div>

            {/* Ability bonuses */}
            <div className="space-y-3">
              <Skeleton className="h-4 w-40" />
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-10 w-24 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* SUMMARY SECTION (RaceSummary) */}
        {/* ============================= */}

        <div className="space-y-12 mb-10">
          {/* Alignment */}
          <section className="space-y-4">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </section>

          {/* Age & Size */}
          <div className="grid gap-8 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <section key={i} className="space-y-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-4/5" />
              </section>
            ))}
          </div>

          {/* Languages */}
          <section className="space-y-4">
            <Skeleton className="h-8 w-40" />

            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-20 rounded-full" />
              ))}
            </div>

            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </section>

          {/* Traits */}
          <section className="space-y-4">
            <Skeleton className="h-8 w-40" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-28 rounded-full" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
