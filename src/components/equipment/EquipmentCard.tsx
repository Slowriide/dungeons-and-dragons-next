import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Spell } from "@/mocks/data/spells";
import { Badge } from "../ui/badge";
import { equipment, Equipment } from "@/mocks/data/equipment";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

interface Props {
  equipment: DNDEquipment;
  setSelectedEquipment: (equipment: DNDEquipment) => void;
}

export const EquipmentCard = ({ equipment, setSelectedEquipment }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedEquipment(equipment)}
    >
      <div className="flex flex-row justify-between mb-1">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {equipment.name}
        </p>

        <Badge
          variant={"outline"}
          className="text-muted-foreground h-5 font-bold"
        >
          {equipment.equipment_category.name}
        </Badge>
      </div>
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground italic">
        {equipment.gear_category?.name ??
          equipment.tool_category ??
          equipment.vehicle_category ??
          "Unknown"}
      </div>
      {equipment.desc && (
        <p className="text-sm line-clamp-2 mb-2 text-muted-foreground">
          {equipment.desc}
        </p>
      )}
      <div className="flex flex-row space-x-2 items-center">
        <p className="text-sm text-yellow-400 mt-2">
          {equipment.cost.quantity} {equipment.cost.unit}
        </p>
        <p className="text-sm text-gray-400 mt-2">{equipment.weight}lbs</p>
      </div>
    </Card>
  );
};
