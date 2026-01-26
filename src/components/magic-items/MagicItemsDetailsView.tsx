"use client";

import { MagicItemsDetailsCard } from "./MagicItemsDetailsCard";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

interface Props {
  magicItem: DNDMagicItem;
}
export const MagicItemsDetailsView = ({ magicItem }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      <MagicItemsDetailsCard magicItem={magicItem} />
    </div>
  );
};
