import { notFound } from "next/navigation";
import { SpellCard } from "../../../../components/spells/SpellCard";
import { getSpell } from "@/services/spells/getSpellsDetails";
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
      title: "Spell not found | D&D Mini Beyond",
    };
  }

  const spell = await getSpell(slug);

  if (!spell) {
    return {
      title: "Spell not found | D&D Mini Beyond",
    };
  }

  const levelLabel = spell.level === 0 ? "Cantrip" : `Level ${spell.level}`;

  return {
    title: `${spell.name} (${levelLabel}) | D&D Mini Beyond`,
    description:
      spell.desc?.[0] ??
      `Detailed information about the D&D 5e spell ${spell.name}.`,
    openGraph: {
      title: `${spell.name} – D&D 5e Spell`,
      description: spell.desc?.[0],
      type: "article",
      images: [
        {
          url: "/og/spells/fireball.png",
          width: 1200,
          height: 630,
          alt: spell.name,
        },
      ],
    },
  };
}

export default async function SpellPage({ params }: Props) {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    notFound();
  }
  const spell = await getSpell(slug);

  if (!spell) {
    notFound();
  }
  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-7xl space-y-10">
        <SpellCard spell={spell} />
      </article>
    </main>
  );
}
