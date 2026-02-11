// services/monsters/getMonsters.ts
import { DNDMonster } from "@/interface/monsters/DnDMonster";

// Try cache first
let monstersCache: DNDMonster[] | null = null;

try {
  monstersCache = require("@/data/monsters/monsters-cache.json");
} catch {
  // no cache then api
  monstersCache = null;
}

interface Options {
  challenge_rating?: string[];
}

export const getMonsters = async ({
  challenge_rating = [],
}: Options): Promise<DNDMonster[]> => {
  // use cache if exist
  if (monstersCache) {
    return monstersCache;
  }

  // Fallback a API if no cache
  const { dndFetch } = await import("@/api/DndApi");
  const data = await dndFetch.get<{ results: DNDMonster[] }>("/monsters", {
    params: { challenge_rating },
  });

  return data.results;
};
