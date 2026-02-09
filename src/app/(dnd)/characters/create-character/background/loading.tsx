import { Skeleton } from "@/components/ui/skeleton";

export default function BackgroundGridSkeleton() {
  return (
    <div className="min-h-screen bg-background space-y-6 mb-10">
      {/* Page title */}
      <Skeleton className="h-8 w-40" />

      {/* Background selector */}
      <div className="space-y-2">
        <Skeleton className="h-10 w-full" />
      </div>

      {/* Feature section */}
      <div className="space-y-4 mt-4">
        <Skeleton className="h-6 w-32" />

        <div className="border p-4 space-y-4  mt-7">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-60 mt-4" />
          <Skeleton className="h-8 w-5/6" />
        </div>
      </div>

      <div className="border p-4 space-y-4  mt-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-60 mt-4" />
        <Skeleton className="h-8 w-5/6" />
      </div>

      <div className="border p-4 space-y-4  mt-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-60 mt-4" />
        <Skeleton className="h-8 w-5/6" />
      </div>

      <div className="border p-4 space-y-4  mt-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-60 mt-4" />
        <Skeleton className="h-8 w-5/6" />
      </div>

      <div className="border p-4 space-y-4  mt-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-60 mt-4" />
        <Skeleton className="h-8 w-5/6" />
      </div>

      {/* Feature */}
      <div className="space-y-4 mt-10">
        <Skeleton className="h-6 w-40" />
        <div className="border  p-4 space-y-2">
          <Skeleton className="h-5 w-40" />
        </div>
      </div>

      {/* Proficiencies section */}
      <div className="space-y-4 mt-6">
        <Skeleton className="h-6 w-40" />
        <div className="border  p-4 space-y-2">
          <Skeleton className="h-5 w-40" />
        </div>
      </div>

      <div className="border p-4 space-y-4  mt-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-60 mt-4" />
        <Skeleton className="h-8 w-5/6" />
      </div>

      {/* Equipment section */}
      <div className="space-y-4 mt-6">
        <Skeleton className="h-6 w-40" />
        <div className="border  p-4 space-y-2">
          <Skeleton className="h-5 w-40" />
        </div>
      </div>

      <div className="border p-4 space-y-4  mt-6">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-4 w-60 mt-4" />
        <Skeleton className="h-8 w-5/6" />
      </div>

      {/* Footer buttons */}
      <div className="flex justify-between pt-6">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-10 w-28" />
      </div>
    </div>
  );
}
