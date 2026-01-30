"use client";

import { Card } from "../ui/card";
import { geisCinzel } from "@/config/fonts";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getPhotoByCategory } from "@/utils/magicItems/getPhotoByCategory";
import { Badge } from "../ui/badge";
import { getMagicItemRarityColor } from "@/utils/getMagicItemRarityColor";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";

interface Props {
  magicItem: DNDMagicItem;
}
export const MagicItemsDetailsCard = ({ magicItem }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      {/* Image and Name */}
      <div className="flex flex-row items-center space-x-5">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {magicItem.name}
        </h1>
      </div>

      <Card className=" glass-card animate-fade-in p-6 gap-y-2">
        <div className="grid grid-cols-5 ">
          {/* LEFT SIDE — Items + Descriptions */}
          <div className="col-span-3 space-y-6 mr-2">
            {/* Items grid */}
            <div className="grid grid-cols-4 gap-4 items-center">
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
          </div>
          {/* RIGHT SIDE — Image */}

          <img
            src={getPhotoByCategory(magicItem.equipment_category.name)}
            alt={magicItem.name}
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
