import { getMonsters } from "@/services/monsters/getMonsters";
import { MonstersGrid } from "./MonstersGrid";
import { getMonstersDetails } from "@/services/monsters/getMonstersDetails";

interface Props {
  page: number;
  query: string;
  challenge_rating: string[];
  alignment: string[];
}

/**
 * MonstersGridWrapper
 *
 * Server component that fetches paginated magic items and passes
 * them to the client-side MonstersGrid component.
 */
export default async function MonstersGridWrapper({
  page,
  query,
  challenge_rating,
  alignment,
}: Props) {
  const { monsters, totalPages } = await getMonstersDetails({
    alignments: alignment,
    challenge_rating: challenge_rating,
    page: page,
    query: query,
  });

  return <MonstersGrid monsters={monsters} totalPages={totalPages} />;
}
