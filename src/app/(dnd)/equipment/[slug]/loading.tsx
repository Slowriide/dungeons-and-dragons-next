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
            <div className="grid grid-cols-5">
              <div className="col-span-3 space-y-6 mr-2">
                <div className="grid grid-cols-4 gap-4">
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

              {/* Image */}
              <Skeleton className="h-123 w-123 " />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
