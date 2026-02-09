import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft } from "lucide-react";
import { geisCinzel } from "@/config/fonts";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getMagicItemRarityColor } from "@/utils/getMagicItemRarityColor";
import { Badge } from "../../../../components/ui/badge";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Props {
  magicItem: DNDMagicItem;
  setSelectedMagicItem: (magicItem: DNDMagicItem | null) => void;
}

/**
 * SelectedMagicItemCard
 *
 * Shows detailed information about a single magic item.
 * Features:
 * - Back button to return to grid
 * - Name with link
 * - Equipment category
 * - Rarity badge
 * - Full description rendered with Markdown
 */
export const SelectedMagicItemCard = ({
  setSelectedMagicItem,
  magicItem,
}: Props) => {
  return (
    <Card className="glass-card animate-fade-in p-6 gap-y-2">
      {/* Back Button */}
      <Button
        onClick={() => setSelectedMagicItem(null)}
        variant={"ghost"}
        className="justify-start cursor-pointer"
      >
        <ChevronLeft />
        <span>Back to list</span>
      </Button>

      {/* Name */}
      <div className="flex flex-row rounded-lg overflow-hidden items-center gap-x-2 ">
        <Link href={`magic-items/${magicItem.index}`}>
          <h1
            className={`${geisCinzel.className} antialiased font-semibold text-2xl hover:underline cursor-pointer`}
          >
            {magicItem.name}
          </h1>
        </Link>
      </div>

      {/* Type and Rarity */}
      <div className="flex flex-row gap-x-2 items-center ">
        <p className="text-lg line-clamp-1 mb-2 text-muted-foregroundflex text-muted-foreground italic">
          {magicItem.equipment_category.name}
        </p>

        <Badge
          variant={"outline"}
          className={getMagicItemRarityColor(magicItem)}
        >
          {magicItem.rarity.name}
        </Badge>
      </div>

      {/* Description */}
      {magicItem.desc.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Description
          </h3>
          <div className="leading-relaxed">
            <ReactMarkdown>{magicItem.desc.join("\n\n")}</ReactMarkdown>
          </div>
        </div>
      )}
    </Card>
  );
};
