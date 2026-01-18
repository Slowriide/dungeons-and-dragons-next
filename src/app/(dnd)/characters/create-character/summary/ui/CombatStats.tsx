import { Shield, Zap, Footprints, Heart, Dices, Star } from "lucide-react";

interface CombatStatsProps {
  armorClass: number;
  initiative: number;
  speed: number;
  hitPoints: number;
  hitDice: number;
  proficiencyBonus: number;
}

export function CombatStats({
  armorClass,
  initiative,
  speed,
  hitPoints,
  hitDice,
  proficiencyBonus,
}: CombatStatsProps) {
  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };
  const hpPercentage = (12 / hitPoints) * 100;

  return (
    <div className="space-y-4 ">
      <h3 className="border-b border-b-red-700  flex items-center gap-2">
        <Shield className="w-4 h-4" />
        Combat
      </h3>

      {/* Top row - AC, Initiative, Speed */}
      <div className="grid grid-cols-3 gap-3">
        <div className="border-2 border-red-700 rounded-lg p-3 text-center">
          <Shield className="w-5 h-5 mx-auto text-amber-400 mb-1" />
          <span className="text-2xl font-bold font-serif text-ink">
            {armorClass}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
            Armor Class
          </span>
        </div>

        <div className="border-2 border-red-700 rounded-lg p-3 text-center">
          <Zap className="w-5 h-5 mx-auto text-amber-400 mb-1" />
          <span className="text-2xl font-bold font-serif text-ink">
            {formatModifier(initiative)}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
            Initiative
          </span>
        </div>

        <div className="border-2 border-red-700 rounded-lg p-3 text-center">
          <Footprints className="w-5 h-5 mx-auto text-amber-400 mb-1" />
          <span className="text-2xl font-bold font-serif text-ink">
            {speed}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
            Speed (ft)
          </span>
        </div>
      </div>

      {/* Hit Points */}
      <div className="border-2 border-red-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-destructive" />
            <span className="text-xs font-serif uppercase tracking-wider text-muted-foreground">
              Hit Points
            </span>
          </div>
        </div>

        <div className="flex items-baseline gap-1 justify-center mb-2">
          <span className="text-3xl font-bold font-serif text-ink">
            {hitPoints}
          </span>
          <span className="text-lg text-muted-foreground">/</span>
          <span className="text-lg text-muted-foreground">{hitPoints}</span>
        </div>

        {/* HP Bar */}
        <div className="h-3 bg-parchment-dark rounded-full overflow-hidden border border-brown/30">
          <div
            className="h-full transition-all duration-300 rounded-full"
            style={{
              width: `${hpPercentage}%`,
              background:
                hpPercentage > 50
                  ? "linear-gradient(90deg, hsl(120 40% 35%), hsl(100 45% 40%))"
                  : hpPercentage > 25
                  ? "linear-gradient(90deg, hsl(45 80% 45%), hsl(35 85% 50%))"
                  : "linear-gradient(90deg, hsl(0 65% 45%), hsl(15 70% 50%))",
            }}
          />
        </div>
      </div>

      {/* Bottom row - Hit Dice & Proficiency */}
      <div className="grid grid-cols-2 gap-3">
        <div className="border-2 border-red-700 rounded-lg p-3 text-center">
          <Dices className="w-5 h-5 mx-auto text-amber-400 mb-1" />
          <span className="text-lg font-bold font-serif text-ink">
            {hitDice}
          </span>

          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block mt-1">
            Hit Dice
          </span>
        </div>

        <div className="border-2 border-red-700 rounded-lg p-3 text-center">
          <Star className="w-5 h-5 mx-auto text-amber-400 mb-1" />
          <span className="text-2xl font-bold font-serif text-ink">
            +{proficiencyBonus}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">
            Proficiency
          </span>
        </div>
      </div>
    </div>
  );
}
