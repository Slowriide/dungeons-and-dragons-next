import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "../ui/badge";
import { DNDArmor } from "@/interface/equipment/DNDArmor";
import Link from "next/link";

interface Props {
  equipment: DNDArmor;
  setSelectedEquipment: (equipment: DNDArmor | null) => void;
}
export const SelectedArmorCard = ({
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

      {/* Armor category and Armor class*/}
      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Armor category */}
        <div>
          <span className="text-muted-foreground">Armor Category:</span>
          <p className="font-medium">{equipment.armor_category}</p>
        </div>

        {/* Armor class*/}
        <div>
          <span className="text-muted-foreground">Armor Class:</span>
          <div className="flex flex-row">
            <p className="font-medium">{`${equipment.armor_class.base} `}</p>
            <p className="font-medium px-1">
              {equipment.armor_class.dex_bonus ? "+ Dex modifier" : ""}
            </p>
            <p className="font-medium">
              {equipment.armor_class.dex_bonus
                ? `(max ${equipment.armor_class.max_bonus})`
                : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Strength min and Stealth disadventage*/}
      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Strength min*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Strength min:</span>
          <p className="font-medium">
            {equipment.str_minimum === 0 ? "No" : equipment.str_minimum}
          </p>
        </div>

        {/* Stealth disadventage*/}
        <div>
          <span className="text-muted-foreground">Stealth disadventage:</span>

          <p className="font-medium">
            {equipment.stealth_disadvantage
              ? equipment.stealth_disadvantage
              : "No"}
          </p>
        </div>
      </div>

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

      {/* Properties */}
      {equipment.desc && equipment.desc.length > 0 && (
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
