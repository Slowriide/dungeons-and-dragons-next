import { ClassesGrid } from "@/components/classes/ClassesGrid";
import { SideClassesFilters } from "@/components/classes/SideClassesFilters";
import { geisCinzel } from "@/config/fonts";
import { BowArrowIcon } from "lucide-react";

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center">
          <BowArrowIcon className="size-14 text-gray-500" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Classes
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <SideClassesFilters />
          <ClassesGrid />
        </div>
      </div>
    </div>
  );
}
