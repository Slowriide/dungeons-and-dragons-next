import { geisCinzel } from "@/config/fonts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

interface Props {
  equipment: DNDEquipment;
  setSelectedEquipment: (equipment: DNDEquipment) => void;
}

/**
 * Generic equipment card.
 * Used for non-weapon and non-armor items such as tools, adventuring gear,
 * vehicles, kits, and miscellaneous equipment.
 */
export const EquipmentCard = ({ equipment, setSelectedEquipment }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedEquipment(equipment)}
      role="button"
      aria-label={`View details for ${equipment.name}`}
    >
      <div className="flex flex-row justify-between mb-1">
        <h3
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {equipment.name}
        </h3>

        {/* Main equipment category (e.g. Adventuring Gear, Tools, Mounts) */}
        <Badge
          variant={"outline"}
          className="text-muted-foreground h-5 font-bold"
        >
          {equipment.equipment_category.name}
        </Badge>
      </div>
      {/* Specific subcategory (gear, tool, vehicle, etc.) */}
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground italic">
        {equipment.gear_category?.name ??
          equipment.tool_category ??
          equipment.vehicle_category ??
          "Unknown"}
      </div>

      {/* Short description preview, clamped for grid consistency */}
      {equipment.desc && (
        <p className="text-sm line-clamp-2 mb-2 text-muted-foreground">
          {equipment.desc}
        </p>
      )}

      {/* Cost and weight */}
      <div className="flex flex-row space-x-2 items-center">
        <p className="text-sm text-yellow-400 mt-2">
          {equipment.cost.quantity} {equipment.cost.unit}
        </p>
        <p className="text-sm text-gray-400 mt-2">{equipment.weight}lbs</p>
      </div>
    </Card>
  );
};
