import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "@/components/ui/badge";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { getEquipmentBadgeColor } from "@/utils/getEquipmentBadgeColor";
import Link from "next/link";

interface Props {
  equipment: DNDEquipment;
  setSelectedEquipment: (equipment: DNDEquipment | null) => void;
}
export const SelectedEquipmentCard = ({
  setSelectedEquipment,
  equipment,
}: Props) => {
  return (
    <Card className="glass-card animate-fade-in p-6 gap-y-2">
      {/* Back Button */}
      <Button
        onClick={() => setSelectedEquipment(null)}
        variant={"ghost"}
        className="justify-start cursor-pointer"
      >
        <ChevronLeft />
        <span>Back to list</span>
      </Button>

      {/* Name */}
      <div className="flex flex-row rounded-lg overflow-hidden items-center gap-x-2">
        <Link href={`/equipment/${equipment.index}`}>
          <h1
            className={`${geisCinzel.className} antialiased font-semibold text-2xl hover:underline cursor-pointer`}
          >
            {equipment.name}
          </h1>
        </Link>
      </div>

      {/* type*/}
      <p className="text-lg line-clamp-2 mb-2 text-muted-foregroundflex gap-2 text-muted-foreground italic">
        {equipment.equipment_category.name}
      </p>

      {/* Rarity*/}

      <Badge className={getEquipmentBadgeColor(equipment)}>
        {equipment.gear_category?.name ??
          equipment.tool_category ??
          equipment.vehicle_category ??
          "Unknown"}
      </Badge>

      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Price*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Cost:</span>
          <p className="font-medium">
            {equipment.cost.quantity} {equipment.cost.unit}
          </p>
        </div>
        {/* Weight */}
        <div>
          <span className="text-muted-foreground">Weight:</span>
          <p className="font-medium">{equipment.weight} lbs</p>
        </div>
      </div>

      {/* Description */}
      {equipment.desc && equipment.desc.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Description
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">{equipment.desc}</div>

          {/* Higher levels */}
        </div>
      )}

      {equipment.properties && equipment.properties.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl mb-2`}
          >
            Properties
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            {equipment.properties?.map((prop) => (
              <Badge key={`${prop.index}`} variant={"outline"}>
                {" "}
                {prop.name}
              </Badge>
            ))}
          </p>
        </div>
      )}
    </Card>
  );
};
