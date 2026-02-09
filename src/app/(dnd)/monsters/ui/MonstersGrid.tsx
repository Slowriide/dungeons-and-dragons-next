import { MonsterCard } from "./MonsterCard";
import { Pagination } from "../../../../components/Pagination";
import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Props {
  monsters: DNDMonster[];
  totalPages: number;
}

/**
 * MonstersGrid
 *
 * Responsibilities:
 * - Render a responsive grid of Monster cards
 * - Display pagination controls when multiple pages exist
 *
 * This component is fully server-rendered via its parent,
 * making it SEO-friendly and crawlable.
 */
export const MonstersGrid = ({ monsters, totalPages }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4">
      {/* Monsters list */}
      <div className="grid lg:grid-cols-4 gap-4">
        {monsters.map((monster) => (
          <MonsterCard key={monster.name} monster={monster} />
        ))}
      </div>
      <Pagination totalPages={totalPages ?? 1} />
    </main>
  );
};
