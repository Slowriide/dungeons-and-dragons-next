import { SideClassesFilters } from "@/components/classes/SideClassesFilters";
import { geisCinzel } from "@/config/fonts";
import { getClasses } from "@/services/classes/getClasses";
import { getClassesDetails } from "@/services/classes/getClassesDetails";
import { BowArrowIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { ClassesGridWrapper } from "./ui/ClassesGridWrapper";

interface Props {
  searchParams: {
    query?: string;
  };
}

export default async function ClassesPage({ searchParams }: Props) {
  const { query: queryString } = await searchParams;

  const classesList = await getClasses();

  const query = queryString || "";

  if (!classesList) {
    notFound();
  }

  const classIndexes = classesList.results.map((c) => c.index);

  const { dndClasses } = await getClassesDetails({ classIndexes });

  if (!dndClasses) {
    notFound();
  }

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

          <ClassesGridWrapper dndClasses={dndClasses} query={query} />
        </div>
      </div>
    </div>
  );
}
