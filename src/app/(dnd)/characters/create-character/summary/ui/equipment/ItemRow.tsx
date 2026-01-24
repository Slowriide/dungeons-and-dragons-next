"use client";
import { Equipment } from "@/interface/character/DNDCharacter";
import useDNDCharacterStore from "@/store/characte.store";
import { Circle } from "lucide-react";

interface Props {
  items: Equipment[];
}

export const ItemRow = ({ items }: Props) => {
  const { toggleEquiped } = useDNDCharacterStore();
  //TODO VER DAÑO DE ARMAS Y AC DE ARMADURAS

  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        //Item bg
        <div
          key={`${item.name}-${index}`}
          className={`flex items-center justify-between py-1.5 px-2 rounded text-sm ${
            item.equipped
              ? "bg-red-500/10 border border-red-500/20"
              : "hover:bg-parchment-dark/50"
          }`}
        >
          <div className="flex items-center gap-2 ">
            <Circle
              onClick={() => toggleEquiped(item.index!)}
              className={`h-2 w-2 cursor-pointer ${
                item.equipped
                  ? "text-secondary-foreground/80 fill-secondary-foreground/80"
                  : "text-secondary-foreground/80"
              }`}
            />
            <span
              className={
                item.equipped ? "font-medium text-ink" : "text-muted-foreground"
              }
            >
              {item.name}
              {item.quantity > 1 && ` (×${item.quantity})`}
            </span>
          </div>
          {item.description && (
            <span className="text-xs text-muted-foreground ml-2">
              {item.description}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
