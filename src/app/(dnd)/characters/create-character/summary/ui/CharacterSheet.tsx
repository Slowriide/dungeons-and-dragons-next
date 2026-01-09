import { DNDCharacter } from "@/interface/character/DNDCharacter";
import { CharacterHeader } from "./CharacterHeader";
import { CombatStats } from "./CombatStats";
import { PersonalitySection } from "./PersonalitySection";
import { ProficienciesSection } from "./ProficienciesSection";

interface CharacterSheetProps {
  character: Partial<DNDCharacter>;
}

export function CharacterSheet({ character }: CharacterSheetProps) {
  return (
    <div className="min-h-screen parchment-bg parchment-texture">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <CharacterHeader
          name={character.name ?? ""}
          class={character.characterClass ?? ""}
          level={character.level ?? 1}
          race={character.race ?? ""}
          background={character.background ?? ""}
          alignment={character.alignment ?? ""}
          experiencePoints={132}
        />

        {/* Ability Scores Row */}
        <div className="mt-6 fantasy-border rounded-lg p-4 bg-card">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {/* {character.attributes.map((ability) => (
              <AbilityScoreCard key={ability.name} ability={ability} />
            ))} */}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Combat Stats */}
          <div className="space-y-6">
            <CombatStats
              armorClass={12}
              initiative={12}
              speed={character.speed ?? 0}
              hitPoints={character.hit_points ?? 0}
              hitDice={12}
              proficiencyBonus={12}
            />
            {/* <SavingThrows savingThrows={character.savingThrows} /> */}
          </div>

          {/* Center Column - Skills & Traits */}
          <div className="space-y-6">
            {/* <SkillsList skills={character.skills} /> */}
            {/* <TraitsSection traits={character.traits} /> */}
          </div>

          {/* Right Column - Equipment, Personality, Proficiencies */}
          <div className="space-y-6">
            {/* <EquipmentSection equipment={character.equipment} /> */}
            <PersonalitySection
              personality={
                character.backgroundSelections ?? {
                  personalityTrait: "",
                  ideal: "",
                  bond: "",
                  flaw: "",
                }
              }
            />
            <ProficienciesSection
              languages={character.languages ?? []}
              proficiencies={character.proficiencies ?? []}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="h-0.5 w-64 mx-auto bg-linear-to-r from-transparent via-gold/50 to-transparent mb-4" />
          <p className="text-xs text-muted-foreground font-fantasy tracking-wider">
            D&D 5e Character Sheet
          </p>
        </div>
      </div>
    </div>
  );
}
