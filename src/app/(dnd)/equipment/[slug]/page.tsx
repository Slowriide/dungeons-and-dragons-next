import { EquipmentDetailsView } from "@/app/(dnd)/equipment/[slug]/ui/EquipmentDetailsView";
import { notFound } from "next/navigation";
import { getEquipmentByIndex } from "../../../../services/equipment/getEquipmentByIndex";
import { Metadata } from "next";

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
      title: "Equipment not found | D&D Mini Beyond",
    };
  }

  const { findedEquipment: equipment } = await getEquipmentByIndex(slug);

  if (!equipment) {
    return {
      title: "Equipment not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${equipment.name} | D&D Mini Beyond`,
    description:
      equipment.desc?.[0] ??
      `Detailed information about the D&D 5e equipment ${equipment.name}.`,
    openGraph: {
      title: `${equipment.name} – D&D 5e Equipment`,
      description: equipment.desc?.[0],
      type: "article",
      images: [
        {
          url: "/equipment/equipment.png",
          width: 1200,
          height: 630,
          alt: equipment.name,
        },
      ],
    },
  };
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const { findedEquipment } = await getEquipmentByIndex(slug);

  if (!findedEquipment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-7xl space-y-10">
        <EquipmentDetailsView equipment={findedEquipment} />
      </article>
    </main>
  );
}
