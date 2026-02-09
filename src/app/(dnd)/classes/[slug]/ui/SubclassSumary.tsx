import { getSubclassDetails } from "@/services/classes/getSubclasses";
import { getSubclassLevels } from "@/services/classes/getSubclassLevels";
import { DNDClass } from "@/interface/classes/DnDClass";

interface Props {
  classItem: DNDClass;
}

export const SubclassSumary = async ({ classItem }: Props) => {
  /**
   * Extracts all subclass indexes from the parent class.
   * These are used to fetch subclass metadata and features.
   */
  const subclassIndexes = classItem.subclasses.map((sub) => sub.index);

  /**
   * Fetches general subclass information
   * (name, flavor text, descriptions).
   */
  const { dndSubclass: subclasses } = await getSubclassDetails({
    subclassIndexes,
  });

  /**
   * Fetch subclass feature progression.
   * NOTE: For now, progression is shown using the first subclass only.
   * This can later be extended to support subclass selection.
   */
  const { subclassLevelFeatures } = await getSubclassLevels({
    subclassIndex: subclassIndexes[0],
  });
  return (
    <section className="space-y-6">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946] ">
        Subclasses
      </h2>
      {/* Subclass descriptions */}
      <div className="flex flex-wrap gap-3">
        {subclasses.map((subclass) => (
          <article key={`${subclass.index}-${subclass.name}`}>
            <header className="flex flex-row">
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {subclass.name}
              </h3>
              <h3 className="font-serif text-2xl  mb-2 italic ml-2">
                {` (${subclass.subclass_flavor})`}
              </h3>
            </header>
            <p>{subclass.desc}</p>
          </article>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {subclassLevelFeatures.map((feature) => (
          <article key={feature.index} className="space-y-2">
            <h4 className="font-serif text-xl font-semibold">
              Level {feature.level}: {feature.name}
            </h4>

            <div className="space-y-2 text-muted-foreground">
              {feature.desc.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
