import { MagicItemsDetailsView } from "@/app/(dnd)/magic-items/[slug]/ui/MagicItemsDetailsView";
import { getMagicItemByIndex } from "@/services/magic-items/getMagicItemByIndex";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPhotoByCategory } from "@/utils/magicItems/getPhotoByCategory";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    return {
      title: "Magic item not found | D&D Mini Beyond",
    };
  }

  const { findedMagicItem: item } = await getMagicItemByIndex(slug);

  if (!item) {
    return {
      title: "Magic item not found | D&D Mini Beyond",
    };
  }

  const levelLabel = item.rarity.name;

  return {
    title: `${item.name} (${levelLabel}) | D&D Mini Beyond`,
    description:
      item.desc?.[0] ??
      `Detailed information about the D&D 5e magic item ${item.name}.`,
    openGraph: {
      title: `${item.name} – D&D 5e Magic item`,
      description: item.desc?.[0],
      type: "article",
      images: [
        {
          url:
            getPhotoByCategory(item.equipment_category.name) ??
            "Magic item image placeholder",
          width: 1200,
          height: 630,
          alt: item.name,
        },
      ],
    },
  };
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
