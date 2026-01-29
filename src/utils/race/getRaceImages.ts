import { raceImages } from "@/data/races/raceImages";

export const getRaceImages = (raceIndex: string): string => {
  return raceImages[raceIndex] || raceImages.default;
};
