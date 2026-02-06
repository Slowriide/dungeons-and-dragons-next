import { SideClassesFilters } from "@/components/classes/SideClassesFilters";
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

export const metadata: Metadata = {
  title: "Classes | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e classes. Filter by level, school, and more.",
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
          <aside>
            <SideClassesFilters />
          </aside>
          <article className="col-span-1 lg:col-span-3">
            <ClassesGridWrapper dndClasses={dndClasses} query={query} />
          </article>
        </section>
      </div>
    </main>
  );
}
