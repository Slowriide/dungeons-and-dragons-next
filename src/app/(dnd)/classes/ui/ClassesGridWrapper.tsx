import { DNDClass } from "@/interface/classes/DnDClass";
import { ClassesGrid } from "./ClassesGrid";

interface Props {
  dndClasses: DNDClass[];
  query: string;
}

export const ClassesGridWrapper = ({ dndClasses, query }: Props) => {
  const filteredClasses = query
    ? dndClasses.filter(
        (cl) =>
          cl.name.toLowerCase().includes(query) ||
          cl.index.toLowerCase().includes(query),
      )
    : dndClasses;

  return <ClassesGrid dndClasses={filteredClasses} />;
};
