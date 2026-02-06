import { getMonstersDetails } from "@/services/monsters/getMonstersDetails";
import { MonsterHeader } from "@/components/monsters/MonsterHeader";
import { MonsterSummary } from "@/components/monsters/MonsterSummary";
import { notFound } from "next/navigation";
import { getMonsterByIndex } from "@/services/monsters/getMonstersByIndex";
import { Metadata } from "next";
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
    description:
      monster.alignment ??
      `Detailed information about the D&D 5e monsters ${monster.name}.`,
    openGraph: {
      title: `${monster.name} – D&D 5e Monsters`,
      description:
        monster.alignment ??
        `Detailed information about the D&D 5e monsters ${monster.name}.`,
      type: "article",
      images: [
        {
          url: monster.image ?? "Class image placeholder",
          width: 1200,
          height: 630,
          alt: monster.name,
        },
      ],
    },
  };
}
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
