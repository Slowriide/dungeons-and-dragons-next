import { BookOpen, Circle } from "lucide-react";

interface Skill {
  /** Skill name (Acrobatics, Stealth, etc.) */
  name: string;

  /** Related ability (STR, DEX, etc.) */
  ability: string;

  /** Whether the character is proficient in this skill */
  proficient: boolean;

  /** Final skill modifier */
  modifier: number;
}

interface SkillsListProps {
  /** List of calculated character skills */
  skills: Skill[];
}

// Skills section
// Displays all skills with proficiency indicator, modifier and linked ability
export function SkillsList({ skills }: SkillsListProps) {
  // Formats numeric modifiers using D&D notation
  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <div className="border-2 border-red-500/50 rounded-lg p-4 bg-card">
      {/* Section header */}
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4" />
        Skills
      </h3>

      {/* Skills list */}
      <div className="space-y-1">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 py-1 px-2 rounded transition-colors ${
              skill.proficient
                ? "bg-secondary-foreground/10"
                : "hover:bg-secondary-foreground/10"
            }`}
          >
            {/* Proficiency indicator */}
            {skill.proficient ? (
              <Circle className="h-2 w-2 text-secondary-foreground/80 fill-secondary-foreground/80" />
            ) : (
              <Circle className="h-2 w-2 text-secondary-foreground/80" />
            )}

            {/* Modifier */}
            <span className="font-medium text-sm w-8 font-serif text-ink">
              {formatModifier(skill.modifier)}
            </span>

            {/* Skill name */}
            <span className="text-sm flex-1 text-muted-foreground">
              {skill.name}
            </span>

            {/* Linked ability */}
            <span className="text-[10px] text-muted-foreground uppercase">
              {skill.ability}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
