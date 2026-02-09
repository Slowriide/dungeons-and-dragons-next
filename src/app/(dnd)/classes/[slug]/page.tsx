import { ClassHeader } from "@/app/(dnd)/classes/[slug]/ui/ClassHeader";
import { ClassSummary } from "@/app/(dnd)/classes/[slug]/ui/ClassSummary";
import { notFound } from "next/navigation";
import { getClassByIndex } from "@/services/classes/getClassByIndex";
import { geClassImages } from "@/utils/class/getClassImage";
import { Metadata } from "next";
import { classDescription } from "@/data/classes/classDescriptionñ";

interface Props {
  /**
   * Dynamic route parameters provided by Next.js App Router.
   * `slug` represents the class index (e.g. "wizard", "fighter").
   */
  params: Promise<{
    slug?: string;
  }>;
}

/**
 * Generates dynamic metadata for each D&D class page.
 * This runs on the server and is used for SEO and social sharing.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    return {
      title: "Class not found | D&D Mini Beyond",
    };
  }

  const classItem = await getClassByIndex(slug);

  if (!classItem) {
    return {
      title: "Class not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${classItem.name} | D&D Mini Beyond`,
    description:
      classDescription[classItem.index] ??
      `Detailed information about the D&D 5e class ${classItem.name}.`,
    openGraph: {
      title: `${classItem.name} – D&D 5e Class`,
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

/**
 * Class detail page.
 * Displays the main header and summary sections for a given class.
 */
export default async function RacePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  /**
   * Fetch full class data from the API.
   */
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
