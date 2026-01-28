import { EquipmentDetailsView } from "@/components/equipment/EquipmentDetailsView";
import { notFound } from "next/navigation";

import { getEquipmentByIndex } from "../../../../services/equipment/getEquipmentByIndex";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <EquipmentDetailsView equipment={findedEquipment} />
      </div>
    </div>
  );
}
