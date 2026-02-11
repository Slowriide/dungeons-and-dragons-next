import { SearchBoxSkeleton } from "@/components/skeletons/SearchBoxSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function MagicItemGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex items-center gap-4 mt-14">
          <Skeleton className="h-14 w-14 rounded-full" />
          <Skeleton className="h-12 w-64" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="space-y-8">
            <SearchBoxSkeleton />
            <SearchBoxSkeleton />
            <SearchBoxSkeleton />
            <Skeleton className="h-10 w-full mt-6" />
          </div>

          {/* Grid */}
          <div className="space-y-4 lg:col-span-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} className="h-28 rounded-xl w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
