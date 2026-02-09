import { ClassesCard } from "./ClassesCard";
import { DNDClass } from "@/interface/classes/DnDClass";

interface Props {
  dndClasses: DNDClass[];
}

/**
 * Responsive grid layout for class cards.
 * - 1 column on mobile
 * - 3 columns on large screens
 *
 * This component is intentionally dumb:
 * it only maps data to UI without any business logic.
 */
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
