import { TitleAndTextSkeleton } from "@/components/skeletons/TitleAndTextSkeleton";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col mt-20 space-y-6">
          {/*Name */}
          <div className="flex flex-row items-center space-x-5">
            <Skeleton className="h-10 w-56 " />
          </div>

          <Card className=" glass-card animate-fade-in p-6 gap-y-2">
            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Image */}
              <Skeleton className="w-full h-66 lg:h-112 rounded-lg order-1 lg:order-2 lg:col-span-2" />

              {/* Info */}
              <div className="order-2 lg:order-1 lg:col-span-3 pb-6 ">
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Category */}
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-full lg:w-26" />
                    <Skeleton className="h-6 w-full lg:w-26" />
                  </div>

                  {/* Gear Category */}
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-full lg:w-26" />
                    <Skeleton className="h-6 w-full lg:w-26" />
                  </div>

                  {/* Rarity*/}
                  <Skeleton className="h-6 w-full lg:w-26" />
                </div>
                <div className="mt-4 space-y-2">
                  <Skeleton className="h-6 w-30" />
                  <Skeleton className="h-4 w-full lg:w-140" />
                  <Skeleton className="h-4 w-full lg:w-120" />
                  <Skeleton className="h-4 w-full lg:w-110" />
                  <Skeleton className="h-4 w-full lg:w-160" />
                  <Skeleton className="h-4 w-full lg:w-140" />
                  <Skeleton className="h-4 w-full lg:w-140" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
