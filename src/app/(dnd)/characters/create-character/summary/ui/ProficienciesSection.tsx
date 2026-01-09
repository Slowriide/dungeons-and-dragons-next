import { Languages, Shield, Sword, Wrench } from "lucide-react";

interface ProficienciesSectionProps {
  languages: string[];
  proficiencies: string[];
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
  return (
    <div className="fantasy-border rounded-lg p-4 bg-card">
      <h3 className="section-title flex items-center gap-2 mb-3">
        <Languages className="w-4 h-4" />
        Languages & Proficiencies
      </h3>

      <div className="space-y-4">
        {/* Languages */}
        <div>
          <div className="flex items-center gap-2 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-2">
            <Languages className="w-3 h-3 text-gold" />
            Languages
          </div>
          <div className="flex flex-wrap gap-1.5">
            {languages.map((lang) => (
              <span
                key={lang}
                className="px-2 py-0.5 text-xs rounded-full bg-gold/15 text-ink border border-gold/30"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Armor */}
        {proficiencies.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-2">
              <Shield className="w-3 h-3 text-burgundy" />
              Armor
            </div>
            <div className="flex flex-wrap gap-1.5">
              {proficiencies.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs rounded-full bg-burgundy/15 text-ink border border-burgundy/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Weapons */}
        {/* {proficiencies.weapons.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-2">
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
        )} */}

        {/* Tools */}
        {/* {proficiencies.tools.length > 0 && (
          <div>
            <div className="flex items-center gap-2 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-2">
              <Wrench className="w-3 h-3 text-brown" />
              Tools
            </div>
            <div className="flex flex-wrap gap-1.5">
              {proficiencies.tools.map((item) => (
                <span
                  key={item}
                  className="px-2 py-0.5 text-xs rounded-full bg-brown/15 text-ink border border-brown/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}
