import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  spell: DNDSpell;
  setSelectedSpell: (spell: DNDSpell) => void;
}

/**
 * SpellsCard
 *
 * Compact, clickable preview card for a single spell.
 * Used inside the spells grid.
 */
export const SpellsCard = ({ spell, setSelectedSpell }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedSpell(spell)}
      aria-label={`View details for spell ${spell.name}`}
    >
      {/* Header: Name + Level */}
      <header className="flex flex-row justify-between mb-2">
        <h2
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {spell.name}
        </h2>
        <Badge
          variant={"outline"}
          className="text-muted-foreground h-5 font-bold"
        >
          {spell.level === 0 ? "Cantrip" : `Level ${spell.level}`}
        </Badge>
      </header>

      {/* Spell tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge>{spell.school.name}</Badge>
        {spell.concentration && (
          <Badge variant="secondary">Concentration</Badge>
        )}
        {spell.ritual && <Badge variant="secondary">Ritual</Badge>}
      </div>

      {/* Short description */}
      <p className="text-sm text-muted-foreground line-clamp-2">{spell.desc}</p>
    </Card>
  );
};
