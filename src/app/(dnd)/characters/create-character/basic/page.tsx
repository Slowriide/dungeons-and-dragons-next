import { getClasses } from "@/services/classes/getClasses";
import { notFound } from "next/navigation";
import { getClassesDetails } from "@/services/classes/getClassesDetails";
import { StepBasicWrapper } from "./ui/StepBasicWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: {
    class?: string;
    level?: string;
  };
}

export const metadata: Metadata = {
  title: "Basic info | Create Character – D&D Mini Beyond",
  description: "Select your character’s class and name for D&D 5e.",
};

export default async function CreateCharacterPage({ searchParams }: Props) {
  /**
   * Read class and level from the URL.
   * These values are used to hydrate the StepBasic form.
   */
  const { class: classString, level: levelString } = searchParams;

  const classesList = await getClasses();

  const selectedClass = classString ?? "";
  const level = Number(levelString ?? 1);

  if (!classesList) {
    notFound();
  }

  const classIndexes = classesList.results.map((c) => c.index);

  /**
   * Fetch detailed class data (proficiencies, equipment, features, etc).
   */
  const { dndClasses } = await getClassesDetails({ classIndexes });

  if (!dndClasses) {
    notFound();
  }

  /**
   * Render the Basic Step wrapper.
   * This component is responsible for form logic and state management.
   */
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
