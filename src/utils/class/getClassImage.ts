import { classImages } from "@/data/classes/classImages";

export const geClassImages = (classIndex: string): string => {
  return classImages[classIndex] || classImages.default;
};
