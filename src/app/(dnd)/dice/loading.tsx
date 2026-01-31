import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex items-center gap-4 mt-14">
          <Skeleton className="h-14 w-14 rounded-full" />
          <Skeleton className="h-12 w-64" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="glass-card p-6 gap-y-2 col-span-3">
            <Skeleton className="h-7 w-32 mb-4" />

            <div className="flex flex-row mb-6 gap-x-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="w-20 h-20 mb-1" />
                  <Skeleton className="h-4 w-8 mx-auto" />
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Skeleton className="flex-1 h-12 rounded-lg" />
              <Skeleton className="h-12 w-24 rounded-lg" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
