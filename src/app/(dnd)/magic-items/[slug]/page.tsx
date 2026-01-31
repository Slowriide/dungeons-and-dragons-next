import { MagicItemsDetailsView } from "@/components/magic-items/MagicItemsDetailsView";
import { getMagicItemByIndex } from "@/services/magic-items/getMagicItemByIndex";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function MagicItemsPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const { findedMagicItem } = await getMagicItemByIndex(slug);

  if (!findedMagicItem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <MagicItemsDetailsView magicItem={findedMagicItem} />
      </div>
    </div>
  );
}
