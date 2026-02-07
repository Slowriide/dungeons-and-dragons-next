import { DNDRace } from "@/interface/races/DNDRace";
import { getRaceImages } from "@/utils/race/getRaceImages";
import Image from "next/image";
import { Badge } from "../../../../../components/ui/badge";
import { raceDescription } from "../../../../../data/races/raceDescription";

interface Props {
  race: DNDRace;
}
export const RaceHeaderCard = ({ race }: Props) => {
  const img = getRaceImages(race.index);
  return (
    <div className="mb-8 lg:mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
      {/* Image */}
      <section className="relative aspect-4/5 w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={`${race.name} race illustration for Dungeons & Dragons 5e`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover fill h-mas w-max"
          priority
        />
      </section>

      {/* Info */}
      <section className="flex flex-col justify-center">
        <h1 className="mb-4 font-serif text-5xl font-bold text-balance">
          {race.name}
        </h1>
        <p className="mb-8 text-xl leading-relaxed text-foreground/80">
          {raceDescription[`${race.index}`]}
        </p>

        <dl className="mb-6 flex flex-wrap gap-x-8 gap-y-4 border-y border-border py-6">
          <div>
            <dt className="text-sm text-muted-foreground">Speed</dt>
            <dd className="font-medium text-lg">{race.speed} ft.</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Size</dt>
            <dd className="font-medium text-lg">{race.size}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted-foreground">Lifespan</dt>
            <dd className="font-medium text-lg">{race.age}</dd>
          </div>
        </dl>

        <div>
          <h2 className="mb-3 font-serif text-sm uppercase tracking-wide text-muted-foreground">
            Ability Score Increase
          </h2>
          <ul className="flex flex-wrap gap-3">
            {race.ability_bonuses.map((bonus, idx) => (
              <li key={idx}>
                <Badge variant="secondary" className="text-base px-4 py-2">
                  {bonus.ability_score.name} +{bonus.bonus}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
