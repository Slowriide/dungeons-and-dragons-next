import { dndFetch } from "@/api/DndApi";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { getEquipment } from "./getEquipment";

interface Props {
  page?: number;
  take?: number;
  query?: string;
  categories?: string[];
  minCost: number;
  maxCost: number;
  minWeight: number;
  maxWeight: number;
}

export const getEquipmentDetails = async ({
  page = 1,
  take = 12,
  query = "",
  categories = [],
  minCost = 0,
  maxCost = 999999,
  minWeight = 0,
  maxWeight = 999999,
}: Props) => {
  try {
    const allEquipment = await getEquipment();

    const queryLow = query.toLowerCase();

    const filtered = allEquipment.filter((equipment) => {
      const cost = equipment.cost.quantity;
      const weight = equipment.weight ?? 0;

      const matchesSearch =
        equipment.index.includes(queryLow) ||
        equipment.name.includes(queryLow) ||
        equipment.desc.includes(queryLow);

      const matchesCategory =
        categories.length > 0
          ? categories.includes(equipment.equipment_category?.index)
          : true;

      return (
        matchesSearch &&
        matchesCategory &&
        cost >= minCost &&
        cost <= maxCost &&
        weight >= minWeight &&
        weight <= maxWeight
      );
    });

    //Pagination

    const totalPages = Math.max(1, Math.ceil(filtered.length / take));
    const start = (page - 1) * take;
    const end = start + take;
    const paginated = filtered.slice(start, end);

    const categoriesMap = new Map<string, string>();

    allEquipment.forEach((eq) => {
      categoriesMap.set(
        eq.equipment_category.index,
        eq.equipment_category.name,
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
