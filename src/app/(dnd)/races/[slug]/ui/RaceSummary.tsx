import { Badge } from "@/components/ui/badge";
import { DNDRace } from "@/interface/races/DNDRace";

interface Props {
  race: DNDRace;
}
export const RaceSummary = ({ race }: Props) => {
  return (
    <div className="space-y-8 mb-10">
      {/* Alignment */}
      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
          Alignment
        </h2>
        <p className="leading-relaxed text-foreground/90 text-lg">
          {race.alignment}
        </p>
      </section>

      {/* Age & Size */}
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
            Age
          </h2>
          <p className="leading-relaxed text-foreground/90">{race.age}</p>
        </section>

        <section>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
            Size
          </h2>
          <p className="leading-relaxed text-foreground/90">
            {race.size_description}
          </p>
        </section>
      </div>

      {/* Languages */}
      <section>
        <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
          Languages
        </h2>
        <ul className="mb-3 flex flex-wrap gap-2">
          {race.languages.map((lang) => (
            <li key={lang.index}>
              <Badge variant="outline" className="text-sm">
                {lang.name}
              </Badge>
            </li>
          ))}
        </ul>
        <p className="leading-relaxed text-muted-foreground">
          {race.language_desc}
        </p>
      </section>

      {race.traits.length > 0 && (
        <section>
          <h2 className="mb-4 font-serif text-2xl font-semibold text-red-500">
            Racial Traits
          </h2>
          <ul className="flex flex-wrap gap-2">
            {race.traits.map((trait) => (
              <li key={trait.index}>
                <Badge className="bg-red-600  text-sm">{trait.name}</Badge>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};
