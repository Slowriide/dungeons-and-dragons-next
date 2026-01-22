import {
  CharacterSkill,
  DNDCharacter,
} from "@/interface/character/DNDCharacter";
import { CharacterHeader } from "./CharacterHeader";
import { CombatStats } from "./CombatStats";
import { PersonalitySection } from "./PersonalitySection";
import { ProficienciesSection } from "./ProficienciesSection";
import { AbilitySection } from "./AbilitySection";
import { EquipmentSection } from "./equipment/EquipmentSection";
import { buildCharacterTraits } from "@/utils/buildCharacterTraits";
import { TraitsSection } from "./TraitsSection";
import { SkillsList } from "./SkillsList";
import { buildSkillsList } from "../../../utils/buildSkillsList";
import { buildSavingThrows } from "../../../utils/buildSavingTrows";
import { SavingThrows } from "./SavingThrows";
import useDNDCharacterStore from "@/store/characte.store";
import {
  getFinalAttributes,
  getInitiative,
  getMaxHP,
  getModifier,
} from "@/utils/characterCalculations";

interface CharacterSheetProps {
  character: Partial<DNDCharacter>;
}

export function CharacterSheet({ character }: CharacterSheetProps) {
  var toolsProfs: string[] = [];

  const some = character.proficiencies?.filter((prof) => prof.includes("tool"));
  const selecteds = character.selectedProficiencies?.filter((prof) =>
    prof.includes("tool"),
  );
  const hasOther = character.selectedTraits?.filter((tr) =>
    tr.name.includes("Tool"),
  );

  console.log(character.selectedTraits);

  toolsProfs = [
    ...(some ?? []),
    ...(selecteds ?? []),
    ...(hasOther?.map((t) => t.id) ?? []),
  ];

  // console.log(toolsProfs);

  const skills = buildSkillsList(character);

  const savThrowProfs = character.proficiencies?.filter((prof) =>
    prof.startsWith("saving-throw"),
  );

  const langs = [
    ...(character.languages ?? []),
    ...(character.raceLanguages ?? []),
    ...(character.backgroundLanguages ?? []),
  ];

  const savingThrows = buildSavingThrows({
    attributes: character.attributes ?? {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
    savingThrowProficiencies: savThrowProfs ?? [],
    proficiencyBonus: character.proficiencyBonus ?? 0,
  });

  const finalAttributes = getFinalAttributes(
    character.attributes ?? {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
    character.abilityBonuses ?? {
      charisma: 0,
      constitution: 0,
      dexterity: 0,
      intelligence: 0,
      strength: 0,
      wisdom: 0,
    },
  );
  const initiative = getInitiative(finalAttributes.dexterity);

  const maxHP = getMaxHP(
    character.hit_die || 8,
    character.level || 1,
    finalAttributes.constitution,
  );

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

        <AbilitySection
          attributes={
            character.attributes ?? {
              charisma: 0,
              constitution: 0,
              dexterity: 0,
              intelligence: 0,
              strength: 0,
              wisdom: 0,
            }
          }
          abilityBonuses={character.abilityBonuses}
        />

        {/* Main Content Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Combat Stats */}
          <div className="space-y-6">
            <CombatStats
              armorClass={12}
              initiative={initiative}
              speed={character.speed ?? 0}
              hitPoints={maxHP}
              hitDice={character.hit_die ?? 0}
              proficiencyBonus={character.proficiencyBonus ?? 2}
            />
            <SavingThrows savingThrows={savingThrows} />
            <ProficienciesSection
              languages={langs ?? []}
              proficiencies={{
                armor: character.class_armor_proficiencies ?? [],
                weapons: character.class_weapon_proficiencies ?? [],
                tools: toolsProfs,
              }}
            />
          </div>

          {/* Center Column - Skills & Traits */}
          <div className="space-y-6">
            <SkillsList skills={skills} />
            <TraitsSection traits={buildCharacterTraits(character)} />
          </div>

          {/* Right Column - Equipment, Personality, Proficiencies */}
          <div className="space-y-6">
            <EquipmentSection
              equipment={character.equipment ?? []}
              gold={character.gold || 0}
            />
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
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="h-0.5 w-64 mx-auto bg-linear-to-r from-transparent via-gold/50 to-transparent mb-4" />
          <p className="text-xs text-muted-foreground font-serif tracking-wider">
            D&D 5e Character Sheet
          </p>
        </div>
      </div>
    </div>
  );
}
