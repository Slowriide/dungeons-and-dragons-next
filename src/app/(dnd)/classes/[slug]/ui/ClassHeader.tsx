import { DNDClass } from "@/interface/classes/DnDClass";
import { geClassImages } from "@/utils/class/getClassImage";

import Image from "next/image";
import { classDescription } from "@/data/classes/classDescriptionñ";

interface Props {
  classItem: DNDClass;
}

export const ClassHeader = ({ classItem }: Props) => {
  const primary =
    classItem.multi_classing?.prerequisites?.[0]?.ability_score?.name ?? "STR";
  const img = geClassImages(classItem.index);

  return (
    <div className="mb-8 lg:mb-16 grid gap-8 lg:grid-cols-2 lg:gap-12 mt-10">
      {/* Image */}
      <section className="relative w-full max-w-md mx-auto my-auto">
        <Image
          src={img}
          alt={classItem.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg"
          loading="eager"
        />
      </section>

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
