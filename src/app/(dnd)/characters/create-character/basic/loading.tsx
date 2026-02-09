import { SearchBoxSkeleton } from "@/components/skeletons/SearchBoxSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ClassesGridSkeleton() {
  return (
    <div className="space-y-6">
      {/* Character Name */}
      <div className="grid grid-cols-5 gap-x-2 gap-y-6">
        <div className="col-span-5 space-y-2">
          <Skeleton className="h-4 w-32" /> {/* Label */}
          <Skeleton className="h-8 w-full" /> {/* Input */}
        </div>

        {/* Class */}
        <div className="col-span-3 space-y-2">
          <Skeleton className="h-4 w-16" /> {/* Label */}
          <Skeleton className="h-8 w-32" /> {/* Select */}
        </div>

        {/* Level */}
        <div className="col-span-2 space-y-2">
          <Skeleton className="h-4 w-12" /> {/* Label */}
          <Skeleton className="h-8 w-full" /> {/* Input */}
        </div>

        {/* Proficiencies Section */}
        <div className="col-span-5 space-y-6 mt-1">
          <Skeleton className="h-8 w-48" /> {/* Section Title */}
          {/* Proficiencies Accordion */}
          <div className="border  p-4 space-y-2">
            <Skeleton className="h-5 w-40" />
          </div>
          {/* Class Features - 3 skill selections */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-16" /> {/* Label */}
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-8 w-40" />
          </div>
        </div>

        {/* Features Section */}
        <div className="col-span-5 space-y-6">
          <Skeleton className="h-8 w-32" /> {/* Section Title */}
          {/* Feature Accordions */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="border  p-4 space-y-2">
              <Skeleton className="h-5 w-30" />
            </div>
          ))}
        </div>

        {/* Equipment Section */}
        <div className="col-span-5 space-y-6">
          <Skeleton className="h-8 w-36" /> {/* Section Title */}
          {/* Equipment Selectors */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border  p-4 space-y-2">
                <Skeleton className="h-5 w-56" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-end">
        <Skeleton className="h-10 w-24" />
      </div>
    </div>
  );
}
