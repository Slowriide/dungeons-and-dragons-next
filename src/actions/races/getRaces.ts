import { dndFetch } from "@/api/DndApi";
import {
  DNDRacesList,
  DNDRacesListResponse,
} from "@/interface/races/RacesList";

export const getRaces = async (): Promise<DNDRacesListResponse> => {
  const data = await dndFetch.get<DNDRacesListResponse>("/races");
  console.log(data);

  return data;
};
