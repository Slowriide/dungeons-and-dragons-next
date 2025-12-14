import { create } from "zustand";
import { DNDCharacter } from "@/interface/character/DNDCharacter";

type CharacterState = {
  character: DNDCharacter;

  setField: (field: keyof DNDCharacter, value: any) => void;
  setAttribute: (attr: keyof DNDCharacter["attributes"], value: number) => void;
  reset: () => void;
};

export const useDNDCharacterStore = create<CharacterState>((set) => ({
  character: {
    index: "",
    name: "",
    hit_points: 10,
    class: undefined,
    race: undefined,

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
  },

  setField: (field, value) =>
    set((state) => ({
      character: {
        ...state.character,
        [field]: value,
      },
    })),

  setAttribute: (attr, value) =>
    set((state) => ({
      character: {
        ...state.character,
        attributes: {
          ...state.character.attributes,
          [attr]: value,
        },
      },
    })),

  reset: () =>
    set(() => ({
      character: {
        index: "",
        name: "",
        hit_points: 10,
        class: {} as any,
        race: {} as any,
        attributes: {
          strength: 10,
          dexterity: 10,
          constitution: 10,
          intelligence: 10,
          wisdom: 10,
          charisma: 10,
        },
        class_features: {} as any,
        class_weapon_proficiencies: {} as any,
        skills: {},
        equipment: {
          weapons: [],
          armor: null,
          items: [],
          gold: 0,
        },
      },
    })),
}));
