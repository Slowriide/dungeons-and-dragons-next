"use client";
import { useFilteredMagicItems } from "@/hooks/magicItems/useFilteredMagicItems";
import { EquipmentDetailsView } from "../equipment/EquipmentDetailsView";
import { MagicItemsDetailsCard } from "./MagicItemsDetailsCard";
import { notFound } from "next/navigation";

interface Props {
  magicItemIndex: string;
}
export const MagicItemsDetailsView = ({ magicItemIndex }: Props) => {
  const {
    findedMagicItem: magicItem,
    categories,
    isLoading,
    isError,
  } = useFilteredMagicItems(1, magicItemIndex);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!magicItem) {
    notFound();
  }
  return (
    <div className="flex flex-col mt-10 space-y-6">
      <MagicItemsDetailsCard magicItem={magicItem} categories={categories} />
    </div>
  );
};
