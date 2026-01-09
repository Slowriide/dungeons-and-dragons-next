import { Crown, Scroll, User, Compass } from "lucide-react";

interface CharacterHeaderProps {
  name: string;
  class: string;
  level: number;
  race: string;
  background: string;
  alignment: string;
  experiencePoints: number;
}

export function CharacterHeader({
  name,
  class: characterClass,
  level,
  race,
  background,
  alignment,
  experiencePoints,
}: CharacterHeaderProps) {
  return (
    <div className="fantasy-border rounded-lg p-6 bg-card parchment-texture">
      <div className="relative">
        {/* Decorative corners */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold/50" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold/50" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold/50" />

        {/* Character Name */}
        <div className="text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-fantasy font-bold text-ink tracking-wide text-shadow-sm">
            {name}
          </h1>
          <div className="mt-2 h-0.5 w-48 mx-auto bg-linear-to-r from-transparent via-gold to-transparent" />
        </div>

        {/* Character Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-1">
              <Crown className="w-3 h-3 text-gold" />
              Class & Level
            </div>
            <p className="text-lg font-fantasy font-semibold text-ink">
              {characterClass} {level}
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-1">
              <User className="w-3 h-3 text-gold" />
              Race
            </div>
            <p className="text-lg font-fantasy font-semibold text-ink">
              {race}
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-1">
              <Scroll className="w-3 h-3 text-gold" />
              Background
            </div>
            <p className="text-lg font-fantasy font-semibold text-ink">
              {background}
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-1">
              <Compass className="w-3 h-3 text-gold" />
              Alignment
            </div>
            <p className="text-lg font-fantasy font-semibold text-ink">
              {alignment}
            </p>
          </div>

          <div className="text-center col-span-2 md:col-span-1 lg:col-span-2">
            <div className="text-xs font-fantasy uppercase tracking-wider text-muted-foreground mb-1">
              Experience Points
            </div>
            <p className="text-lg font-fantasy font-semibold text-gold">
              {experiencePoints.toLocaleString()} XP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
