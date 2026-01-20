import { DNDClass } from "@/interface/classes/DnDClass";
import { geClassImages } from "@/utils/class/getClassImage";

import Image from "next/image";

interface Props {
  classItem: DNDClass;
}

export const ClassHeader = ({ classItem }: Props) => {
  const primary =
    classItem.multi_classing?.prerequisites?.[0]?.ability_score?.name ?? "STR";
  const img = geClassImages(classItem.index);

  return (
    <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16 mt-10">
      {/* Left: Image */}
      <div className="relative w-full max-w-md mx-auto my-auto">
        <Image
          src={img}
          alt={classItem.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right: Title and Quick Stats */}
      <div className="flex flex-col justify-center">
        <h1 className="mb-6 font-serif text-5xl font-bold text-balance leading-tight">
          {classItem.name}
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          Aliqua tempor id adipisicing sit qui consequat. Et consequat cupidatat
          excepteur velit cillum ipsum deserunt deserunt. Aliquip cillum anim
          laboris cillum veniam.
        </p>

        {/* Quick Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="text-sm font-medium text-[#E63946]">Hit Die</div>
            <div className="mt-1 font-medium text-xl">{classItem.hit_die}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#E63946]">
              Primary Ability
            </div>
            <div className="mt-1 text-xl font-medium">{primary}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#E63946]">
              Saving Throws
            </div>
            <div className="mt-1 text-xl font-medium flex flex-row">
              {classItem.saving_throws.map((st) => st.name).join(", ")}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#E63946]">Subclasses</div>
            <div className="mt-1 text-xl font-medium">
              {classItem.subclasses?.length || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
