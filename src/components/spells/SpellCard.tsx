"use client";

import { Card } from "../ui/card";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "../ui/badge";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  spell: DNDSpell;
}
export const SpellCard = ({ spell }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      {/* Image and Name */}
      <div className="flex flex-row items-center space-x-5">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {spell.name}
        </h1>
      </div>

      <Card className=" glass-card animate-fade-in p-6 gap-y-2">
        <div className="grid grid-cols-5">
          <div className="grid grid-cols-3 col-span-3 gap-y-2 border-b py-4 mr-4">
            {/* Classes */}
            <div>
              <span className={`font-bold`}>Classes</span>
              <div className="flex flex-wrap gap-2 ">
                {spell.classes.map((cls) => (
                  <Badge key={cls.index} variant="outline">
                    {cls.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Level */}

            <SpellItem
              title={spell.level === 0 ? "Cantrip" : `Level`}
              text={spell.level === 0 ? "" : spell.level.toString()}
            />

            {/* Cast time*/}
            <SpellItem title={"Casting time"} text={spell.casting_time} />

            {/* Range */}
            <SpellItem
              title={"Attack type"}
              text={`${spell.attack_type} (${spell.range})`}
            />

            {/* Components */}
            <SpellItem
              title={"Components"}
              text={spell.components.join(", ")}
            />

            {/* Duration */}
            <SpellItem title={"Duration"} text={spell.duration} />

            {/* School */}
            <SpellItem title={"School"} text={spell.school.name} />

            {/* Ritual */}
            <SpellItem
              title={"Ritual"}
              text={spell.ritual === false ? "No" : "Yes"}
            />

            {/* Concentration */}
            <SpellItem
              title={"Concentration"}
              text={spell.concentration === false ? "No" : "Yes"}
            />

            {/* Damage type */}
            <SpellItem
              title={"Damage type"}
              text={spell.damage ? spell.damage.damage_type.name : "Utility"}
            />
          </div>

          <img
            src="https://ih1.redbubble.net/image.2399363407.9792/st,small,507x507-pad,600x600,f8f8f8.jpg"
            alt={spell.name}
            className="rounded-lg col-span-2 w-full h-auto object-contain"
          />
        </div>

        {/* Description */}
        <div className="mt-4">
          <h3
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Description
          </h3>

          <p className="text-muted-foreground leading-relaxed">{spell.desc}</p>
        </div>

        {/* Mateial */}
        {spell.material && spell.material.length > 1 && (
          <div className="mt-4">
            <h3
              className={`${geisCinzel.className} antialiased font-bold text-xl`}
            >
              Material
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {spell.material}
            </p>
          </div>
        )}

        {/* Higher levels */}

        {spell.higher_level && spell.higher_level.length > 1 && (
          <div className="mt-4">
            <h3
              className={`${geisCinzel.className} antialiased font-bold text-xl`}
            >
              At Higher Levels
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {spell.higher_level}
            </p>
          </div>
        )}
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
