import { BookOpen, Circle, CircleArrowUpIcon } from "lucide-react";

interface Skill {
  name: string;
  ability: string;
  proficient: boolean;
  modifier: number;
}

interface SkillsListProps {
  skills: Skill[];
}

export function SkillsList({ skills }: SkillsListProps) {
  const formatModifier = (mod: number) => {
    return mod >= 0 ? `+${mod}` : `${mod}`;
  };

  return (
    <div className="border-2 border-red-500/50 rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <BookOpen className="w-4 h-4" />
        Skills
      </h3>

      <div className="space-y-1">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 py-1 px-2 rounded transition-colors ${
              skill.proficient ? "bg-amber-400/10" : "hover:bg-amber-600/10"
            }`}
          >
            {skill.proficient ? (
              <Circle className="h-2 w-2 text-amber-400 fill-amber-400" />
            ) : (
              <Circle className="h-2 w-2 text-amber-400" />
            )}

            <span className="font-medium text-sm w-8 font-serif text-ink ">
              {formatModifier(skill.modifier)}
            </span>
            <span className={`text-sm flex-1 text-muted-foreground`}>
              {skill.name}
            </span>
            <span className="text-[10px] text-muted-foreground uppercase">
              {skill.ability}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
