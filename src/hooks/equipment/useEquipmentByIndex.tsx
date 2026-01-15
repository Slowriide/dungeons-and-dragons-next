import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { useMemo } from "react";
import { useEquipment } from "./useEquipment";

export function useEquipmentLookup() {
  const { data } = useEquipment();

  return useMemo(() => {
    const map: Record<string, DNDEquipment> = {};

    data?.equipment.forEach((eq) => {
      map[eq.index] = eq;
    });

    return map;
  }, [data?.equipment]);
}
