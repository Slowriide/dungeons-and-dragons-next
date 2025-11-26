import { classDescriptions } from "./classDescriptions";
import { classLogos } from "./classLogos";

export const getClassInfo = (index: string) => {
  const logo = classLogos[index] || "/placeholder.svg";
  const description = classDescriptions[index] || "No description available.";

  return { description, logo };
};
