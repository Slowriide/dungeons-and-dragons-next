import { getEquipment } from "./getEquipment";

export const getEquipmentByIndex = async (equipmentIndex: string) => {
  try {
    const allEquipment = await getEquipment();

    const findedEquipment = allEquipment.find(
      (item) => item.index === equipmentIndex,
    );

    return {
      findedEquipment,
    };
  } catch (error) {
    console.error("Error filtering equipment:", error);
    return { findedEquipment: null };
  }
};
