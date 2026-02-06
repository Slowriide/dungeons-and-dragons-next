import { ClassesCard } from "../../../../components/classes/ClassesCard";
import { DNDClass } from "@/interface/classes/DnDClass";

interface Props {
  dndClasses: DNDClass[];
}

export const ClassesGrid = ({ dndClasses }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {dndClasses.map((dndClass) => (
          <ClassesCard key={dndClass.name} dndClass={dndClass} />
        ))}
      </div>
    </main>
  );
};
