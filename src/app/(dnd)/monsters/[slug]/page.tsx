import { MonsterHeader } from "./ui/MonsterHeader";
import { MonsterSummary } from "@/app/(dnd)/monsters/[slug]/ui/MonsterSummary";
import { notFound } from "next/navigation";
import { getMonsterByIndex } from "@/services/monsters/getMonstersByIndex";
import { Metadata } from "next";
interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

/**
 * Dynamic metadata for monster detail pages
 *
 * SEO goals:
 * - Unique title per monster
 * - Descriptive meta description using monster data
 * - OpenGraph support for social sharing
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    return {
      title: "Monsters not found | D&D Mini Beyond",
    };
  }

  const monster = await getMonsterByIndex(slug);

  if (!monster) {
    return {
      title: "Monsters not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${monster.name} | D&D Mini Beyond`,
    description: `Complete D&D 5e stat block and lore for ${monster.name}.`,
    openGraph: {
      title: `${monster.name} – D&D 5e Monsters`,
      description:
        monster.alignment ??
        `Detailed information about the D&D 5e monsters ${monster.name}.`,
      type: "article",
      images: [
        {
          url: monster.image ?? "/og/monsters.jpg",
          width: 1200,
          height: 630,
          alt: monster.name,
        },
      ],
    },
  };
}

/**
 * Monster detail page
 *
 * Displays full information for a single D&D 5e monster.
 */
export default async function MonterPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }
  const monster = await getMonsterByIndex(slug);

  if (!monster) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <MonsterHeader monster={monster} />
        <MonsterSummary monster={monster} />
      </div>
    </div>
  );
}
