import { geisCinzel } from "@/config/fonts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";

interface Props {
  equipment: DNDWeapon;
  setSelectedEquipment: (equipment: DNDWeapon) => void;
}

/**
 * Displays a compact overview of a weapon.
 * Acts as a clickable entry to show detailed weapon information.
 */
export const WeaponCard = ({ equipment, setSelectedEquipment }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      role="button"
      onClick={() => setSelectedEquipment(equipment)}
      aria-label={`View details for ${equipment.name}`}
    >
      <div className="flex flex-row justify-between mb-1">
        <h3
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {equipment.name}
        </h3>

        <Badge
          variant={"outline"}
          className="text-muted-foreground h-5 font-bold"
        >
          {equipment.equipment_category.name}
        </Badge>
      </div>

      {/* Range */}
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground italic">
        <p className="font-medium">{equipment.category_range}</p>
      </div>

      {/* Damage block is optional: not all weapons deal damage */}
      {equipment.damage && (
        <div className="flex gap-2 mb-3 text-sm text-muted-foreground">
          <p className="font-medium">{`Damage:`}</p>
          <p className="italic">
            {equipment.damage.damage_dice} {equipment.damage.damage_type.name}
          </p>
        </div>
      )}

      <div className="text-muted-foreground leading-relaxed space-x-2">
        {equipment.properties?.map((prop) => (
          <Badge key={prop.index} variant="outline">
            {prop.name}
          </Badge>
        ))}
      </div>

      {/* Cost and weight information */}
      <div className="flex flex-row space-x-2 items-center">
        <p className="text-sm text-yellow-400 mt-2">
          {equipment.cost.quantity} {equipment.cost.unit}
        </p>
        <p className="text-sm text-gray-400 mt-2">{equipment.weight}lbs</p>
      </div>
    </Card>
  );
};
