import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="min-h-screen bg-background space-y-5">
      {/* Selected Race Selector */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-32" /> {/* Label */}
        <Skeleton className="h-8 w-20" /> {/* Select */}
      </div>
      {/* Characteristics Section */}
      <Skeleton className="h-6 w-40" /> {/* Section Title */}
      {/* Size Accordion */}
      <div className="border p-4 space-y-4">
        <Skeleton className="h-5 w-16" /> {/* Title */}
      </div>
      {/* Speed Accordion */}
      <div className="border  p-4 space-y-4">
        <Skeleton className="h-5 w-20" /> {/* Title */}
      </div>
      {/* Alignment Selector */}
      <div className="border  p-4 space-y-3">
        <Skeleton className="h-5 w-24" /> {/* Title */}
        <Skeleton className="h-4 w-full" />
        {/* Alignment buttons grid */}
        <Skeleton className="h-10 w-full" />
      </div>
      {/* Languages Accordion */}
      <div className="border  p-4 space-y-4">
        <Skeleton className="h-5 w-28" /> {/* Title */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      {/* Bonuses Section */}
      <div className="border p-4 space-y-4">
        <Skeleton className="h-5 w-26" /> {/* Title */}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between mb-20">
        <Skeleton className="h-10 w-24" /> {/* Previous */}
        <Skeleton className="h-10 w-24" /> {/* Continue */}
      </div>
    </div>
  );
}
