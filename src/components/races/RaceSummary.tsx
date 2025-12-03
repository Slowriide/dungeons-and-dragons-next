import { DNDRace } from "@/interface/races/DNDRace";
import { Badge } from "../ui/badge";

interface Props {
  race: DNDRace;
}
export const RaceSummary = ({ race }: Props) => {
  return (
    <div className="space-y-8 mb-10">
      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
          Alignment
        </h2>
        <p className="leading-relaxed text-foreground/90 text-lg">
          {race.alignment}
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
            Age
          </h2>
          <p className="leading-relaxed text-foreground/90">{race.age}</p>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
            Size
          </h2>
          <p className="leading-relaxed text-foreground/90">
            {race.size_description}
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
          Languages
        </h2>
        <div className="mb-3 flex flex-wrap gap-2">
          {race.languages.map((lang) => (
            <Badge key={lang.index} variant="outline" className="text-sm">
              {lang.name}
            </Badge>
          ))}
        </div>
        <p className="leading-relaxed text-muted-foreground">
          {race.language_desc}
        </p>
      </section>

      {race.traits.length > 0 && (
        <section>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
            Racial Traits
          </h2>
          <div className="flex flex-wrap gap-2">
            {race.traits.map((trait) => (
              <Badge key={trait.index} className="bg-red-600  text-sm">
                {trait.name}
              </Badge>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
