import { getClassesLevelsDetails } from "@/services/classes/getClassLevels";
import { DNDClass } from "@/interface/classes/DnDClass";
import { Badge } from "../../../../../components/ui/badge";
import { classProficiencies } from "@/utils/class/classProficiencies";
import { multiclassData } from "@/data/classes/multiclassData";
import { ClassTableSelector } from "./tables/ClassTableSelector";
import { ClassFeatures } from "./ClassFeatures";
import { SubclassSumary } from "./SubclassSumary";
import { EQUIPMENT_OPTIONS } from "@/data/races/RaceEquipmentOptions";

interface Props {
  classItem: DNDClass;
}

export const ClassSummary = async ({ classItem }: Props) => {
  const index = classItem.index;

  /**
   * Fetch full class progression data (levels, features, etc).
   * This is required for tables and feature breakdowns.
   */
  const { classLevels } = await getClassesLevelsDetails({
    classIndex: index,
  });

  /**
   * Normalize proficiencies into categories (armor, weapons, saves).
   */
  const profs = classItem.proficiencies.map((p) => p.name);
  const { armors, savingThrows, weapons } = classProficiencies(profs);

  /**
   * Multiclassing requirements and benefits are defined statically
   * since they are rules-based and do not change dynamically.
   */
  const multiclassInfo = multiclassData[index];

  /**
   * Starting equipment options are mapped per class and flattened
   * into a readable sentence for display.
   */
  const eqOption = EQUIPMENT_OPTIONS.find(
    (eq) => eq.dndClass === classItem.index,
  );

  const equipmentOptionText = eqOption?.options
    .map((opt) => opt.description)
    .join(" or ");

  return (
    <div className="10">
      {/* ===================== Proficiencies ===================== */}
      <section className="mb-10 ">
        <h2 className="mb-6 font-serif text-3xl font-semibold text-[#E63946]">
          Proficiencies
        </h2>
        <dl className="space-y-4">
          {/* Armor */}
          <div className="flex gap-4 border-b border-border pb-4">
            <dt className="w-32 shrink-0 font-medium">Armor</dt>
            <dd className="text-muted-foreground">{armors.join(", ")}</dd>
          </div>

          {/* Weapons */}
          <div className="flex gap-4 border-b border-border pb-4">
            <dt className="w-32 shrink-0 font-medium">Weapons</dt>
            <dd className="text-muted-foreground">{weapons.join(", ")}</dd>
          </div>

          {/* Saving Throws */}
          <div className="flex gap-4 border-b border-border pb-4">
            <dt className="w-32 shrink-0 font-medium">Saving throws</dt>
            <dd className="text-muted-foreground">{savingThrows.join(", ")}</dd>
          </div>

          {/* Skills */}
          <div className="flex gap-4 border-b border-border pb-4">
            <dt className="w-32 shrink-0 font-medium">Skills</dt>
            {classItem.proficiency_choices.map((p, index) => (
              <dd className="text-muted-foreground" key={index}>
                {p.desc}
              </dd>
            ))}
          </div>

          {/* Starting equipment */}
          <div className="flex gap-4 border-b border-border pb-4">
            <dt className="w-32 shrink-0 font-medium">Starting equipment</dt>
            <dd className="text-muted-foreground self-center">
              {equipmentOptionText}
            </dd>
          </div>
        </dl>
      </section>

      {/* Becoming a [Class] */}
      <section className="space-y-6 border-b border-red-500 pb-6">
        <h2 className=" font-serif text-3xl font-semibold text-red-500 ">
          {`Becoming a ${classItem.name}`}
        </h2>

        <p className="text-muted-foreground">
          To qualify for a new class, you must meet the ability score
          prerequisites for both your current class and your new one.
        </p>
        <div className="mt-3 space-y-6">
          <h3 className="font-serif text-xl font-semibold">Prerequisite</h3>
          <Badge variant="secondary" className="text-base">
            {multiclassInfo.prerequisite}
          </Badge>
        </div>

        {/* Lvl 1 */}
        <h3 className="font-serif text-xl font-semibold">
          As level 1 Character
        </h3>
        <ul className="text-muted-foreground">
          <li className="mt-4">{`- Gain all Core traits in the Core ${classItem.name} Traits table.`}</li>
          <li className="mt-4">{`- Gain the ${classItem.name} level 1 features, which are listed in the ${classItem.name} Features table. .`}</li>
        </ul>

        {/* ===================== Multiclassing ===================== */}
        <ul className="text-muted-foreground flex flex-col">
          <h3 className=" font-serif text-xl font-semibold mb-4">
            As a Multiclass Character
          </h3>
          <li className="text-muted-foreground ">
            - Gain the following traits from the Core {classItem.name} Traits
            table: {multiclassInfo.gains.join(", ")}
          </li>
          <li className="mt-4">{`- Gain ${classItem.name} level 1 features, which are listed in the ${classItem.name} Features table. .`}</li>
        </ul>

        {/* Features Table */}

        <ClassTableSelector classIndex={classItem.index} levels={classLevels} />
      </section>

      {/* ===================== Class Features ===================== */}
      <section className="mt-8 border-b border-red-500 pb-6">
        <ClassFeatures classIndex={classItem.index} />
      </section>

      {/* ===================== Subclasses ===================== */}
      {classItem.subclasses && classItem.subclasses.length > 0 && (
        <section className="mt-8">
          <SubclassSumary classItem={classItem} />
        </section>
      )}
    </div>
  );
};
