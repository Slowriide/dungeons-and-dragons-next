import { dndFetch } from "@/api/DndApi";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

interface Props {
  equipmentIndexes: string[];
}

export const getEquipmentDetails = async ({
  equipmentIndexes,
}: Props): Promise<{ equipment: DNDEquipment[] }> => {
  const equipmentPromise = equipmentIndexes.map((eq) =>
    dndFetch.get<DNDEquipment>(`/equipment/${eq}`)
  );

  const equipment = await Promise.all(equipmentPromise);

  console.log(equipment);

  return { equipment };
};
