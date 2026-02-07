import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getMagicItemRarityColor } from "@/utils/getMagicItemRarityColor";

interface Props {
  magicItem: DNDMagicItem;
  setSelectedMagicItem: (magicItem: DNDMagicItem) => void;
}

export const MagicItemsCard = ({ magicItem, setSelectedMagicItem }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedMagicItem(magicItem)}
    >
      <div className="flex flex-row justify-between mb-1">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {magicItem.name}
        </p>

        <div className="flex flex-row gap-x-2">
          <Badge
            variant={"outline"}
            className="text-muted-foreground h-5 font-bold"
          >
            {magicItem.equipment_category.name}
          </Badge>
          <Badge
            variant={"outline"}
            className={getMagicItemRarityColor(magicItem)}
          >
            {magicItem.rarity.name}
          </Badge>
        </div>
      </div>
      <div className="flex gap-2 mb-3 text-sm text-muted-foreground italic">
        {/* {equipment.gear_category?.name ??
          equipment.tool_category ??
          equipment.vehicle_category ??
          "Unknown"} */}
      </div>
      {magicItem.desc && (
        <p className="text-sm line-clamp-2 mb-2 text-muted-foreground">
          {magicItem.desc}
        </p>
      )}
      <div className="flex flex-row space-x-2 items-center"></div>
    </Card>
  );
};
