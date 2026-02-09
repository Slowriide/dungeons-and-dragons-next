import { Card } from "../../../../../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { DNDRace } from "@/interface/races/DNDRace";
import { getRaceImages } from "@/utils/race/getRaceImages";

interface Props {
  race: DNDRace;
}

/**
 * MiniRacesCard
 *
 * Displays a compact, clickable card representing a D&D race
 * during the character creation flow.
 *
 * The card links directly to the race detail/selection step.
 * Optimized for grid usage and fast visual scanning.
 */
export const MiniRacesCard = ({ race }: Props) => {
  const img = getRaceImages(race.index);

  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <Link href={`/characters/create-character/race/${race.index}`}>
        {/* Image */}
        <div className="relative w-full aspect-3/3 overflow-hidden ">
          <Image
            src={img}
            alt={"Monster"}
            fill
            sizes="400"
            className="absolute inset-0 object-fill rounded-t-md z-0"
            loading="eager"
          />
        </div>
      </Link>

      {/* Race name */}
      <div className="text-center font-medium">{race.name}</div>
    </Card>
  );
};
