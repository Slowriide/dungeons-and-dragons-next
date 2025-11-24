import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { Badge } from "../components/ui/badge";

export const getEquipmentBadgeColor = (equipment: DNDEquipment) => {
  // Gear category
  if (equipment.gear_category) {
    return "bg-blue-500/20 text-blue-700 border-blue-500";
  }

  // Tool category
  if (equipment.tool_category) {
    return "bg-amber-500/20 text-amber-700 border-amber-500";
  }

  if (equipment.vehicle_category) {
    return "bg-red-500/20 text-red-700 border-red-500";
  }

  // Default
  return "bg-gray-500/20 text-gray-700 border-gray-500";
};
