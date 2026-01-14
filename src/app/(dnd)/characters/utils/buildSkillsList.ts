import { DND_SKILLS } from "@/data/skills";
import { DNDCharacter } from "@/interface/character/DNDCharacter";

interface Skill {
  name: string;
  ability: string;
  proficient: boolean;
  modifier: number;
}

export function buildSkillsList(character: Partial<DNDCharacter>): Skill[] {
  const profBonus = character.proficiencyBonus ?? 0;

  // ["skill-stealth", { name: "Stealth", attribute: "DEX" }],
  return Object.entries(DND_SKILLS).map(([index, skill]) => {
    const charSkill = character.skills?.find((s) => s.index === index);

    const prof = Boolean(charSkill);

    const abilityMod =
      character.attributes?.[
        skill.attribute.toLowerCase() as keyof typeof character.attributes
      ] ?? 0;

    return {
      name: skill.name,
      ability: skill.attribute,
      proficient: prof,
      modifier: abilityMod + (prof ? profBonus! : 0),
    };
  });
}
