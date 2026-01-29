import { MonsterCard } from "../../../../components/monsters/MonsterCard";
import { Pagination } from "../../../../components/Pagination";
import { DNDMonster } from "@/interface/monsters/DnDMonster";

interface Props {
  monsters: DNDMonster[];
  totalPages: number;
}

export const MonstersGrid = ({ monsters, totalPages }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-4 gap-2">
        {monsters.map((monster) => (
          <MonsterCard key={monster.name} monster={monster} />
        ))}
      </div>
      <Pagination totalPages={totalPages ?? 1} />
    </main>
  );
};
