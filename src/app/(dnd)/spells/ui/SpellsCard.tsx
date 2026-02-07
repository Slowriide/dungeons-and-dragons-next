import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  spell: DNDSpell;
  setSelectedSpell: (spell: DNDSpell) => void;
}

export const SpellsCard = ({ spell, setSelectedSpell }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedSpell(spell)}
    >
      <div className="flex flex-row justify-between mb-2">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {spell.name}
        </p>
        <Badge
          variant={"outline"}
          className="text-muted-foreground h-5 font-bold"
        >
          {spell.level === 0 ? "Cantrip" : `Level ${spell.level}`}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        <Badge>{spell.school.name}</Badge>
        {spell.concentration && (
          <Badge variant="secondary">Concentration</Badge>
        )}
        {spell.ritual && <Badge variant="secondary">Ritual</Badge>}
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2">{spell.desc}</p>
    </Card>
  );
};
