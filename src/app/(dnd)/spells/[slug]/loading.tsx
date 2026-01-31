import { TitleAndTextSkeleton } from "@/components/skeletons/TitleAndTextSkeleton";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col mt-10 space-y-6">
          {/*Name */}
          <div className="flex flex-row items-center space-x-5">
            <Skeleton className="h-10 w-56 " />
          </div>
          <Card className=" glass-card animate-fade-in p-6 gap-y-2">
            <div className="grid grid-cols-5">
              <div className="grid grid-cols-3 col-span-3 border-b py-4 mr-4">
                {/* Classes */}
                <TitleAndTextSkeleton />

                {/* Level */}
                <TitleAndTextSkeleton />

                {/* Cast time*/}
                <TitleAndTextSkeleton />

                {/* Range */}
                <TitleAndTextSkeleton />

                {/* Components */}
                <TitleAndTextSkeleton />

                {/* Duration */}
                <TitleAndTextSkeleton />

                {/* School */}
                <TitleAndTextSkeleton />

                {/* Ritual */}
                <TitleAndTextSkeleton />

                {/* Concentration */}
                <TitleAndTextSkeleton />

                {/* Damage type */}
                <TitleAndTextSkeleton />
              </div>

              {/* Image */}
              <Skeleton className="h-123 w-123 " />
            </div>

            {/* Description */}
            <div className="mt-4 space-y-2">
              <Skeleton className="h-6 w-30" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Material */}
            <div className="mt-4 space-y-2">
              <Skeleton className="h-6 w-30" />
              <Skeleton className="h-4 w-90" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
