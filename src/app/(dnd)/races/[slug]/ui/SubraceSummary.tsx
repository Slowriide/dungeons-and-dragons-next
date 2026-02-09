import { DNDRace } from "@/interface/races/DNDRace";
import { Badge } from "@/components/ui/badge";
import { getSubacesDetails } from "@/services/races/getSubraceDetails";

interface Props {
  race: DNDRace;
}

/**
 * SubraceSummary
 *
 * Displays detailed information about all subraces of a given D&D 5e race.
 * Responsibilities:
 * - Fetch full subrace details by index
 * - Render lore description
 * - Show ability score bonuses
 * - List racial traits specific to each subrace
 */
export const SubraceSummary = async ({ race }: Props) => {
  const subracesIndexes = race.subraces.map((subrace) => subrace.index);

  const { subraces } = await getSubacesDetails({ subracesIndexes });

  return (
    <div>
      {/* Subrace name & description */}
      {subraces.map((subrace) => (
        <div className="space-y-8 mb-10" key={subrace.index}>
          <section>
            <h2 className="mb-4 font-serif text-4xl font-bold text-balance">
              {subrace.name}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-foreground/80">
              {subrace.desc}
            </p>
          </section>

          {/* Ability Bonuses */}
          <section>
            <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
              Ability Bonuses
            </h2>
            <div className="mb-3 flex flex-wrap gap-2">
              {subrace.ability_bonuses.map((bonus) => (
                <Badge
                  key={bonus.ability_score.index}
                  variant="secondary"
                  className="text-base px-4 py-2"
                >
                  {bonus.ability_score.name} +{bonus.bonus}
                </Badge>
              ))}
            </div>
          </section>

          {/* Racial Traits */}
          <section>
            {subrace.racial_traits.length > 0 && (
              <section>
                <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
                  Racial Traits
                </h2>
                <div className="flex flex-wrap gap-2">
                  {subrace.racial_traits.map((trait) => (
                    <Badge key={trait.index} className="bg-red-600  text-sm">
                      {trait.name}
                    </Badge>
                  ))}
                </div>
              </section>
            )}
          </section>
        </div>
      ))}
    </div>
  );
};
