import { Equipment, EquipmentType } from "@/interface/character/DNDCharacter";
import {
  Backpack,
  Sword,
  Shield,
  Wrench,
  Package,
  FlaskConical,
  Coins,
  Boxes,
} from "lucide-react";
import { ItemRow } from "./ItemRow";

interface EquipmentSectionProps {
  equipment: Equipment[];
}

const typeConfig: Record<
  EquipmentType,
  { icon: any; color: string; label: string }
> = {
  weapon: { icon: Sword, color: "text-destructive", label: "Weapons" },
  armor: { icon: Shield, color: "text-gold", label: "Armor" },
  tool: { icon: Wrench, color: "text-amber-400", label: "Tools" },
  item: { icon: Package, color: "text-muted-foreground", label: "Items" },
  consumable: {
    icon: FlaskConical,
    color: "text-blue-600",
    label: "Consumables",
  },
  gold: { icon: Coins, color: "text-yellow-600", label: "Gold" },
  other: { icon: Package, color: "text-muted-foreground", label: "Other" },
};

export function EquipmentSection({ equipment }: EquipmentSectionProps) {
  const groupedEquipment = equipment.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {} as Record<EquipmentType, Equipment[]>);

  const typeOrder: EquipmentType[] = [
    "weapon",
    "armor",
    "tool",
    "consumable",
    "item",
    "gold",
    "other",
  ];

  return (
    <div className="border-2 border-red-500/50  rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <Backpack className="w-4 h-4" />
        Equipment
      </h3>

      <div className="space-y-4">
        {typeOrder.map((type) => {
          const items = groupedEquipment[type];
          if (!items || items.length === 0) return null;

          const config = typeConfig[type];
          const Icon = config.icon;

          return (
            <div key={type}>
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
                <Icon className={`w-3 h-3 ${config.color}`} />
                {type === "item" ? "Other Items" : `${type}s`}
              </div>

              <ItemRow items={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
