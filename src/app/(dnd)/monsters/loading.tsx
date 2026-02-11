import { SearchBoxSkeleton } from "@/components/skeletons/SearchBoxSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function MonstersGridSkeleton() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <Skeleton className="h-14 w-14 rounded-full" />
          <Skeleton className="h-12 w-64" />
        </header>

        {/* Main content */}
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar skeleton */}
          <aside className="space-y-6">
            <div className="space-y-4 mt-3">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-4 mt-3">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-4 mt-3">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-10 w-full" />
            </div>
            <Skeleton className="h-10 w-full mt-6" />
          </aside>

          {/* Grid skeleton */}
          <article className="col-span-1 lg:col-span-3 space-y-4">
            <div className="grid lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-xl" />
              ))}
            </div>

            {/* Pagination skeleton */}
            <Skeleton className="h-10 w-64 mx-auto mt-6" />
          </article>
        </section>
      </div>
    </main>
  );
}
