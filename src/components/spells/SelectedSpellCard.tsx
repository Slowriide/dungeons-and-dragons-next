import { Spell } from "@/mocks/data/spells";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { geisCinzel } from "@/config/fonts";
import { Badge } from "../ui/badge";
import { DNDSpell } from "@/interface/spells/DndSpell";
import Link from "next/link";

interface Props {
  spell: DNDSpell;
  setSelectedSpell: (spell: DNDSpell | null) => void;
}
export const SelectedSpellCard = ({ setSelectedSpell, spell }: Props) => {
  return (
    <Card className="glass-card animate-fade-in p-6 gap-y-2">
      {/* Back Button */}
      <Button
        onClick={() => setSelectedSpell(null)}
        variant={"ghost"}
        className="justify-start cursor-pointer"
      >
        <ChevronLeft />
        <span>Back to list</span>
      </Button>

      {/* Image and Name */}
      <div className="flex flex-row rounded-lg overflow-hidden items-center gap-x-2">
        <img
          src="https://ih1.redbubble.net/image.2399363407.9792/st,small,507x507-pad,600x600,f8f8f8.jpg"
          alt={spell.name}
          height={50}
          width={50}
          className="rounded-lg"
        />
        <Link href={`/spells/${spell.index}`}>
          <h1
            className={`${geisCinzel.className} antialiased font-semibold text-2xl hover:underline cursor-pointer`}
          >
            {spell.name}
          </h1>
        </Link>
      </div>

      {/* Level and School */}
      <div className="flex flex-wrap gap-x-2">
        <Badge variant={"outline"}>
          {spell.level === 0 ? "Cantrip" : `Level: ${spell.level}`}
        </Badge>
        <Badge>{spell.school.name}</Badge>
        {spell.concentration && (
          <Badge variant="secondary">Concentration</Badge>
        )}
        {spell.ritual && <Badge variant="secondary">Ritual</Badge>}
      </div>

      <div className="grid grid-cols-2 mt-2 gap-y-2">
        {/* Cast time*/}
        <div className="col-span-1">
          <span className="text-muted-foreground">Casting time:</span>
          <p className="font-medium">{spell.casting_time}</p>
        </div>
        {/* Range */}
        <div>
          <span className="text-muted-foreground">Range:</span>
          <p className="font-medium">{spell.range}</p>
        </div>

        {/* Components */}
        <div>
          <span className="text-muted-foreground">Components:</span>
          <p className="font-medium">{spell.components}</p>
        </div>

        {/* Duration */}
        <div>
          <span className="text-muted-foreground">Duration:</span>
          <p className="font-medium">{spell.duration}</p>
        </div>
      </div>

      {/* Classes */}
      <div className="mt-2">
        <h3 className={`${geisCinzel.className} antialiased font-bold text-xl`}>
          Classes
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {spell.classes.map((cls) => (
            <Badge key={cls.index} variant="outline">
              {cls.name}
            </Badge>
          ))}
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

        {/* Higher levels */}

        {spell.higher_level.length > 1 && (
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
      </div>
    </Card>
  );
};
