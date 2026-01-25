import { dndFetch } from "@/api/DndApi";

interface SpellListItem {
  index: string;
  name: string;
  level: number;
  school: { index: string; name: string };
  url: string;
}

interface Options {
  page?: number;
  take?: number;
  levels?: string[];
  schools?: string[];
  query?: string;
}

export const getSpellsList = async ({
  page = 1,
  take = 12,
  levels = [],
  schools = [],
  query = "",
}: Options) => {
  try {
    const params = new URLSearchParams();
    if (levels.length > 0) {
      levels.forEach((level) => params.append("level", level));
    }
    if (schools.length > 0) {
      schools.forEach((school) => params.append("school", school));
    }

    const endpoint = `/spells${params.toString() ? `?${params.toString()}` : ""}`;
    const data = await dndFetch.get<{ results: SpellListItem[] }>(endpoint);

    let results = data.results;

    if (query) {
      const queryLower = query.toLowerCase();
      results = results.filter(
        (spell) =>
          spell.index.toLowerCase().includes(queryLower) ||
          spell.name.toLowerCase().includes(queryLower),
      );
    }

    // Calcular paginación
    const count = results.length;
    const totalPages = Math.ceil(count / take);
    const startIndex = (page - 1) * take;
    const endIndex = startIndex + take;
    const paginatedResults = results.slice(startIndex, endIndex);

    return {
      results: paginatedResults,
      totalPages,
      totalCount: count,
    };
  } catch (error) {
    console.error("Error fetching spells list:", error);
    return {
      results: [],
      totalPages: 0,
      totalCount: 0,
    };
  }
};
