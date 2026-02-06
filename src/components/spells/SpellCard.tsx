import { Card } from "../ui/card";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "../ui/badge";
import { DNDSpell } from "@/interface/spells/DndSpell";
import Markdown from "react-markdown";
import Image from "next/image";

interface Props {
  spell: DNDSpell;
}
export const SpellCard = ({ spell }: Props) => {
  return (
    <article className="flex flex-col mt-4 lg:mt-10 space-y-6">
      {/* Name */}
      <header className="flex flex-row items-center space-x-4">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {spell.name}
        </h1>
      </header>

      <Card className="glass-card p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Image */}
          <section className="lg:col-span-2 order-1 lg:order-2">
            <Image
              src="/spells/spells.jpg"
              alt={`${spell.name} spell illustration`}
              width={400}
              height={400}
              className="rounded-lg col-span-2 w-full h-auto object-contain"
            />
          </section>

          {/* Info */}
          <section className="lg:col-span-3 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
          </section>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h2
            className={`${geisCinzel.className} antialiased font-bold text-xl`}
          >
            Description
          </h2>
          <div className="leading-relaxed">
            <Markdown>{spell.desc.join("\n\n")}</Markdown>
          </div>
        </div>

        {/* Mateial */}
        {spell.material && spell.material.length > 1 && (
          <div className="mt-4">
            <h2
              className={`${geisCinzel.className} antialiased font-bold text-xl`}
            >
              Material
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {spell.material}
            </p>
          </div>
        )}

        {/* Higher levels */}

        {spell.higher_level && spell.higher_level.length > 1 && (
          <div className="mt-4">
            <h2
              className={`${geisCinzel.className} antialiased font-bold text-xl`}
            >
              At Higher Levels
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {spell.higher_level}
            </p>
          </div>
        )}
      </Card>
    </article>
  );
};

const SpellItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <dl className="col-span-1">
      <dt className="font-bold">{title}</dt>
      <dd>{text}</dd>
    </dl>
  );
};
