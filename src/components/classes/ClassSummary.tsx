import { getClassesLevelsDetails } from "@/actions/classes/getClassLevels";
import { DNDClass } from "@/interface/classes/DnDClass";
import { Badge } from "../ui/badge";
import { classProficiencies } from "@/utils/class/classProficiencies";
import { multiclassData } from "@/data/multiclassData";
import { BardTable } from "./tables/BardTable";
import { ClassTableSelector } from "./tables/ClassTableSelector";
import { ClassFeatures } from "./ClassFeatures";
import { SubclassSumary } from "./SubclassSumary";

interface Props {
  classItem: DNDClass;
}

export const ClassSummary = async ({ classItem }: Props) => {
  const index = classItem.index;
  const { classLevels } = await getClassesLevelsDetails({
    subraceIndex: index,
  });

  const profs = classItem.proficiencies.map((p) => p.name);

  const { armors, savingThrows, weapons } = classProficiencies(profs);

  const multiclassInfo = multiclassData[index];

  return (
    <div className="mb-16">
      {/* Proficencies */}
      <section className="mb-16 ">
        <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
          Proficiencies
        </h2>
        <div className="space-y-4">
          {/* Armor */}
          <div className="flex gap-4 border-b border-border pb-4">
            <span className="w-32 shrink-0 font-medium">Armor</span>
            <span className="text-muted-foreground">{armors.join(", ")}</span>
          </div>

          {/* Weapons */}
          <div className="flex gap-4 border-b border-border pb-4">
            <span className="w-32 shrink-0 font-medium">Weapons</span>
            <span className="text-muted-foreground">{weapons.join(", ")}</span>
          </div>

          {/* Saving Throws */}
          <div className="flex gap-4 border-b border-border pb-4">
            <span className="w-32 shrink-0 font-medium">Saving throws</span>
            <span className="text-muted-foreground">
              {savingThrows.join(", ")}
            </span>
          </div>

          {/* Skills */}
          <div className="flex gap-4 border-b border-border pb-4">
            <span className="w-32 shrink-0 font-medium">Skills</span>
            {classItem.proficiency_choices.map((p, index) => (
              <span className="text-muted-foreground" key={index}>
                {p.desc}
              </span>
            ))}
          </div>

          {/* Starting equipment */}
          <div className="flex gap-4 border-b border-border pb-4">
            <span className="w-32 shrink-0 font-medium">
              Starting equipment
            </span>
            {classItem.starting_equipment_options.map((p, i) => (
              <span className="text-muted-foreground" key={`${p.desc}-${i}`}>
                {`Choose (${p.choose}) - ${p.desc}`}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Becoming a fighter */}
      <section className="space-y-6 border-b border-red-500 pb-6">
        <h2 className=" font-serif text-3xl font-semibold text-red-500 ">
          {`Becoming a ${classItem.name}`}
        </h2>

        <p className="text-muted-foreground">
          To qualify for a new class, you must meet the ability score
          prerequisites for both your current class and your new one.
        </p>
        <div className="mt-3">
          <Badge variant="secondary" className="text-base">
            {multiclassInfo.prerequisite}
          </Badge>
        </div>

        {/* Lvl 1 */}
        <h3 className="font-serif text-xl font-semibold">
          As level 1 Character
        </h3>
        <div className="text-muted-foreground">
          <p className="mt-4">{`- Gain all Core traits in the Core ${classItem.name} Traits table.`}</p>
          <p className="mt-4">{`- Gain the ${classItem.name} level 1 features, which are listed in the ${classItem.name} Features table. .`}</p>
        </div>

        {/* Multiclass */}
        <div className="text-muted-foreground flex flex-col">
          <h3 className=" font-serif text-xl font-semibold mb-4">
            As a Multiclass Character
          </h3>
          <p className="text-muted-foreground ">
            - Gain the following traits from the Core {classItem.name} Traits
            table: {multiclassInfo.gains.join(", ")}
          </p>
          <p className="mt-4">{`- Gain ${classItem.name} level 1 features, which are listed in the ${classItem.name} Features table. .`}</p>
          {/* Features Table */}
        </div>

        {ClassTableSelector({ classIndex: index, levels: classLevels })}
      </section>

      {/* Features */}

      <section className="mt-8 border-b border-red-500 pb-6">
        <ClassFeatures classIndex={classItem.index} />
      </section>

      {/* Subclass */}
      {classItem.subclasses && classItem.subclasses.length > 0 && (
        <section className="mt-8">
          <SubclassSumary classItem={classItem} />
        </section>
      )}
    </div>
  );
};
