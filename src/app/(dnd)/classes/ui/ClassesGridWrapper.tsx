import { DNDClass } from "@/interface/classes/DnDClass";
import { ClassesGrid } from "./ClassesGrid";

interface Props {
  dndClasses: DNDClass[];
  query: string;
}

export const ClassesGridWrapper = ({ dndClasses, query }: Props) => {
  const normalizedQuery = query.toLowerCase();

  /**
   * filtering based on the current search query.
   * Filtering is intentionally kept here to:
   * - Keep the grid component purely presentational
   * - Allow fast, responsive filtering without refetching data
   */
  const filteredClasses = query
    ? dndClasses.filter(
        (cl) =>
          cl.name.toLowerCase().includes(normalizedQuery) ||
          cl.index.toLowerCase().includes(normalizedQuery),
      )
    : dndClasses;

  /**
   * The grid only receives already-processed data.
   * This keeps rendering logic simple and predictable.
   */
  return <ClassesGrid dndClasses={filteredClasses} />;
};
