import { Circle, ShieldCheck } from "lucide-react";

interface SavingThrow {
  ability: string;
  proficient: boolean;
  modifier: number;
}

interface SavingThrowsProps {
  savingThrows: SavingThrow[];
}

export function SavingThrows({ savingThrows }: SavingThrowsProps) {
  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <div className="border-2 border-red-500/50 rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700  flex items-center gap-2 mb-3">
        <ShieldCheck className="w-4 h-4" />
        Saving Throws
      </h3>

      <div className="space-y-1.5">
        {savingThrows.map((save) => (
          <div
            key={save.ability}
            className="flex items-center gap-2 py-1 px-2 rounded hover:bg-parchment-dark/50 transition-colors"
          >
            {save.proficient ? (
              <Circle className="h-2 w-2 text-secondary-foreground/80 fill-secondary-foreground/80" />
            ) : (
              <Circle className="h-2 w-2 text-secondary-foreground/80" />
            )}

            <span className="font-medium text-sm w-8 font-serif text-ink">
              {formatModifier(save.modifier)}
            </span>
            <span className="text-sm text-muted-foreground">
              {save.ability}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
