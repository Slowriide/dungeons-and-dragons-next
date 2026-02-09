import { RaceHeaderCard } from "@/app/(dnd)/races/[slug]/ui/RaceHeaderCard";

import { notFound } from "next/navigation";
import { getRaceByIndex } from "@/services/races/getRaceByIndex";
import { Metadata } from "next";
import { raceDescription } from "../../../../data/races/raceDescription";
import { getRaceImages } from "@/utils/race/getRaceImages";
import { RaceSummary } from "./ui/RaceSummary";
import { SubraceSummary } from "./ui/SubraceSummary";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

/**
 * Generates dynamic metadata for the race page
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    return {
      title: "Race not found | D&D Mini Beyond",
    };
  }

  const race = await getRaceByIndex(slug);

  if (!race) {
    return {
      title: "Race not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${race.name} | D&D Mini Beyond`,
    description:
      raceDescription[`${race.index}`] ??
      `Detailed information about the D&D 5e race ${race.name}.`,
    openGraph: {
      title: `${race.name} – D&D 5e Race`,
      description: raceDescription[`${race.index}`],
      type: "article",
      images: [
        {
          url: getRaceImages(race.index) ?? "Race image placeholder",
          width: 1200,
          height: 630,
          alt: race.name,
        },
      ],
    },
  };
}

/**
 * Race detail page.
 *
 * Structure:
 * - Header (name + visual identity)
 * - Core race features
 * - Subraces (if available)
 */
export default async function RacePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const race = await getRaceByIndex(slug);

  if (!race) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <RaceHeaderCard race={race} />
        <RaceSummary race={race} />
        {race.subraces && <SubraceSummary race={race} />}
      </div>
    </div>
  );
}
