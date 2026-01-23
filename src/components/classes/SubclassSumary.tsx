import { getSubclassDetails } from "@/services/classes/getSubclasses";
import { getSubclassLevels } from "@/services/classes/getSubclassLevels";
import { DNDClass } from "@/interface/classes/DnDClass";

interface Props {
  classItem: DNDClass;
}

export const SubclassSumary = async ({ classItem }: Props) => {
  const subclassesIndexes = classItem.subclasses.map((sub) => sub.index);

  const subclassResponse = await getSubclassDetails({
    subclassIndexes: subclassesIndexes,
  });

  const subclassLevelsResponse = await getSubclassLevels({
    subclassIndex: subclassesIndexes[0],
  });

  const subclasses = subclassResponse.dndSubclass;
  const subclassLevels = subclassLevelsResponse.subclassLevelFeatures;

  return (
    <div className="space-y-6">
      <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946] ">
        Subclasses
      </h2>
      <div className="flex flex-wrap gap-3">
        {subclasses.map((subclass) => (
          <div key={`${subclass.index}-${subclass.name}`}>
            <div className="flex flex-row">
              <h3 className="font-serif text-2xl font-semibold mb-2">
                {subclass.name}
              </h3>
              <h3 className="font-serif text-2xl  mb-2 italic ml-2">
                {` (${subclass.subclass_flavor})`}
              </h3>
            </div>
            <p>{subclass.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {subclassLevels.map((sublevel) => (
          <div key={`${sublevel.index}`}>
            <h3 className="font-serif text-xl font-semibold">
              Level {sublevel.level}: {sublevel.name}
            </h3>
            <p className="mb-6">{sublevel.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
