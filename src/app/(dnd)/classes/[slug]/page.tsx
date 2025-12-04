import { getClassesDetails } from "@/actions/classes/getClassesDetails";
import { ClassHeader } from "@/components/classes/ClassHeader";
import { ClassSummary } from "@/components/classes/ClassSummary";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function RacePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return <p>Error</p>;
  }

  const classes = await getClassesDetails({
    classIndexes: [slug],
  });

  const classItem = classes.dndClass[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <ClassHeader classItem={classItem} />
        <ClassSummary classItem={classItem} />
      </div>
    </div>
  );
}
