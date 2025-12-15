import { RaceManageDetails } from "../../../ui/race/RaceManageDetails";

interface Props {
  params: Promise<{
    race?: string;
  }>;
}

export default async function ManageCharacterRace({ params }: Props) {
  const { race: raceString } = await params;
  const race = raceString ?? "";

  return (
    <div className="min-h-screen bg-background">
      <RaceManageDetails raceIndex={race} />
    </div>
  );
}
