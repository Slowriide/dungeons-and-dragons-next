import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { DNDArmor } from "@/interface/equipment/DNDArmor";

interface Props {
  equipment: DNDArmor;
  setSelectedEquipment: (equipment: DNDArmor) => void;
}

export const ArmorCard = ({ equipment, setSelectedEquipment }: Props) => {
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

      {/* Range */}
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground italic">
        <p className="font-medium">{equipment.armor_category}</p>
      </div>

      {/* Damage */}

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

      <p className="text-muted-foreground leading-relaxed space-x-2">
        {equipment.properties?.map((prop) => (
          <Badge key={`${prop.index}`} variant={"outline"}>
            {prop.name}
          </Badge>
        ))}
      </p>

      <div className="flex flex-row space-x-2 items-center">
        <p className="text-sm text-yellow-400 mt-2">
          {equipment.cost.quantity} {equipment.cost.unit}
        </p>
        <p className="text-sm text-gray-400 mt-2">{equipment.weight}lbs</p>
      </div>
    </Card>
  );
};
