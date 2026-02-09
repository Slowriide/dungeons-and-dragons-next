import { ChevronLeft } from "lucide-react";
import { geisCinzel } from "@/config/fonts";

import { DNDWeapon } from "@/interface/equipment/DNDWeapon";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Props {
  equipment: DNDWeapon;
  setSelectedEquipment: (equipment: DNDWeapon | null) => void;
}

/**
 * Detailed view for a selected weapon.
 * Shows all relevant metadata:
 * - Name, category, range, damage, cost, weight
 * - Properties, special rules, description
 */
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
        aria-label="Back to weapon list"
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

      {/* Cost and Weight */}
      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Cost*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Cost:</span>
          <p className="font-medium">
            {equipment.cost.quantity} {equipment.cost.unit}
          </p>
        </div>
        {/* Weight */}
        <div>
          <span className="text-muted-foreground">Weight:</span>
          <p className="font-medium">{equipment.weight} lbs</p>
        </div>
      </div>

      {/* Description */}
      {equipment.desc && equipment.desc.length > 0 && (
        <div className="mt-2">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Description
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">{equipment.desc}</div>
        </div>
      )}

      {/* Properties */}
      {equipment.properties && equipment.properties.length > 0 && (
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
      {/* Special rules */}
      {equipment.special && equipment.special.length > 0 && (
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
