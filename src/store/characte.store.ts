import { create } from "zustand";
import {
  Alignment,
  CharacterClass,
  CharacterRace,
  CharacterSkill,
  DNDCharacter,
  Equipment,
  Size,
  Trait,
} from "@/interface/character/DNDCharacter";
import { persist } from "zustand/middleware";

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
  setHitDie: (hit_die: number) => void;
  setSpeed: (speed: number) => void;
  setIniciative: (iniciative: number) => void;
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
  setProficiencyBonus: (profBonus: number) => void;

  // Métodos para background
  setBackground: (background: string) => void;
  setBackgroundSelections: (
    selections: Partial<DNDCharacter["backgroundSelections"]>
  ) => void;
  setbackgroundTraits: (background: Trait) => void;
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
  setSkills: (skills: CharacterSkill[]) => void;
  setSkill: (skill: CharacterSkill) => void;
  toggleSkillProficiency: (skillIndex: string) => void;

  // Métodos para proficiencies
  setProficiencies: (proficiencies: string[]) => void;
  addProficiency: (proficiencie: string) => void;

  setSelectedProficiencies: (selectedProficiencies: string[]) => void;
  addSelectedProficiency: (selectedProficiencie: string) => void;

  // Helper para obtener TODAS las proficiencies
  getAllProficiencies: () => string[];

  // Métodos para equipamiento
  addEquipment: (equipment: Equipment) => void;
  removeEquipment: (index: string) => void;
  toggleEquiped: (index: string) => void;
  updateQuantity: (index: string, quantiy: number) => void;

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
  abilityBonuses: {},
  class_features: [],
  class_weapon_proficiencies: [],
  skills: [],
  raceTraits: [],
  selectedTraits: [],
  proficiencies: [],
  selectedProficiencies: [],
  languages: [],
  equipment: [],
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

      setIniciative: (iniciative) =>
        set((state) => ({
          character: { ...state.character, iniciative },
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

      setHitDie: (hit_die) =>
        set((state) => ({
          character: { ...state.character, hit_die },
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

      setProficiencyBonus: (proficiencyBonus) =>
        set((state) => ({
          character: { ...state.character, proficiencyBonus },
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

      setbackgroundTraits: (traits) =>
        set((state) => ({
          character: { ...state.character, backgroundTraits: traits },
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
          character: { ...state.character, selectedTraits: traits },
        })),

      setRaceTraits: (raceTraits: Trait[]) =>
        set((state) => ({
          character: { ...state.character, raceTraits },
        })),

      addTrait: (trait) =>
        set((state) => ({
          character: {
            ...state.character,
            selectedTraits: [...(state.character.selectedTraits ?? []), trait],
          },
        })),

      // Habilidades (skills)
      setSkills: (skills) =>
        set((state) => ({
          character: { ...state.character, skills },
        })),

      setSkill: (skill) =>
        set((state) => {
          const exists = state.character.skills?.some(
            (sk) => sk.index === skill.index
          );
          if (exists) return state;
          return {
            character: {
              ...state.character,
              skills: [...(state.character.skills || []), skill],
            },
          };
        }),

      toggleSkillProficiency: (skill) =>
        set((state) => ({
          character: {
            ...state.character,
            skills:
              state.character.skills?.map((s) =>
                s.index === skill ? { ...s, proficient: !s.proficient } : s
              ) || [],
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
            proficiencies: [
              ...(state.character.proficiencies ?? []),
              proficiency,
            ],
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
            selectedProficiencies: [
              ...(state.character.selectedProficiencies ?? []),
              selectedProficiency,
            ],
          },
        })),

      // Helper para obtener TODAS las proficiencies
      getAllProficiencies: () => {
        const { proficiencies, selectedProficiencies } = get().character;
        return [...(proficiencies || []), ...(selectedProficiencies || [])];
      },

      // Equipamiento
      addEquipment: (equipment: Equipment) =>
        set((state) => {
          const currentEquipment = Array.isArray(state.character.equipment)
            ? state.character.equipment
            : [];

          const existingIndex = currentEquipment.findIndex(
            (e) => e.index === equipment.index && e.type === equipment.type
          );

          if (existingIndex !== undefined && existingIndex >= 0) {
            // Si ya existe, aumentar cantidad
            const updated = [...(state.character.equipment || [])];
            updated[existingIndex].quantity += equipment.quantity;
            return { character: { ...state.character, equipment: updated } };
          } else {
            // Si no existe, agregar nuevo
            return {
              character: {
                ...state.character,
                equipment: [...currentEquipment, equipment],
              },
            };
          }
        }),

      removeEquipment: (index: string) =>
        set((state) => {
          const currentEquipment = Array.isArray(state.character.equipment)
            ? state.character.equipment
            : [];

          return {
            character: {
              ...state.character,
              equipment: currentEquipment.filter((e) => e.index !== index),
            },
          };
        }),

      toggleEquiped: (index) =>
        set((state) => {
          const currentEquipment = Array.isArray(state.character.equipment)
            ? state.character.equipment
            : [];

          const item = currentEquipment.find((e) => e.index === index);

          if (!item) return state;

          //unequip other items
          let updated = [...currentEquipment];

          if (item.type === "weapon" || item.type === "armor") {
            updated = updated.map((e) => {
              if (e.type === item.type && e.index !== item.index) {
                return { ...e, equipped: false };
              }
              return e;
            });

            //toggle
            const itemIndex = updated.findIndex((e) => e.index === index);
            updated[itemIndex] = {
              ...updated[itemIndex],
              equipped: !item.equipped,
            };
          }
          return { character: { ...state.character, equipment: updated } };
        }),

      updateQuantity: (index: string, quantity: number) =>
        set((state) => {
          const currentEquipment = Array.isArray(state.character.equipment)
            ? state.character.equipment
            : [];

          return {
            character: {
              ...state.character,
              equipment: currentEquipment.map((e) =>
                e.index === index ? { ...e, quantity } : e
              ),
            },
          };
        }),

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
        if (char.skills && char.skills.length > 0) completed++;
        if (char.equipment && char.equipment.length > 0) completed++;

        return Math.round((completed / totalSteps) * 100);
      },
    }),
    {
      name: "dnd-character-storage",
      version: 3,
      partialize: (state) => ({
        character: state.character,
      }),
    }
  )
);

export default useDNDCharacterStore;
