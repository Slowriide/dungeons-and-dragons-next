import { create } from "zustand";
import {
  Alignment,
  CharacterClass,
  CharacterRace,
  DNDCharacter,
  Size,
  Trait,
} from "@/interface/character/DNDCharacter";
import { persist } from "zustand/middleware";
import { Proficiencies } from "@/data/Backgrounds";
import { Proficiency } from "../interface/classes/DnDClass";

type CharacterState = {
  character: Partial<DNDCharacter> & {
    currentStep: number;
  };

  // Métodos para actualizar datos básicos
  setName: (name: string) => void;
  setRace: (race: CharacterRace) => void;
  setClass: (characterClass: CharacterClass) => void;
  setLevel: (level: number) => void;
  setHitPoints: (hit_points: number) => void;
  setSpeed: (speed: number) => void;
  setSize: (size: string) => void;
  setAlignment: (alignment: Alignment) => void;

  // Métodos para atributos
  setAttributes: (attributes: DNDCharacter["attributes"]) => void;
  setAttribute: (attr: keyof DNDCharacter["attributes"], value: number) => void;

  setAbilityBonuses: (attributeBonuses: DNDCharacter["abilityBonuses"]) => void;
  setAttributeBonus: (
    attr: keyof DNDCharacter["abilityBonuses"],
    value: number
  ) => void;

  // Métodos para background
  setBackground: (background: string) => void;
  setBackgroundSelections: (
    selections: Partial<DNDCharacter["backgroundSelections"]>
  ) => void;
  setSpecialty: (specialty: string) => void;
  setIdeal: (ideals: string) => void;
  setPersonalityTrait: (personalityTraits: string) => void;
  setBond: (bonds: string) => void;
  setFlaw: (flaws: string) => void;

  // Métodos para características de clase
  setClassFeatures: (features: string[]) => void;
  addClassFeature: (feature: string) => void;
  setClassWeaponProficiencies: (proficiencies: string[]) => void;

  // Métodos para características de clase
  setSelectedTraits: (traits: Trait[]) => void;
  setRaceTraits: (traits: Trait[]) => void;
  addTrait: (trais: Trait) => void;

  // Métodos para habilidades (skills)
  setSkills: (skills: Record<string, number>) => void;
  setSkill: (skill: string, value: number) => void;

  // Métodos para proficiencies
  setProficiencies: (proficiencies: string[]) => void;
  addProficiency: (proficiencie: string) => void;

  setSelectedProficiencies: (selectedProficiencies: string[]) => void;
  addSelectedProficiency: (selectedProficiencie: string) => void;

  // Helper para obtener TODAS las proficiencies
  getAllProficiencies: () => string[];

  // Métodos para equipamiento
  setEquipment: (equipment: DNDCharacter["equipment"]) => void;
  addWeapon: (weapon: string) => void;
  addItem: (item: string) => void;
  addItems: (items: string[]) => void;
  setArmor: (armor: string | null) => void;
  setGold: (gold: number) => void;

  // Métodos para idiomas
  setLanguages: (languages: string[]) => void;
  addLanguage: (language: string) => void;

  // Control de pasos
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;

  // Utilidades
  updateCharacter: (updates: Partial<DNDCharacter>) => void;
  resetCharacter: () => void;
  isCharacterComplete: () => boolean;
  getProgress: () => number;
};

const initialCharacterState: Partial<DNDCharacter> & { currentStep: number } = {
  index: "",
  name: "",
  hit_points: 0,
  characterClass: undefined,
  race: undefined,
  level: 1,
  background: undefined,
  attributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  class_features: [],
  class_weapon_proficiencies: [],
  skills: {},
  equipment: {
    weapons: [],
    armor: null,
    items: [],
    gold: 0,
  },
  currentStep: 1,
};

