import { getMonsters } from "@/services/monsters/getMonsters";
import { MonstersGrid } from "./MonstersGrid";
import { getMonstersDetails } from "@/services/monsters/getMonstersDetails";

interface Props {
  page: number;
  query: string;
  challenge_rating: string[];
  alignment: string[];
}

export default async function MonstersGridWrapper({
  page,
  query,
  challenge_rating,
  alignment,
}: Props) {
  const { results } = await getMonsters({
    challenge_rating: challenge_rating,
  });

  const monstersIndexes = results?.map((monster) => monster.index) || [];

  const { monsters, totalPages } = await getMonstersDetails({
    monstersIndexes: monstersIndexes,
    alignments: alignment,
    page: page,
    query: query,
  });

  return <MonstersGrid monsters={monsters} totalPages={totalPages} />;
}
