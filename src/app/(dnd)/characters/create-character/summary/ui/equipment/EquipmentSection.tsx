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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface EquipmentSectionProps {
  equipment: Equipment[];
  gold: number;
}

const typeConfig: Record<
  EquipmentType,
  { icon: any; color: string; label: string }
> = {
  weapon: { icon: Sword, color: "text-destructive", label: "Weapons" },
  armor: { icon: Shield, color: "text-gold", label: "Armor" },
  tool: { icon: Wrench, color: "text-secondary-foreground/80", label: "Tools" },
  item: { icon: Package, color: "text-muted-foreground", label: "Items" },
  consumable: {
    icon: FlaskConical,
    color: "text-blue-600",
    label: "Consumables",
  },

  other: { icon: Package, color: "text-muted-foreground", label: "Other" },
};

export function EquipmentSection({ equipment, gold }: EquipmentSectionProps) {
  const groupedEquipment = equipment.reduce(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    },
    {} as Record<EquipmentType, Equipment[]>,
  );

  const typeOrder: EquipmentType[] = [
    "weapon",
    "armor",
    "tool",
    "consumable",
    "item",
    "other",
  ];

  return (
    <div className="border-2 border-red-500/50  rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <Backpack className="w-4 h-4" />
        Equipment
      </h3>

      <Accordion type="multiple" className="space-y-2" defaultValue={typeOrder}>
        <div className="space-y-4">
          {typeOrder.map((type) => {
            const items = groupedEquipment[type];
            if (!items || items.length === 0) return null;

            const config = typeConfig[type];
            const Icon = config.icon;

            return (
              <AccordionItem key={type} value={type} className="border-0">
                <AccordionTrigger className="py-2 px-3 rounded-md hover:bg-parchment-dark/50 hover:no-underline text-sm font-medium text-ink">
                  <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-3 h-3 ${config.color}`} />
                      {type === "item" ? "Other Items" : `${type}s`}
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-3 pb-3">
                  <ItemRow items={items} />
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </div>
      </Accordion>

      <div className="mb-4 p-3 bg-secondary-foreground/10 dark:bg-amber-950/20 rounded-md border border-secondary-foreground/40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4 text-secondary-foreground" />
            <span className="font-serif text-sm font-medium">Gold</span>
          </div>
          <span className="text-md font-bold text-secondary-foreground ">
            {gold} gp
          </span>
        </div>
      </div>
    </div>
  );
}
