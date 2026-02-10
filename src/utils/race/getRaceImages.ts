import { raceImages } from "@/data/races/raceImages";

export const getRaceImages = (raceIndex: string): string => {
  const index = raceIndex.toLowerCase();

  return raceImages[index] || raceImages.default;
};
