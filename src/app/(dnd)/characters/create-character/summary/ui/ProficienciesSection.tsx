import { Languages, Shield, Sword, Wrench } from "lucide-react";

interface ProficienciesSectionProps {
  languages: string[];
  proficiencies: {
    armor: string[];
    weapons: string[];
    tools: string[];
  };
  //     {
  //     armor: string[];
  //     weapons: string[];
  //     tools: string[];
  //   };
}

export function ProficienciesSection({
  languages,
  proficiencies,
}: ProficienciesSectionProps) {
  const toolsNames = proficiencies.tools.map((prof) => {
    const tool = prof.replaceAll("-", " ");
    return tool;
  });

  return (
    <div className="border-2 border-red-500/50 rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <Languages className="w-4 h-4" />
        Languages & Proficiencies
      </h3>

      <div className="space-y-4">
        {/* Languages */}
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
            <Languages className="w-3 h-3 text-gold" />
            Languages
          </div>
          <div className="flex flex-wrap gap-1.5">
            {languages.map((lang, index) => (
              <span
                key={`${lang}-${index}`}
                className="px-2 py-0.5 text-xs rounded-full bg-yellow-600/15 text-ink border border-secondary-foreground/40 capitalize"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className="30"></div>

        {/* Armor */}
        {proficiencies.armor.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
              <Shield className="w-3 h-3 text-burgundy" />
              Armor
            </div>
            <div className="flex flex-wrap gap-1.5">
              {proficiencies.armor.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs rounded-full bg-indigo-950/15 text-ink border border-indigo-950/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Weapons */}
        {proficiencies.weapons.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
              <Sword className="w-3 h-3 text-destructive" />
              Weapons
            </div>
            <div className="flex flex-wrap gap-1.5">
              {proficiencies.weapons.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs rounded-full bg-destructive/15 text-ink border border-destructive/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tools */}
        {toolsNames.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
              <Wrench className="w-3 h-3 text-brown" />
              Tools
            </div>
            <div className="flex flex-wrap gap-1.5">
              {toolsNames.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs rounded-full bg-brown/15 text-ink border border-brown/30 capitalize"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