const useDNDCharacterStore = create<CharacterState>()(
  persist(
    (set, get) => ({
      character: initialCharacterState,

      setName: (name) =>
        set((state) => ({
          character: { ...state.character, name },
        })),

      setRace: (race) =>
        set((state) => ({
          character: { ...state.character, race },
        })),

      setClass: (characterClass) =>
        set((state) => ({
          character: { ...state.character, characterClass },
        })),

      setLevel: (level) =>
        set((state) => ({
          character: { ...state.character, level },
        })),

      setSpeed: (speed) =>
        set((state) => ({
          character: { ...state.character, speed },
        })),

      setSize: (size) =>
        set((state) => ({
          character: { ...state.character, size },
        })),

      setAlignment: (alignment) =>
        set((state) => ({
          character: { ...state.character, alignment },
        })),

      setHitPoints: (hit_points) =>
        set((state) => ({
          character: { ...state.character, hit_points },
        })),

      // Atributos
      setAttributes: (attributes) =>
        set((state) => ({
          character: { ...state.character, attributes },
        })),

      setAttribute: (attr, value) =>
        set((state) => ({
          character: {
            ...state.character,
            attributes: {
              ...state.character.attributes!,
              [attr]: value,
            },
          },
        })),

      setAbilityBonuses: (bonuses) =>
        set((state) => ({
          character: { ...state.character, abilityBonuses: bonuses },
        })),

      setAttributeBonus: (attr, value) =>
        set((state) => ({
          character: {
            ...state.character,
            attributeBonuses: {
              ...state.character.attributes!,
              [attr]: value,
            },
          },
        })),

      // Background
      setBackground: (background) =>
        set((state) => ({
          character: { ...state.character, background },
        })),

      setBackgroundSelections: (selections) =>
        set((state) => ({
          character: {
            ...state.character,
            backgroundSelections: {
              ...state.character.backgroundSelections,
              ...selections,
            },
          },
        })),

      setSpecialty: (specialty: string) =>
        set((state) => ({
          character: {
            ...state.character,
            backgroundSelections: {
              ...state.character.backgroundSelections,
              specialty,
            },
          },
        })),

      setPersonalityTrait: (personalityTrait: string) =>
        set((state) => ({
          character: {
            ...state.character,
            backgroundSelections: {
              ...state.character.backgroundSelections,
              personalityTrait,
            },
          },
        })),

      setIdeal: (ideal: string) =>
        set((state) => ({
          character: {
            ...state.character,
            backgroundSelections: {
              ...state.character.backgroundSelections,
              ideal,
            },
          },
        })),

      setBond: (bond: string) =>
        set((state) => ({
          character: {
            ...state.character,
            backgroundSelections: {
              ...state.character.backgroundSelections,
              bond,
            },
          },
        })),

      setFlaw: (flaw: string) =>
        set((state) => ({
          character: {
            ...state.character,
            backgroundSelections: {
              ...state.character.backgroundSelections,
              flaw,
            },
          },
        })),

      // Características de clase
      setClassFeatures: (features) =>
        set((state) => ({
          character: { ...state.character, class_features: features },
        })),

      addClassFeature: (feature) =>
        set((state) => ({
          character: {
            ...state.character,
            class_features: [
              ...(state.character.class_features || []),
              feature,
            ],
          },
        })),

      setClassWeaponProficiencies: (proficiencies) =>
        set((state) => ({
          character: {
            ...state.character,
            class_weapon_proficiencies: proficiencies,
          },
        })),

      // Traits
      setSelectedTraits: (traits) =>
        set((state) => ({
          character: { ...state.character, traits: traits },
        })),

      setRaceTraits: (raceTraits: Trait[]) =>
        set((state) => ({
          character: { ...state.character, raceTraits },
        })),

      addTrait: (trait) =>
        set((state) => ({
          character: {
            ...state.character,
            traits: [...(state.character.selectedTraits || []), trait],
          },
        })),

      // Habilidades (skills)
      setSkills: (skills) =>
        set((state) => ({
          character: { ...state.character, skills },
        })),

      setSkill: (skill, value) =>
        set((state) => ({
          character: {
            ...state.character,
            skills: {
              ...state.character.skills,
              [skill]: value,
            },
          },
        })),

      // proficiencies
      setProficiencies: (proficiencies) =>
        set((state) => ({
          character: { ...state.character, proficiencies },
        })),

      addProficiency: (proficiency) =>
        set((state) => ({
          character: {
            ...state.character,
            Proficiencies: {
              ...state.character.proficiencies,
              proficiency,
            },
          },
        })),

      setSelectedProficiencies: (selectedProficiencies) =>
        set((state) => ({
          character: { ...state.character, selectedProficiencies },
        })),

      addSelectedProficiency: (selectedProficiency) =>
        set((state) => ({
          character: {
            ...state.character,
            Proficiencies: {
              ...state.character.selectedProficiencies,
              selectedProficiency,
            },
          },
        })),

      // Helper para obtener TODAS las proficiencies
      getAllProficiencies: () => {
        const { proficiencies, selectedProficiencies } = get().character;
        return [...(proficiencies || []), ...(selectedProficiencies || [])];
      },

      // Equipamiento
      setEquipment: (equipment) =>
        set((state) => ({
          character: { ...state.character, equipment },
        })),

      addWeapon: (weapon) =>
        set((state) => ({
          character: {
            ...state.character,
            equipment: {
              ...state.character.equipment!,
              weapons: [...(state.character.equipment?.weapons || []), weapon],
            },
          },
        })),

      addItem: (item) =>
        set((state) => ({
          character: {
            ...state.character,
            equipment: {
              ...state.character.equipment!,
              items: [...(state.character.equipment?.items || []), item],
            },
          },
        })),

      addItems: (items: string[]) =>
        set((state) => ({
          character: {
            ...state.character,
            equipment: {
              ...state.character.equipment!,
              items: [...(state.character.equipment?.items || []), ...items],
            },
          },
        })),

      setArmor: (armor) =>
        set((state) => ({
          character: {
            ...state.character,
            equipment: {
              ...state.character.equipment!,
              armor,
            },
          },
        })),

      setLanguages: (langs) =>
        set((state) => ({
          character: {
            ...state.character,
            languages: langs,
          },
        })),

      addLanguage: (lang) =>
        set((state) => ({
          character: {
            ...state.character,
            languages: [...(state.character.languages || []), lang],
          },
        })),

      setGold: (gold) =>
        set((state) => ({
          character: {
            ...state.character,
            equipment: {
              ...state.character.equipment!,
              gold,
            },
          },
        })),

      // Control de pasos
      setCurrentStep: (step) =>
        set((state) => ({
          character: { ...state.character, currentStep: step },
        })),

      nextStep: () =>
        set((state) => ({
          character: {
            ...state.character,
            currentStep: state.character.currentStep + 1,
          },
        })),

      prevStep: () =>
        set((state) => ({
          character: {
            ...state.character,
            currentStep: Math.max(1, state.character.currentStep - 1),
          },
        })),

      updateCharacter: (updates) =>
        set((state) => ({
          character: { ...state.character, ...updates },
        })),

      resetCharacter: () =>
        set((state) => ({
          character: initialCharacterState,
        })),

      isCharacterComplete: () => {
        const char = get().character;
        return !!(
          char.name &&
          char.race &&
          char.characterClass &&
          char.background &&
          char.attributes &&
          char.equipment
        );
      },

      getProgress: () => {
        const char = get().character;
        let completed = 0;
        const totalSteps = 7;

        if (char.name) completed++;
        if (char.race) completed++;
        if (char.characterClass) completed++;
        if (char.attributes && char.attributes.strength !== 10) completed++;
        if (char.background) completed++;
        if (char.skills && Object.keys(char.skills).length > 0) completed++;
        if (char.equipment && char.equipment.weapons.length > 0) completed++;

        return Math.round((completed / totalSteps) * 100);
      },
    }),
    {
      name: "dnd-character-storage",
      version: 2,
    }
  )
);

export default useDNDCharacterStore;
