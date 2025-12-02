import { EquipmentDetailsView } from "@/components/equipment/EquipmentDetailsView";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <EquipmentDetailsView equipmentIndex={slug ?? ""} />
      </div>
    </div>
  );
}
