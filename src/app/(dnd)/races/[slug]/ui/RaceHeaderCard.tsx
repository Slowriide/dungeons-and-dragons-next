"use client";
import { DNDRace } from "@/interface/races/DNDRace";
import { Badge } from "../../../../../components/ui/badge";
import { raceDescription } from "../../../../../data/races/raceDescription";
import { RaceAnimatedImage } from "./RaceAnimatedImage";

interface Props {
  race: DNDRace;
}

/**
 * RaceHeaderCard
 *
 * Hero section for a D&D 5e race detail page.
 * Responsibilities:
 * - Display the race name (H1)
 * - Show a representative image
 * - Provide a short lore/description
 * - Highlight core stats (speed, size, lifespan)
 * - List ability score bonuses
 */
export const RaceHeaderCard = ({ race }: Props) => {
  return (
    <div className="mb-8 lg:mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
      {/* Image */}
      <RaceAnimatedImage race={race} />

      {/* Info */}
      <section className="flex flex-col justify-center">
        <h1 className="mb-4 font-serif text-5xl font-bold text-balance">
          {race.name}
        </h1>

        {/* Short description / lore */}
        <p className="mb-8 text-xl leading-relaxed text-foreground/80">
          {raceDescription[`${race.index}`]}
        </p>

        {/* Core race attributes */}
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

        {/* Ability score bonuses */}
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
