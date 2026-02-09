import { geisCinzel } from "@/config/fonts";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getMagicItemRarityColor } from "@/utils/getMagicItemRarityColor";

interface Props {
  magicItem: DNDMagicItem;
  setSelectedMagicItem: (magicItem: DNDMagicItem) => void;
}

/**
 * MagicItemsCard
 *
 * Displays a summarized view of a magic item for the grid.
 * Clicking the card sets it as the selected item.
 *
 * Features:
 * - Name
 * - Equipment category
 * - Rarity badge
 * - Short description (clamped)
 */
export const MagicItemsCard = ({ magicItem, setSelectedMagicItem }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedMagicItem(magicItem)}
      role="button"
      aria-label={`View details for ${magicItem.name}`}
    >
      {/* Header: name + badges */}
      <div className="flex flex-row justify-between mb-1">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {magicItem.name}
        </p>

        <div className="flex flex-row gap-x-2">
          {/* Equipment category badge */}
          <Badge
            variant={"outline"}
            className="text-muted-foreground h-5 font-bold"
          >
            {magicItem.equipment_category.name}
          </Badge>
          {/* Rarity badge with color */}
          <Badge
            variant={"outline"}
            className={getMagicItemRarityColor(magicItem)}
          >
            {magicItem.rarity.name}
          </Badge>
        </div>
      </div>

      {/* Optional short description */}
      {magicItem.desc && (
        <p className="text-sm line-clamp-2 mb-2 text-muted-foreground">
          {magicItem.desc}
        </p>
      )}
      <div className="flex flex-row space-x-2 items-center"></div>
    </Card>
  );
};
