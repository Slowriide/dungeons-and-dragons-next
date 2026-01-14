// components/character-sheet/SkillsSection.tsx
import {
  CharacterSkill,
  DNDCharacter,
} from "@/interface/character/DNDCharacter";

interface Props {
  skills: CharacterSkill[];
  attributes: DNDCharacter["attributes"];
  abilityBonuses?: DNDCharacter["abilityBonuses"];
  level: number;
}

function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

function getProficiencyBonus(level: number): number {
  return Math.floor((level - 1) / 4) + 2;
}

export function SkillsSection({
  skills,
  attributes,
  abilityBonuses,
  level,
}: Props) {
  const proficiencyBonus = getProficiencyBonus(level);

  const getTotalAttribute = (attr: keyof typeof attributes) => {
    const base = attributes[attr];
    const bonus = abilityBonuses?.[attr] || 0;
    return base + bonus;
  };

  const getSkillBonus = (skill: CharacterSkill) => {
    const abilityScore = getTotalAttribute(
      skill.attribute as keyof typeof attributes
    );
    const abilityMod = getModifier(abilityScore);
    const profBonus = skill.proficient ? proficiencyBonus : 0;
    return abilityMod + profBonus;
  };

  // Agrupar por atributo
  const skillsByAttribute = skills.reduce((acc, skill) => {
    if (!acc[skill.attribute]) {
      acc[skill.attribute] = [];
    }
    acc[skill.attribute].push(skill);
    return acc;
  }, {} as Record<string, CharacterSkill[]>);

  return (
    <div className="fantasy-border rounded-lg p-4 bg-card">
      <h3 className="section-title mb-3">Skills</h3>

      <div className="space-y-4">
        {Object.entries(skillsByAttribute).map(
          ([attribute, attributeSkills]) => (
            <div key={attribute}>
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-2">
                {attribute}
              </h4>
              <div className="space-y-1">
                {attributeSkills.map((skill) => {
                  const total = getSkillBonus(skill);
                  const formatted = total >= 0 ? `+${total}` : `${total}`;
                  const abilityScore = getTotalAttribute(
                    skill.attribute as keyof typeof attributes
                  );
                  const abilityMod = getModifier(abilityScore);

                  return (
                    <div
                      key={skill.index}
                      className={`flex items-center justify-between py-1.5 px-2 rounded text-sm ${
                        skill.proficient
                          ? "bg-blue-50 font-medium"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.proficient ? (
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                        ) : (
                          <span className="w-2 h-2 rounded-full border border-muted" />
                        )}
                        <span>{skill.name}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          ({abilityMod >= 0 ? "+" : ""}
                          {abilityMod}
                          {skill.proficient && ` +${proficiencyBonus}`})
                        </span>
                        <span className="font-bold min-w-8 text-right">
                          {formatted}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-muted">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span>Proficient (+{proficiencyBonus})</span>
        </div>
      </div>
    </div>
  );
}
