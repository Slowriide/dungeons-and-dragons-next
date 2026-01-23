import { dndFetch } from "@/api/DndApi";
import { EquipmentCategoryDetailsResponse } from "@/interface/equipment/EquipmentCategoryDetails";

interface Props {
  equipmentCatIndexes: string[];
}

export const getEquipmentCategoryDetails = async ({
  equipmentCatIndexes,
}: Props) => {
  const cleaned = equipmentCatIndexes.filter((i) => i);

  if (cleaned.length === 0) return { equipmentCategories: [] };

  const equipmentCategories = await Promise.all(
    cleaned.map((eq) => {
      return dndFetch.get<EquipmentCategoryDetailsResponse>(
        `/equipment-categories/${eq}`
      );
    })
  );
  return { equipmentCategories };
};
