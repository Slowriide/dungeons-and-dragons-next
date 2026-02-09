import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { DNDArmor } from "@/interface/equipment/DNDArmor";

interface Props {
  equipment: DNDArmor;
  setSelectedEquipment: (equipment: DNDArmor) => void;
}

/**
 * Displays a summarized view of an armor item.
 * Used inside the equipment grid and acts as a clickable entry
 * to reveal full armor details.
 */
export const ArmorCard = ({ equipment, setSelectedEquipment }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedEquipment(equipment)}
      role="button"
      aria-label={`View details for ${equipment.name} armor`}
    >
      <div className="flex flex-row justify-between mb-1">
        <h3
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {equipment.name}
        </h3>

        {/* Equipment category (Armor) */}
        <Badge
          variant={"outline"}
          className="text-muted-foreground h-5 font-bold"
        >
          {equipment.equipment_category.name}
        </Badge>
      </div>

      {/* Armor type (Light, Medium, Heavy, Shield) */}
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground italic">
        <p className="font-medium">{equipment.armor_category}</p>
      </div>

      {/* Armor Class calculation breakdown */}
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground">
        <p className="font-medium">{`Armor Class:`}</p>
        <p className="font-medium">{`${equipment.armor_class.base} `}</p>
        <p className="font-medium px-1">
          {equipment.armor_class.dex_bonus ? "+ Dex modifier" : ""}
        </p>
        <p className="font-medium">
          {equipment.armor_class.dex_bonus
            ? `(max ${equipment.armor_class.max_bonus})`
            : ""}
        </p>
      </div>

      {/* Armor properties such as Stealth Disadvantage, Heavy, etc. */}
      <p className="text-muted-foreground leading-relaxed space-x-2">
        {equipment.properties?.map((prop) => (
          <Badge key={`${prop.index}`} variant={"outline"}>
            {prop.name}
          </Badge>
        ))}
      </p>

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
