import { useEquipment } from "@/hooks/equipment/useEquipment";
import { equipment } from "../mocks/data/equipment";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

export const getArtisiansTools = async () => {
  const { data } = useEquipment();

  if (!data) {
    return;
  }

  const artisanTools = data.equipment.filter(
    (item): item is DNDEquipment & { tool_category: string } =>
      typeof item.tool_category === "string" &&
      item.tool_category === "Artisan's Tools"
  );

  return artisanTools;
};
