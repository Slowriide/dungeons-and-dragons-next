import { notFound } from "next/navigation";
import { SpellCard } from "../../../../components/spells/SpellCard";
import { getSpell } from "@/services/spells/getSpellsDetails";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <SpellCard spell={spell} />
      </div>
    </div>
  );
}
