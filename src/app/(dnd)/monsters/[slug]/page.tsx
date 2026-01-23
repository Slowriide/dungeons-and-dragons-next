import { getMonstersDetails } from "@/services/monsters/getMonstersDetails";
import { MonsterHeader } from "@/components/monsters/MonsterHeader";
import { MonsterSummary } from "@/components/monsters/MonsterSummary";
interface Props {
  params: Promise<{
    slug?: string;
  }>;
}
export default async function MonterPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return <p>Error</p>;
  }

  const monsterR = await getMonstersDetails({
    monstersIndexes: [slug],
  });

  const monster = monsterR.monsters[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <MonsterHeader monster={monster} />
        <MonsterSummary monster={monster} />
      </div>
    </div>
  );
}
