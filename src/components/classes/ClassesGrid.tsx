"use client";

import { ClassesCard } from "./ClassesCard";
import { useClassesList } from "@/hooks/classes/useClassesList";
import { useClassesDetails } from "@/hooks/classes/useClassesDetails";

export const ClassesGrid = () => {
  const { data: classesList, isLoading: loadingList } = useClassesList();

  const classIndexes =
    classesList?.results?.map((dndClass) => dndClass.index) || [];

  const { data, isLoading, isError } = useClassesDetails({
    classIndexes,
  });

  console.log(data);

  if (isLoading || !data) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-3 gap-2">
        {data.dndClass.map((dndClass) => (
          <ClassesCard key={dndClass.name} dndClass={dndClass} />
        ))}
      </div>
    </main>
  );
};
