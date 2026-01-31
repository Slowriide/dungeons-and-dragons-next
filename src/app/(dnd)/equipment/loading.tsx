import { ButtonSkeleton } from "@/components/skeletons/ButtonSkeleton";
import { RangeFilterSkeleton } from "@/components/skeletons/RangeFilterSkeleton";
import { SearchBoxSkeleton } from "@/components/skeletons/SearchBoxSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
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
            <RangeFilterSkeleton />
            <RangeFilterSkeleton />
            <ButtonSkeleton />
          </div>

          {/* Grid */}
          <div className="space-y-4">
            <Skeleton className="h-34 w-238 rounded-xl" />
            <Skeleton className="h-34 w-238 rounded-xl" />
            <Skeleton className="h-34 w-238 rounded-xl" />
            <Skeleton className="h-34 w-238 rounded-xl" />
            <Skeleton className="h-34 w-238 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
