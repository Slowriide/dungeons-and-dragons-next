import { DNDMagicItem } from "../interface/magicItems/DnDMagicItems";

export const getMagicItemRarityColor = (maigcItem: DNDMagicItem) => {
  switch (maigcItem.rarity.name.toLowerCase()) {
    case "uncommon":
      return "bg-green-500/20 text-green-700 border-green-500 h-5 font-bold";

    case "rare":
      return "bg-red-500/20 text-red-700 border-red-500 h-5 font-bold";

    case "very rare":
      return "bg-fuchsia-500/20 text-fuchsia-700 border-fuchsia-500 h-5 font-bold";

    case "legendary":
      return "bg-yellow-500/20 text-yellow-700 border-yellow-500 h-5 font-bold";

    default:
      return "bg-blue-500/20 text-blue-700 border-blue-500 h-5 font-bold";
  }
};
