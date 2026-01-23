import { dndFetch } from "@/api/DndApi";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";

interface Props {
  magicItemsIndexes: string[];
}

export const getMagicItemsDetails = async ({
  magicItemsIndexes,
}: Props): Promise<{ magicItems: DNDMagicItem[] }> => {
  const magicItemsPromise = magicItemsIndexes.map((eq) =>
    dndFetch.get<DNDMagicItem>(`/equipment/${eq}`)
  );
  if (magicItemsIndexes.length === 0) {
    return { magicItems: [] };
  }

  const magicItems = await Promise.all(magicItemsPromise);

  return { magicItems };
};
