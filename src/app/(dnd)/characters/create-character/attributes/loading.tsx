import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  const attributes = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" /> {/* "Ability Scores" title */}
        {/* Instructions */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full max-w-md" />
        </div>
      </div>

      {/* Attributes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6  mt-8">
        {attributes.map((attr, index) => (
          <div key={index} className="w-28">
            <div className="relative h-36 rounded-lg border flex flex-col items-center py-3">
              {/* Label */}
              <Skeleton className="h-4 w-20 mb-2 mt-2" />

              {/* Select (centro) */}
              <div className="flex flex-1 items-center">
                <Skeleton className="h-9 w-16 rounded-md" />
              </div>

              {/* Floating modifier badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <Skeleton className="h-7 w-14 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mb-20">
        <Skeleton className="h-10 w-24" /> {/* Previous */}
        <Skeleton className="h-10 w-24" /> {/* Continue */}
      </div>
    </div>
  );
}
