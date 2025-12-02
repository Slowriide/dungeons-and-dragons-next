import { SpellCard } from "../../../../components/spells/SpellCard";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function SpellPage({ params }: Props) {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <SpellCard spellIndex={slug} />
      </div>
    </div>
  );
}
