import { DNDClass } from "@/interface/classes/DnDClass";

import Image from "next/image";

interface Props {
  classItem: DNDClass;
}

export const ClassHeader = ({ classItem }: Props) => {
  const primary =
    classItem.multi_classing?.prerequisites?.[0]?.ability_score?.name ?? "STR";

  return (
    <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16 mt-10">
      {/* Left: Image */}
      <div className="relative aspect-4/3 overflow-hidden rounded-lg">
        <Image
          src={"/placeholder.svg"}
          alt={classItem.name}
          fill
          className="object-cover"
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
            <div className="mt-1 font-mono text-xl font-semibold">
              {classItem.hit_die}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#E63946]">
              Primary Ability
            </div>
            <div className="mt-1 text-xl font-semibold">{primary}</div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#E63946]">
              Saving Throws
            </div>
            <div className="mt-1 text-xl font-semibold flex flex-row">
              {classItem.saving_throws.map((st) => st.name).join(", ")}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-[#E63946]">Subclasses</div>
            <div className="mt-1 text-xl font-semibold">
              {classItem.subclasses?.length || 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
