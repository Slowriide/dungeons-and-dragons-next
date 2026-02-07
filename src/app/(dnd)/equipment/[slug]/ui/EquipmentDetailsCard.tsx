import { Card } from "@/components/ui/card";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "@/components/ui/badge";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";
import Image from "next/image";

interface Props {
  equipment: DNDEquipment;
}
export const EquipmentDetailsCard = ({ equipment }: Props) => {
  return (
    <article className="flex flex-col lg:mt-10 space-y-6">
      {/* Image and Name */}
      <header className="flex flex-row items-center space-x-4">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {equipment.name}
        </h1>
      </header>

      <Card className="glass-card p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Image */}
          <section className="lg:col-span-2 order-1 lg:order-2">
            <Image
              src="/equipment/equipment.png"
              alt={`${equipment.name} item illustration`}
              width={400}
              height={400}
              className="rounded-lg col-span-2 w-full h-auto object-contain"
            />
          </section>

          {/* Descriptions */}
          <section className="lg:col-span-3 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Items grid */}

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
                <div className="col-span-3 mt-4">
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
          </section>
        </div>
      </Card>
    </article>
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
