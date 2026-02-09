import { Card } from "../../../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { DNDRace } from "@/interface/races/DNDRace";
import { getRaceImages } from "@/utils/race/getRaceImages";

interface Props {
  race: DNDRace;
}

/**
 * RacesCard
 *
 * Displays a summarized view of a races for the grid.
 * Clicking the card sets it as the selected item.
 */
export const RacesCard = ({ race }: Props) => {
  const img = getRaceImages(race.index);

  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <Link
        href={`/races/${race.index}`}
        aria-label={`View details for ${race.name} race`}
      >
        {/* Image */}
        <div className="relative w-full aspect-3/3 overflow-hidden ">
          <Image
            src={img}
            alt={"Monster"}
            fill
            sizes="400"
            className="absolute inset-0 object-fill rounded-md z-0"
            loading="eager"
          />

          {/* Overlay content */}
          <div className="absolute bottom-5 left-2  z-20 w-40 bg-white/50 p-4 rounded-sm">
            <h2 className="text-xl font-bold drop-shadow border-b border-b-pink-600 ">
              {race.name}
            </h2>
            <p className="text-sm opacity-90">{race.alignment.split(".", 1)}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
