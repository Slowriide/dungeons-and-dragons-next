import { getSpellsList } from "@/services/spells/getSpellsList";
import { getSpellsDetails } from "@/services/spells/getSpellsDetails";
import { SpellsGrid } from "@/app/(dnd)/spells/ui/SpellsGrid";

interface Props {
  page: number;
  levels: string[];
  schools: string[];
  query: string;
}

/**
 * SpellsGridWrapper
 *
 * Server component that fetches paginated magic items and passes
 * them to the client-side spellsGrid component.
 */
export default async function SpellsGridWrapper({
  page,
  levels,
  schools,
  query,
}: Props) {
  /**
   * Fetch paginated spell list (lightweight data)
   * Used for filtering, pagination and ordering
   */
  const { results, totalPages, totalCount } = await getSpellsList({
    page,
    take: 12,
    levels,
    schools,
    query,
  });

  /**
   * Extract spell indexes to fetch full spell details
   */
  const spellIndexes = results.map((s) => s.index);

  /**
   * Fetch full spell details only for visible spells
   */
  const { spells } = await getSpellsDetails({ spellIndexes });

  return <SpellsGrid spells={spells} totalPages={totalPages} />;
}
