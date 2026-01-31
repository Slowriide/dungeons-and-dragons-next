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
            <div className="col-span-3 space-y-6 mr-2">
              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
