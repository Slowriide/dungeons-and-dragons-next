import { dndFetch } from "@/api/DndApi";
import { DNDClassesListResponse } from "@/interface/classes/ClassesList";

export const getClasses = async (): Promise<DNDClassesListResponse> => {
  const data = dndFetch.get<DNDClassesListResponse>("/classes");

  return data;
};
