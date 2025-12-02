import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "../ui/badge";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import { getEquipmentBadgeColor } from "@/utils/getEquipmentBadgeColor";
import { DNDWeapon } from "@/interface/equipment/DNDWeapon";
import Link from "next/link";

interface Props {
  equipment: DNDWeapon;
  setSelectedEquipment: (equipment: DNDWeapon | null) => void;
}
export const SelectedWeaponCard = ({
  setSelectedEquipment,
  equipment,
}: Props) => {
  return (
    <Card className="glass-card animate-fade-in p-6 gap-y-2">
      {/* Back Button */}
      <Button
        onClick={() => setSelectedEquipment(null)}
        variant={"ghost"}
        className="justify-start cursor-pointer"
      >
        <ChevronLeft />
        <span>Back to list</span>
      </Button>

      {/* Name */}
      <div className="flex flex-row rounded-lg overflow-hidden items-center gap-x-2">
        <Link href={`/equipment/${equipment.index}`}>
          <h1
            className={`${geisCinzel.className} antialiased font-semibold text-2xl hover:underline cursor-pointer`}
          >
            {equipment.name}
          </h1>
        </Link>
      </div>

      {/* type*/}
      <p className="text-lg line-clamp-2 mb-2 text-muted-foregroundflex gap-2 text-muted-foreground italic">
        {equipment.equipment_category.name}
      </p>

      {/* Category and Damage*/}
      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Category*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Category:</span>
          <p className="font-medium">{equipment.category_range}</p>
        </div>

        {/* Damage */}
        {equipment.damage && (
          <div>
            <span className="text-muted-foreground">Damage:</span>
            <div className="flex flex-row">
              <p className="font-medium">{equipment.damage.damage_dice}</p>
              <p className="text-muted-foreground pl-1 italic">
                {equipment.damage.damage_type.name}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Range and extra range or Double handed*/}
      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Range*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Range:</span>
          <div className="flex flex-row">
            <p className="font-medium">Normal:</p>
            <p className="text-muted-foreground pl-1 italic">
              {`(${equipment.range.normal})fts`}
            </p>
          </div>
        </div>

        {equipment.range.long && (
          <div className="col-span-1">
            <span className="text-muted-foreground">Range:</span>
            <div className="flex flex-row">
              <p className="font-medium">Long</p>
              <p className="text-muted-foreground pl-1 italic">
                {`(${equipment.range.long})fts`}
              </p>
            </div>
          </div>
        )}

        {/* Double handed */}
        {equipment.two_handed_damage && (
          <div>
            <span className="text-muted-foreground">Two handed damage:</span>
            <div className="flex flex-row">
              <p className="font-medium">
                {equipment.two_handed_damage.damage_dice}
              </p>
              <p className="text-muted-foreground pl-1 italic">
                {equipment.two_handed_damage.damage_type.name}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Cost*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Cost:</span>
          <p className="font-medium">{equipment.cost.quantity}</p>
        </div>
        {/* Weight */}
        <div>
          <span className="text-muted-foreground">Weight:</span>
          <p className="font-medium">{equipment.weight}</p>
        </div>
      </div>

      {/* Properties */}
      {equipment.desc.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Description
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">{equipment.desc}</div>

          {/* Higher levels */}
        </div>
      )}

      {equipment.properties.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl mb-2`}
          >
            Properties
          </h3>

          <p className="text-muted-foreground leading-relaxed space-x-2">
            {equipment.properties?.map((prop) => (
              <Badge key={`${prop.index}`} variant={"outline"}>
                {" "}
                {prop.name}
              </Badge>
            ))}
          </p>
        </div>
      )}

      {equipment.special.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Special
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">{equipment.special}</div>

          {/* Higher levels */}
        </div>
      )}
    </Card>
  );
};
