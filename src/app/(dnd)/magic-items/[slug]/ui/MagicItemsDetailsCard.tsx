import { Card } from "@/components/ui/card";
import { geisCinzel } from "@/config/fonts";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { Badge } from "@/components/ui/badge";
import { getMagicItemRarityColor } from "@/utils/getMagicItemRarityColor";
import Markdown from "react-markdown";
import { MagicItemAnimatedImage } from "./MagicItemAnimatedImage";

interface Props {
  magicItem: DNDMagicItem;
}
export const MagicItemsDetailsCard = ({ magicItem }: Props) => {
  return (
    <article className="flex flex-col lg:mt-10 space-y-6">
      {/* Image and Name */}
      <header className="flex flex-row items-center space-x-5">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {magicItem.name}
        </h1>
      </header>

      <Card className="glass-card p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <MagicItemAnimatedImage magicItem={magicItem} />

          {/* Items + Descriptions */}
          <section className="lg:col-span-3 order-2 lg:order-1">
            {/* Items grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {/* Equipment category */}
              <SpellItem
                title={`Equipment category`}
                text={magicItem.equipment_category.name}
              />

              {/* Armor category */}
              <SpellItem
                title={`Armor category`}
                text={magicItem.equipment_category.name}
              />
              <Badge
                variant={"outline"}
                className={getMagicItemRarityColor(magicItem)}
              >
                {magicItem.rarity.name}
              </Badge>

              {/* Description */}

              {magicItem.desc && magicItem.desc.length > 0 && (
                <div className="col-span-3 mt-2">
                  <h3
                    className={`${geisCinzel.className} antialiased font-bold text-xl`}
                  >
                    Description
                  </h3>

                  <Markdown>{magicItem.desc.join("\n\n")}</Markdown>
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
