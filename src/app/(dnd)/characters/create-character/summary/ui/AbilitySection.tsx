import { DNDCharacter } from "@/interface/character/DNDCharacter";
import { AbilityScoreCard } from "./AbilityScoreCard";

interface Props {
  attributes: DNDCharacter["attributes"];
  abilityBonuses?: DNDCharacter["abilityBonuses"];
}

// Centralized ability metadata
// Keeps labels and abbreviations consistent across the app
const ABILITY_CONFIG = {
  strength: { abbreviation: "STR", name: "Strength" },
  dexterity: { abbreviation: "DEX", name: "Dexterity" },
  constitution: { abbreviation: "CON", name: "Constitution" },
  intelligence: { abbreviation: "INT", name: "Intelligence" },
  wisdom: { abbreviation: "WIS", name: "Wisdom" },
  charisma: { abbreviation: "CHA", name: "Charisma" },
} as const;

// Calculates the D&D ability modifier from a total score
function getModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

// Ability scores section of the character sheet
// Computes final scores and modifiers, then renders each ability card
export const AbilitySection = ({ attributes, abilityBonuses }: Props) => {
  const abilities = Object.entries(ABILITY_CONFIG).map(([key, config]) => {
    const attrKey = key as keyof typeof attributes;
    const baseScore = attributes?.[attrKey] || 10;
    const bonus = abilityBonuses?.[attrKey] || 0;
    const totalScore = baseScore + bonus;
    const modifier = getModifier(totalScore);

    return {
      key: attrKey,
      abbreviation: config.abbreviation,
      name: config.name,
      score: totalScore,
      modifier: modifier,
    };
  });

  return (
    <div className="mt-6 border-2 border-red-500/50 rounded-lg p-4 bg-card">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {abilities.map((ability) => (
          <AbilityScoreCard key={ability.key} ability={ability} />
        ))}
      </div>
    </div>
  );
};
