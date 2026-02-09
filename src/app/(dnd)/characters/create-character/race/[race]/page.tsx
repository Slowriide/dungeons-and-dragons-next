import { Metadata } from "next";
import { RaceManageDetails } from "../ui/RaceManageDetails";

interface Props {
  params: Promise<{
    race?: string;
  }>;
}
export const metadata: Metadata = {
  title: "Race Creator | Create Character – D&D Mini Beyond",
  description: "Select your character’s race and racial traits for D&D 5e.",
};
/**
 * ManageCharacterRace Page
 *
 * Server component responsible for:
 * - Reading the dynamic race segment from the URL
 * - Passing the race index to the client-side RaceManageDetails component
 *
 * This page acts as a thin routing layer and intentionally
 * contains no business logic.
 */
export default async function ManageCharacterRace({ params }: Props) {
  const { race: raceString } = await params;
  const race = raceString ?? "";

  return (
    <div className="min-h-screen bg-background">
      <RaceManageDetails raceIndex={race} />
    </div>
  );
}
