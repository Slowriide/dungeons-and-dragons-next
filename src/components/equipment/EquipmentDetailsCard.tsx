"use client";

import { Card } from "../ui/card";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "../ui/badge";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

interface Props {
  equipment: DNDEquipment;
}
export const EquipmentDetailsCard = ({ equipment }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      {/* Image and Name */}
      <div className="flex flex-row items-center space-x-5">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {equipment.name}
        </h1>
      </div>

      <Card className=" glass-card animate-fade-in p-6 gap-y-2">
        <div className="grid grid-cols-5 ">
          {/* LEFT SIDE — Items + Descriptions */}
          <div className="col-span-3 space-y-6 mr-2">
            {/* Items grid */}
            <div className="grid grid-cols-4 gap-4">
              {/* Equipment category */}
              <SpellItem
                title={`Equipment category`}
                text={equipment.equipment_category.name}
              />

              {/* Gear category */}
              {equipment.gear_category && (
                <SpellItem
                  title={`Gear category`}
                  text={equipment.gear_category.name}
                />
              )}

              {/* Tool category */}
              {equipment.tool_category && (
                <SpellItem
                  title={`Tool category`}
                  text={equipment.tool_category}
                />
              )}

              <SpellItem
                title={`Cost`}
                text={`${equipment.cost.quantity} ${equipment.cost.unit}`}
              />
              <SpellItem title={`Weight`} text={`${equipment.weight} lbs `} />
            </div>

            {/* Description */}

            {equipment.desc && equipment.desc.length > 0 && (
              <div className="col-span-3 mt-2">
                <h3
                  className={`${geisCinzel.className} antialiased font-bold text-xl`}
                >
                  Description
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {equipment.desc}
                </p>
              </div>
            )}

            {/* Properties */}
            {equipment.properties && equipment.properties.length > 0 && (
              <div className="col-span-4 mt-4">
                <h3
                  className={`${geisCinzel.className} antialiased font-bold text-xl`}
                >
                  Properties
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {equipment.properties?.map((prop) => (
                    <Badge key={`${prop.index}`} variant={"outline"}>
                      {" "}
                      {prop.name}
                    </Badge>
                  ))}
                </p>
              </div>
            )}

            {/* Description */}
            {equipment.special && equipment.special.length > 0 && (
              <div className="mt-4 col-span-3">
                <h3
                  className={`${geisCinzel.className} antialiased font-bold text-xl`}
                >
                  Special
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {equipment.special}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE — Image */}
          <img
            src="/equipment/equipment.png"
            alt={equipment.name}
            className="rounded-lg col-span-2 w-full h-auto object-contain"
          />
        </div>
      </Card>
    </div>
  );
};

const SpellItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="col-span-1">
      <span className="font-bold">{title}</span>
      <p className="">{text}</p>
    </div>
  );
};
