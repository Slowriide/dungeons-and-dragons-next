import { getMagicItems } from "./getMagicItems";

export const getMagicItemByIndex = async (magicItemIndex: string) => {
  try {
    const allMagicItems = await getMagicItems();

    const findedMagicItem = allMagicItems.find(
      (item) => item.index === magicItemIndex,
    );

    return {
      findedMagicItem,
    };
  } catch (error) {
    console.error("Error filtering magic items:", error);
    return { findedMagicItem: null };
  }
};
