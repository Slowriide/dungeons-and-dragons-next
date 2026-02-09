import { SideClassesFilters } from "@/app/(dnd)/classes/ui/SideClassesFilters";
import { geisCinzel } from "@/config/fonts";
import { getClasses } from "@/services/classes/getClasses";
import { getClassesDetails } from "@/services/classes/getClassesDetails";
import { BowArrowIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { ClassesGridWrapper } from "./ui/ClassesGridWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: {
    query?: string;
  };
}

/**
 * Static metadata for the Classes listing page.
 * This page targets broad SEO keywords like "D&D 5e classes"
 * and does not depend on filters or query params.
 */
export const metadata: Metadata = {
  title: "Classes | D&D Mini Beyond",
  description:
    "Browse and explore all D&D 5e character classes and their core features.",
  openGraph: {
    title: "D&D 5e Classes",
    description:
      "Complete classes list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/classes",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/classes.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Classes",
      },
    ],
    type: "website",
  },
  keywords: ["D&D classes", "5e classes", "classes"],
};

export default async function ClassesPage({ searchParams }: Props) {
  const { query: queryString } = searchParams;
  const query = queryString || "";

  /**
   * Fetch the base list of available classes.
   * This endpoint only returns indexes and basic references.
   */
  const classesList = await getClasses();

  if (!classesList) {
    notFound();
  }

  /**
   * Extract class indexes to request full class details
   * in a single batched request.
   */
  const classIndexes = classesList.results.map((c) => c.index);

  /**
   * Fetch full class data (hit dice, proficiencies, features, etc).
   */
  const { dndClasses } = await getClassesDetails({ classIndexes });

  if (!dndClasses) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <BowArrowIcon className="size-12 lg:size-14 text-gray-500" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Classes
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside aria-label="Class filters">
            <SideClassesFilters />
          </aside>
          <article
            aria-labelledby="classes-results"
            className="col-span-1 lg:col-span-3"
          >
            <ClassesGridWrapper dndClasses={dndClasses} query={query} />
          </article>
        </section>
      </div>
    </main>
  );
}
