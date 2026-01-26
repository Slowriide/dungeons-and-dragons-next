import { dndFetch } from "@/api/DndApi";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getMagicItems } from "./getMagicItems";

interface Props {
  page?: number;
  take?: number;
  query?: string;
  categories?: string[];
  rarities?: string[];
}

export const getMagicItemsDetails = async ({
  page = 1,
  take = 12,
  query = "",
  categories = [],
  rarities = [],
}: Props) => {
  try {
    const allMagicItems = await getMagicItems();

    console.log(categories);

    //Filter
    const filtered = allMagicItems.filter((magicItem) => {
      const matchesSearch =
        magicItem.index.includes(query.toLowerCase()) ||
        magicItem.desc.includes(query.toLowerCase());

      const matchesCategory =
        categories.length > 0
          ? categories.includes(
              magicItem.equipment_category.index.toLowerCase(),
            )
          : true;

      const matchesRarity =
        rarities.length > 0
          ? rarities.includes(
              magicItem.rarity.name.toLowerCase().replace(/\s+/g, "-"),
            )
          : true;

      return matchesSearch && matchesCategory && matchesRarity;
    });

    //Pagination

    const totalPages = Math.max(1, Math.ceil(filtered.length / take));
    const start = (page - 1) * take;
    const end = start + take;
    const paginated = filtered.slice(start, end);

    //Unique categories

    const categoriesMap = new Map<string, string>();

    allMagicItems.forEach((item) => {
      categoriesMap.set(
        item.equipment_category.index,
        item.equipment_category.name,
      );
    });

    const availableCategories = Array.from(categoriesMap).map(
      ([index, name]) => ({ index, name }),
    );

    return {
      items: paginated,
      totalPages,
      totalCount: filtered.length,
      categories: availableCategories,
    };
  } catch (error) {
    console.error("Error filtering magic items:", error);
    return {
      items: [],
      totalPages: 0,
      totalCount: 0,
      categories: [],
    };
  }
};
