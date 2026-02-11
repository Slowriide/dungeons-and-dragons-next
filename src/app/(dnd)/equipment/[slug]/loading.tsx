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

          <Card className="glass-card p-4 sm:p-6">
            {/* Main Grid */}

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Image */}
              <Skeleton className="w-full h-68 lg:h-112 rounded-lg order-1 lg:order-2 lg:col-span-2" />

              {/* Info */}
              <div className="order-2 lg:order-1 lg:col-span-3 space-y-6 mr-2">
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                  {/* Category */}
                  <TitleAndTextSkeleton />

                  {/* Gear Category */}
                  <TitleAndTextSkeleton />

                  {/* Damage*/}
                  <TitleAndTextSkeleton />

                  {/* Normal Range */}
                  <TitleAndTextSkeleton />

                  {/* Long Range */}
                  <TitleAndTextSkeleton />

                  {/* Cost */}
                  <TitleAndTextSkeleton />

                  {/* Weight */}
                  <TitleAndTextSkeleton />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
