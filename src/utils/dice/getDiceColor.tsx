import { DiceColorMap, DiceSides } from "@/interface/Die";

export const getDiceColor = (sides: DiceSides): string => {
  const colors: DiceColorMap = {
    4: "bg-red-500",
    6: "bg-blue-500",
    8: "bg-green-500",
    10: "bg-yellow-500",
    12: "bg-purple-500",
    20: "bg-pink-500",
    100: "bg-orange-500",
  };
  return colors[sides] || "bg-gray-500";
};
export const getDiceTextColor = (sides: DiceSides): string => {
  const colors: DiceColorMap = {
    4: "text-red-500",
    6: "text-blue-500",
    8: "text-green-500",
    10: "text-yellow-500",
    12: "text-purple-500",
    20: "text-pink-500",
    100: "text-orange-500",
  };
  return colors[sides] || "text-gray-500";
};
