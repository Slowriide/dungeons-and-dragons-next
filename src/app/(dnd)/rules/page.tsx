import { SideRacesFilters } from "@/app/(dnd)/races/ui/SideRacesFilters";
import { geisCinzel } from "@/config/fonts";
import { NotebookTextIcon } from "lucide-react";
import { RulesGridWrapper } from "./ui/RulesGridWrapper";
import { Metadata } from "next";

interface Props {
  searchParams: Promise<{
    query: string;
  }>;
}

export const metadata: Metadata = {
  title: "Rules | D&D Mini Beyond",
  description:
    "Browse and search all D&D 5e rules. Filter by level, school, and more.",
  openGraph: {
    title: "D&D 5e Rules",
    description:
      "Complete rules list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/rules",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/rules.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Rules",
      },
    ],
    type: "website",
  },
  keywords: ["D&D rules", "5e rules", "rules"],
};

export default async function RulesPage({ searchParams }: Props) {
  const { query: queryString } = await searchParams;

  const query = queryString || "";

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <NotebookTextIcon className="size-12 lg:size-14 text-emerald-500" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
          >
            Rules
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside>
            <SideRacesFilters />
          </aside>
          <article className="col-span-1 lg:col-span-3">
            <RulesGridWrapper query={query} />
          </article>
        </section>
      </div>
    </main>
  );
}
