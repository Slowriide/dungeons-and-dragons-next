import { getClassesDetails } from "@/services/classes/getClassesDetails";
import { ClassHeader } from "@/components/classes/ClassHeader";
import { ClassSummary } from "@/components/classes/ClassSummary";
import { notFound } from "next/navigation";
import { getClassByIndex } from "@/services/classes/getClassByIndex";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function RacePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const classItem = await getClassByIndex(slug);

  if (!classItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <ClassHeader classItem={classItem} />
        <ClassSummary classItem={classItem} />
      </div>
    </div>
  );
}
