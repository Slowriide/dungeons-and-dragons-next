import { getRacesDetails } from "@/actions/races/getRacesDetails";
import { RaceHeaderCard } from "@/components/races/RaceHeaderCard";
import { RaceSummary } from "@/components/races/RaceSummary";
import { SubraceSummary } from "@/components/races/SubraceSummary";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function RacePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return <p>Error</p>;
  }

  const races = await getRacesDetails({
    racesIndexes: [slug],
  });

  const race = races.race[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <RaceHeaderCard race={race} />
        <RaceSummary race={race} />
        {race.subraces && <SubraceSummary race={race} />}
      </div>
    </div>
  );
}
