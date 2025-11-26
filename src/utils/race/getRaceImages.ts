import { raceImages } from "@/data/raceImages";

export const getRaceImages = (raceIndex: string): string => {
  return raceImages[raceIndex] || raceImages.default;
};
