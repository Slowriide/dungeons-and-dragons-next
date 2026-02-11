"use client";

import { DNDClass } from "@/interface/classes/DnDClass";
import { classDescription } from "@/data/classes/classDescriptionñ";
import { ClassesAnimatedImage } from "./ClassesAnimatedImage";

interface Props {
  classItem: DNDClass;
}

export const ClassHeader = ({ classItem }: Props) => {
  /**
   * Primary ability used as a quick reference for the class.
   * If multiclass prerequisites are missing, defaults to STR.
   */
  const primary =
    classItem.multi_classing?.prerequisites?.[0]?.ability_score?.name ?? "STR";
  return (
    <div className="mb-8 lg:mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
      {/* Image */}
      <ClassesAnimatedImage classItem={classItem} />

      {/* Title and Quick Stats */}
      <div className="flex flex-col justify-center">
        <h1 className="mb-6 font-serif text-5xl font-bold text-balance leading-tight">
          {classItem.name}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          {classDescription[classItem.index]}
        </p>

        {/* Quick Stats Grid */}
        <dl className="grid gap-4 grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-[#E63946]">Hit Die</dt>
            <dd className="mt-1 font-medium text-xl">{classItem.hit_die}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-[#E63946]">
              Primary Ability
            </dt>
            <dd className="mt-1 text-xl font-medium">{primary}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-[#E63946]">
              Saving Throws
            </dt>
            <dd className="mt-1 text-xl font-medium flex flex-row">
              {classItem.saving_throws.map((st) => st.name).join(", ")}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-[#E63946]">Subclasses</dt>
            <dd className="mt-1 text-xl font-medium">
              {classItem.subclasses?.length || 0}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
