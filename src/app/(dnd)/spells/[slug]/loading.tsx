import { TitleAndTextSkeleton } from "@/components/skeletons/TitleAndTextSkeleton";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 ">
        <div className="flex flex-col mt-10 space-y-6">
          {/* Name */}
          <div className="flex items-center space-x-5">
            <Skeleton className="h-10 w-56" />
          </div>

          <Card className="glass-card p-4 sm:p-6">
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Image  */}
              <Skeleton className="w-full h-116 lg:h-112 rounded-lg order-1 lg:order-2 lg:col-span-2" />

              {/* Info */}
              <div className="order-2 lg:order-1 lg:col-span-3 pb-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <TitleAndTextSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-3">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>

            {/* Material */}
            <div className="mt-6 space-y-3">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
