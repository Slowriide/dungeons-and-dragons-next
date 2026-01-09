interface AbilityScoreCardProps {
  ability: {
    abbreviation: number;
    modifier: number;
    score: number;
    name: number;
  };
}

export function AbilityScoreCard({ ability }: AbilityScoreCardProps) {
  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <div className="stat-box rounded-lg p-3 text-center min-w-20">
      <span className="text-[10px] font-fantasy uppercase tracking-wider text-brown-light">
        {ability.abbreviation}
      </span>

      <div className="my-1">
        <span className="text-2xl font-bold font-fantasy text-burgundy">
          {formatModifier(ability.modifier)}
        </span>
      </div>

      <div className="w-10 h-10 mx-auto rounded-full border-2 border-brown bg-parchment-dark flex items-center justify-center">
        <span className="text-sm font-semibold text-ink">{ability.score}</span>
      </div>

      <span className="text-[9px] text-muted-foreground mt-1 block">
        {ability.name}
      </span>
    </div>
  );
}
