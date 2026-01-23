import { EquipmentCategoriesResponse } from "@/interface/equipment/EquipmentCategory";

export const getEquipmentCategories =
  async (): Promise<EquipmentCategoriesResponse> => {
    const res = await fetch(
      "https://www.dnd5eapi.co/api/2014/equipment-categories",
      {
        next: { revalidate: 60 * 60 * 24 * 365 }, // 24h
      }
    );

    const data: EquipmentCategoriesResponse = await res.json();
    return data;
  };
