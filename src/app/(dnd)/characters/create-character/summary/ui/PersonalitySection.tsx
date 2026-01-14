import { Scroll, Heart, Link, AlertTriangle } from "lucide-react";

interface PersonalitySectionProps {
  personality: {
    specialty?: string | undefined;
    personalityTrait?: string;
    ideal?: string;
    bond?: string;
    flaw?: string;
  };
}

export function PersonalitySection({ personality }: PersonalitySectionProps) {
  return (
    <div className="border-2 border-red-500/50  rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <Scroll className="w-4 h-4 " />
        Personality
      </h3>

      <div className="space-y-4">
        {/* Personality Traits */}
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
            <Scroll className="w-3 h-3 text-amber-400" />
            Traits
          </div>
          <div className="space-y-2">
            <p className="text-sm font-manuscript italic text-ink leading-relaxed pl-3 border-l-2 border-amber-400">
              "{personality.personalityTrait}"
            </p>
          </div>
        </div>

        {/* Ideals */}
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
            <Heart className="w-3 h-3 text-amber-400" />
            Ideals
          </div>
          <p className="text-sm font-manuscript italic text-ink leading-relaxed pl-3 border-l-2 border-amber-400">
            "{personality.ideal}"
          </p>
        </div>

        {/* Bonds */}
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
            <Link className="w-3 h-3 text-amber-400" />
            Bonds
          </div>
          <p className="text-sm font-manuscript italic text-ink leading-relaxed pl-3 border-l-2 border-amber-400">
            "{personality.bond}"
          </p>
        </div>

        {/* Flaws */}
        <div>
          <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
            <AlertTriangle className="w-3 h-3 text-destructive" />
            Flaws
          </div>
          <p className="text-sm font-manuscript italic text-ink leading-relaxed pl-3 border-l-2 border-destructive/30">
            "{personality.flaw}"
          </p>
        </div>
      </div>
    </div>
  );
}
