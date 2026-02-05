"use server";

import { dndFetch } from "@/api/DndApi";
import { getClasses } from "@/services/classes/getClasses";
import { getEquipment } from "@/services/equipment/getEquipment";
import { getMagicItems } from "@/services/magic-items/getMagicItems";
import { getMonsters } from "@/services/monsters/getMonsters";
import { getRaces } from "@/services/races/getRaces";
import { getRules } from "@/services/rules/getRules";
import { getSpells } from "@/services/spells/getSpells";
import { getSpellsList } from "@/services/spells/getSpellsList";

interface SearchResult {
  type:
    | "class"
    | "race"
    | "monster"
    | "equipment"
    | "rule"
    | "magic-item"
    | "spell";
  index: string;
  name: string;
  url: string;
  description?: string;
}

export async function globalSearch(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) {
    return [];
  }

  const baseUrl = "https://www.dnd5eapi.co/api";
  const results: SearchResult[] = [];

  try {
    const [classes, races, monsters, equipment, rules, magicItems, spells] =
      await Promise.all([
        getClasses(),
        getRaces(),
        getMonsters({}),
        getEquipment(),
        getRules(),
        getMagicItems(),
        getSpells(),
      ]);

    const queryLower = query.toLowerCase();

    classes.results
      .filter((item) => item.name.toLowerCase().includes(queryLower))
      .forEach((item) => {
        results.push({
          type: "class",
          index: item.index,
          name: item.name,
          url: `/classes/${item.index}`,
        });
      });

    races.results
      .filter((item) => item.name.toLowerCase().includes(queryLower))
      .forEach((item) => {
        results.push({
          type: "race",
          index: item.index,
          name: item.name,
          url: `/races/${item.index}`,
        });
      });

    monsters.results
      .filter((item) => item.name.toLowerCase().includes(queryLower))
      .forEach((item) => {
        results.push({
          type: "monster",
          index: item.index,
          name: item.name,
          url: `/monsters/${item.index}`,
        });
      });

    equipment
      ?.filter((item: any) => item.name.toLowerCase().includes(queryLower))
      .forEach((item: any) => {
        results.push({
          type: "equipment",
          index: item.index,
          name: item.name,
          url: `/equipment/${item.index}`,
        });
      });

    rules.results
      ?.filter((item: any) => item.name.toLowerCase().includes(queryLower))
      .forEach((item: any) => {
        results.push({
          type: "rule",
          index: item.index,
          name: item.name,
          url: `/rules/${item.index}`,
        });
      });

    magicItems
      ?.filter((item: any) => item.name.toLowerCase().includes(queryLower))
      .forEach((item: any) => {
        results.push({
          type: "magic-item",
          index: item.index,
          name: item.name,
          url: `/magic-items/${item.index}`,
        });
      });

    spells.results
      ?.filter((item: any) => item.name.toLowerCase().includes(queryLower))
      .slice(0, 10) // Limitar hechizos (son muchos)
      .forEach((item: any) => {
        results.push({
          type: "spell",
          index: item.index,
          name: item.name,
          url: `/spells/${item.index}`,
        });
      });

    return results;
  } catch (error) {
    console.error("Error in global search:", error);
    return [];
  }
}
