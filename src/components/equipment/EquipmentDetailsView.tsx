import { isArmor, isWeapon } from "@/utils/equipment/isWeapon";
import { ArmorDetailsCard } from "./ArmorDetailsCard";
import { EquipmentDetailsCard } from "./EquipmentDetailsCard";
import { WeaponDetailsCard } from "./WeaponDetailsCard";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

interface Props {
  equipment: DNDEquipment;
}
export const EquipmentDetailsView = ({ equipment }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      {isWeapon(equipment) ? (
        <WeaponDetailsCard equipment={equipment} />
      ) : isArmor(equipment) ? (
        <ArmorDetailsCard equipment={equipment} />
      ) : (
        <EquipmentDetailsCard equipment={equipment} />
      )}
    </div>
  );
};
