import { ClassHeader } from "@/components/classes/ClassHeader";
import { ClassSummary } from "@/components/classes/ClassSummary";
import { notFound } from "next/navigation";
import { getClassByIndex } from "@/services/classes/getClassByIndex";
import { geClassImages } from "@/utils/class/getClassImage";
import { Metadata } from "next";
import { classDescription } from "@/data/classes/classDescriptionñ";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    return {
      title: "Race not found | D&D Mini Beyond",
    };
  }

  const classItem = await getClassByIndex(slug);

  if (!classItem) {
    return {
      title: "Race not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${classItem.name} | D&D Mini Beyond`,
    description:
      classDescription[classItem.index] ??
      `Detailed information about the D&D 5e race ${classItem.name}.`,
    openGraph: {
      title: `${classItem.name} – D&D 5e Race`,
      description: classDescription[classItem.index],
      type: "article",
      images: [
        {
          url: geClassImages(classItem.index) ?? "Class image placeholder",
          width: 1200,
          height: 630,
          alt: classItem.name,
        },
      ],
    },
  };
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
  await new Promise((r) => setTimeout(r, 2000));
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <ClassHeader classItem={classItem} />
        <ClassSummary classItem={classItem} />
      </div>
    </div>
  );
}
