import { SearchBoxSkeleton } from "@/components/skeletons/SearchBoxSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Title */}
        <div className="flex flex-col items-center space-y-10 mt-20">
          <Skeleton className="h-18 w-190" />
          <Skeleton className="h-12 w-150" />
          <Skeleton className="h-12 w-152" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={i} className="h-52 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
