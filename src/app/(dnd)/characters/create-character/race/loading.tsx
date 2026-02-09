import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        {/* Grid */}
        <div className="lg:col-span-5 grid grid-cols-5 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-50 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
