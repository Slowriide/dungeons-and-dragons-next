import { getSpellsList } from "@/services/spells/getSpellsList";
import { getSpellsDetails } from "@/services/spells/getSpellsDetails";
import { SpellsGrid } from "@/app/(dnd)/spells/ui/SpellsGrid";

interface Props {
  page: number;
  levels: string[];
  schools: string[];
  query: string;
}

export default async function SpellsGridWrapper({
  page,
  levels,
  schools,
  query,
}: Props) {
  // start fetch
  const listPromise = getSpellsList({
    page,
    take: 12,
    levels,
    schools,
    query,
  });

  // waith list
  const { results, totalPages, totalCount } = await listPromise;

  const spellIndexes = results.map((s) => s.index);

  // start details
  const detailsPromise = getSpellsDetails({ spellIndexes });

  // wait details
  const { spells } = await detailsPromise;

  return (
    <SpellsGrid
      spells={spells}
      totalPages={totalPages}
      currentPage={page}
      totalCount={totalCount}
    />
  );
}
