import { dndFetch } from "@/api/DndApi";
import { DNDMonstersListResponse } from "@/interface/monsters/MonstersList";

interface Options {
  challenge_rating?: string[];
}

export const getMonsters = async ({
  challenge_rating = [],
}: Options): Promise<DNDMonstersListResponse> => {
  const data = await dndFetch.get<DNDMonstersListResponse>("/monsters", {
    params: {
      challenge_rating: challenge_rating,
    },
  });

  return data;
};
