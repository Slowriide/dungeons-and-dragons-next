import { getRaces } from "@/services/races/getRaces";
import { getRacesDetails } from "@/services/races/getRacesDetails";
import { RacesGrid } from "./RacesGrid";

interface Props {
  query: string;
}

export const RacesGridWrapper = async ({ query }: Props) => {
  const { results } = await getRaces();

  const racesIndexes = results.map((race) => race.index);

  const { races } = await getRacesDetails({
    racesIndexes: racesIndexes,
    query: query,
  });

  return <RacesGrid races={races} />;
};
