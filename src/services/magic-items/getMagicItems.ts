import magicItems from "@/data/magic-items/magic-items-cache.json";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

export const getMagicItems = async (): Promise<DNDMagicItem[]> => {
  return magicItems;
};
