interface AbilityScoreCardProps {
  ability: {
    abbreviation: string;
    modifier: number;
    score: number;
    name: string;
  };
}

// Single ability display card
// Shows abbreviation, modifier and final score in a compact D&D-style layout
export function AbilityScoreCard({ ability }: AbilityScoreCardProps) {
  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <div className="border-2 border-red-700 rounded-lg p-3 text-center flex-1">
      <span className="text-[14px] font-serif uppercase tracking-wider">
        {ability.abbreviation}
      </span>

      <div className="my-1">
        <span className="text-2xl font-bold ">
          {formatModifier(ability.modifier)}
        </span>
      </div>

      <div className="w-10 h-10 mx-auto rounded-full border-2 border-red-700 flex items-center justify-center">
        <span className="text-sm font-semibold text-ink">{ability.score}</span>
      </div>

      <span className="text-[12px] text-muted-foreground mt-1 block">
        {ability.name}
      </span>
    </div>
  );
}
