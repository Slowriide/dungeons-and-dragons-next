import { Card } from "@/components/ui/card";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "@/components/ui/badge";
import { DNDArmor } from "@/interface/equipment/DNDArmor";
import { ArmorAnimatedImage } from "./ArmorAnimatedImage";

interface Props {
  equipment: DNDArmor;
}
/**
 * ArmorDetailsCard
 *
 * Detailed view of a single armor item.
 * Displays:
 * - Name and optional illustration
 * - Equipment category, armor category, armor class
 * - Cost, weight
 * - Description, properties, and special features
 */
export const ArmorDetailsCard = ({ equipment }: Props) => {
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
          <ArmorAnimatedImage equipment={equipment} />
          {/*Descriptions */}
          <section className="lg:col-span-3 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Equipment category */}
              <DefinitionItem
                title={`Equipment category`}
                text={equipment.equipment_category.name}
              />

              {/* Armor category */}

              <DefinitionItem
                title={`Armor category`}
                text={equipment.armor_category}
              />

              {/* Armor Class */}
              <div className="col-span-2 lg:col-span-1">
                <span className="font-bold">Armor Class:</span>
                <div className="flex flex-row">
                  <p>{`${equipment.armor_class.base} `}</p>
                  <p className="px-1">
                    {equipment.armor_class.dex_bonus ? "+ Dex modifier" : ""}
                  </p>
                  <p>
                    {equipment.armor_class.dex_bonus
                      ? `(max ${equipment.armor_class.max_bonus})`
                      : ""}
                  </p>
                </div>
              </div>

              <DefinitionItem
                title={`Cost`}
                text={`${equipment.cost.quantity} ${equipment.cost.unit}`}
              />
              <DefinitionItem
                title={`Weight`}
                text={`${equipment.weight} lbs `}
              />

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
                <div className="col-span-4 mt-4 ">
                  <h3
                    className={`${geisCinzel.className} antialiased font-bold text-xl`}
                  >
                    Properties
                  </h3>

                  <p className="text-muted-foreground leading-relaxed space-x-2">
                    {equipment.properties?.map((prop) => (
                      <Badge key={`${prop.index}`} variant={"outline"}>
                        {prop.name}
                      </Badge>
                    ))}
                  </p>
                </div>
              )}

              {/* Special */}
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

/**
 * DefinitionItem
 *
 * Displays a title-value pair using <dl> semantics for accessibility.
 */
const DefinitionItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <dl className="col-span-1">
      <dt className="font-bold">{title}</dt>
      <dd className="">{text}</dd>
    </dl>
  );
};
