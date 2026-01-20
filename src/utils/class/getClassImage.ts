import { classImages } from "@/data/classImages";

export const geClassImages = (classIndex: string): string => {
  return classImages[classIndex] || classImages.default;
};
