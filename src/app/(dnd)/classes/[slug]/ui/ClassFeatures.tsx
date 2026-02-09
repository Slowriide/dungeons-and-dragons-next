import { getClassesFeatures } from "@/services/classes/getClassesFeatures";

interface Props {
  classIndex: string;
}

export const ClassFeatures = async ({ classIndex }: Props) => {
  /**
   * Fetches the list of features available for the given class.
   * This returns a lightweight list containing feature references
   * grouped by level.
   */
  const { classFeatures } = await getClassesFeatures({ classIndex });

  return (
    <div className="space-y-6">
      {/* Title */}
      <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
        Features
      </h2>

      {/* Feature list */}

      {classFeatures.map((feature) => (
        <article key={feature.index} className="space-y-2">
          {/* Feature title */}
          <h3 className="font-serif text-xl font-semibold">
            Level {feature.level}: {feature.name}
          </h3>

          {/* Feature description blocks */}
          <div className="space-y-2 text-muted-foreground">
            {feature.desc.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
