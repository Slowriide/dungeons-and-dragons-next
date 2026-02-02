import { getClasses } from "@/services/classes/getClasses";
import { notFound } from "next/navigation";
import { getClassesDetails } from "@/services/classes/getClassesDetails";
import { StepBasicWrapper } from "./ui/StepBasicWrapper";

interface Props {
  searchParams: {
    class?: string;
    level?: string;
  };
}

export default async function CreateCharacterPage({ searchParams }: Props) {
  const { class: classString, level: levelString } = await searchParams;
  const classesList = await getClasses();

  const selectedClass = classString ?? "";
  const level = Number(levelString ?? 1);

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
      <StepBasicWrapper
        dndClasses={dndClasses}
        selectedClass={selectedClass}
        selectedLevel={level}
      />
    </div>
  );
}
