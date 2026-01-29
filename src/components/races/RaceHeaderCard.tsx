import { DNDRace } from "@/interface/races/DNDRace";
import { getRaceImages } from "@/utils/race/getRaceImages";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { raceDescription } from "../../data/races/raceDescription";

interface Props {
  race: DNDRace;
}
export const RaceHeaderCard = ({ race }: Props) => {
  const img = getRaceImages(race.index);
  return (
    <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
      <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={race.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover fill h-mas w-max"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="mb-4 font-serif text-5xl font-bold text-balance">
          {race.name}
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-foreground/80">
          {raceDescription[`${race.index}`]}
        </p>

        <div className="mb-6 flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-6">
          <div>
            <div className="text-sm text-muted-foreground">Speed</div>
            <div className="font-medium text-lg">{race.speed} ft.</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Size</div>
            <div className="font-medium text-lg">{race.size}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Lifespan</div>
            <div className="font-medium text-lg">{race.age}</div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-serif text-sm uppercase tracking-wide text-muted-foreground">
            Ability Score Increase
          </h3>
          <div className="flex flex-wrap gap-3">
            {race.ability_bonuses.map((bonus, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="text-base px-4 py-2"
              >
                {bonus.ability_score.name} +{bonus.bonus}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
