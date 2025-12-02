import { EquipmentDetailsView } from "@/components/equipment/EquipmentDetailsView";
import { MagicItemsDetailsView } from "@/components/magic-items/MagicItemsDetailsView";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function MagicItemsPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <MagicItemsDetailsView magicItemIndex={slug ?? ""} />
      </div>
    </div>
  );
}
