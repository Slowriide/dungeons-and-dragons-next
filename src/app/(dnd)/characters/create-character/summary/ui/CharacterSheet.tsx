import { DNDCharacter } from "@/interface/character/DNDCharacter";
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
import {
  getFinalAttributes,
  getInitiative,
  getMaxHP,
} from "@/utils/characterCalculations";
import { getTotalGold } from "../../../utils/getTotalGold";
import { getArmorClass } from "../../../utils/getArmorClass";

interface CharacterSheetProps {
  character: Partial<DNDCharacter>;
}

// Main character sheet renderer
// Combines all calculated and derived data into a printable D&D-style sheet
export function CharacterSheet({ character }: CharacterSheetProps) {
  // -----------------------------
  // Tool proficiencies aggregation
  // -----------------------------
  var toolsProfs: string[] = [];

  // Base tool proficiencies
  const baseTools = character.proficiencies?.filter((prof) =>
    prof.includes("tool"),
  );

  // Selected tool proficiencies
  const selecteds = character.selectedProficiencies?.filter((prof) =>
    prof.includes("tool"),
  );

  // Tool proficiencies coming from traits
  const traitTools = character.selectedTraits?.filter((tr) =>
    tr.name.includes("Tool"),
  );

  // Instrument proficiencies from class
  const intrumentProfs = character.classProficiencies
    ?.filter((prof) => prof.type === "instrument")
    .map((prof) => prof.index);

  // Merge all tool-related proficiencies
  toolsProfs = [
    ...(baseTools ?? []),
    ...(selecteds ?? []),
    ...(traitTools?.map((t) => t.id) ?? []),
    ...(intrumentProfs ?? []),
  ];

  // -----------------------------
  // Skills & Languages
  // -----------------------------

  const skills = buildSkillsList(character);

  const langs = [
    ...(character.languages ?? []),
    ...(character.raceLanguages ?? []),
    ...(character.backgroundLanguages ?? []),
  ];

  // -----------------------------
  // Saving throws
  // -----------------------------

  const savThrowProfs = character.classProficiencies
    ?.filter((prof) => prof.type === "saving-throw")
    .map((prof) => prof.index);

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

  // -----------------------------
  // Derived combat stats
  // -----------------------------

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

  // -----------------------------
  // Equipment & economy
  // -----------------------------

  const totalGold = getTotalGold(character.gold ?? []);

  const equippedArmor = (character.equipment ?? []).find(
    (eq) => eq.type === "armor" && eq.equipped,
  );

  const ac = getArmorClass(equippedArmor?.index, finalAttributes.dexterity);

  return (
    <div className="min-h-screen parchment-bg parchment-texture">
      <div className="container mx-auto py-8 max-w-4xl">
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
              armorClass={ac}
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
              gold={totalGold}
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
      </div>
    </div>
  );
}
