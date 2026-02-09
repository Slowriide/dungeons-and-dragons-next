import { Header } from "@/components/home/Header";
import { SectionCardsGrid } from "@/components/home/SectionCardsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "D&D Mini Beyond | D&D 5e Spells, Classes, Monsters & Equipment",
  description:
    "D&D Mini Beyond is a modern Dungeons & Dragons 5e reference. Browse spells, monsters, classes, races and equipment in one elegant interface.",
  keywords: [
    "D&D 5e",
    "Dungeons and Dragons",
    "DnD spells",
    "DnD monsters",
    "DnD classes",
    "DnD equipment",
  ],
  openGraph: {
    title: "D&D Mini Beyond – D&D 5e Reference",
    description:
      "Browse D&D 5e spells, monsters, classes, races and equipment in a modern interface.",
    type: "website",
    siteName: "D&D Mini Beyond",
    url: "https://your-domain.com",
  },
};

export default function Home() {
  return (
    <main className="w-full">
      <Header />

      <SectionCardsGrid />
    </main>
  );
}
