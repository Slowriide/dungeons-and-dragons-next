"use client";

import { DNDCharacter } from "@/interface/character/DNDCharacter";
import { Pagination } from "../Pagination";
import { CharactersCard } from "./CharactersCard";

const characters: DNDCharacter[] = [
  {
    index: "1",
    name: "slow",
    hit_points: 12,
    characterClass: "Barbarian",
    level: 12,
    race: "Half-Elf",
    languages: [],
    raceTraits: [{ id: "darkvision", description: "vision", name: "Dark" }],
    selectedTraits: [{ id: "darkvision", description: "vision", name: "Dark" }],
    background: "uwu",

    backgroundSelections: {
      specialty: "string", // "Actor", "Dancer", etc. (eligió 1)
      personalityTrait: "string", // Trait que eligió
      ideal: "", // Ideal que eligió
      bond: "string", // Bond que eligió
      flaw: "string", // Flaw que eligió
    },
    speed: 30,
    size: "Medium",
    alignment: "lawful-good",
    attributes: {
      strength: 2,
      dexterity: 3,
      constitution: 4,
      intelligence: 5,
      wisdom: 6,
      charisma: 7,
    },
    abilityBonuses: {
      strength: 2,
      dexterity: 3,
      constitution: 4,
      intelligence: 5,
      wisdom: 6,
      charisma: 7,
    },
    skills: {},
    equipment: [],
    proficiencies: [],
    selectedProficiencies: [],
    class_features: [],
    class_weapon_proficiencies: [],
  },
  {
    index: "3",
    name: "juanito",
    hit_points: 5,
    characterClass: "Bard",
    level: 13,
    race: "Human",
    languages: [],
    raceTraits: [{ id: "darkvision", description: "vision", name: "Dark" }],
    selectedTraits: [{ id: "darkvision", description: "vision", name: "Dark" }],
    background: "uwu",

    backgroundSelections: {
      specialty: "string", // "Actor", "Dancer", etc. (eligió 1)
      personalityTrait: "string", // Trait que eligió
      ideal: "", // Ideal que eligió
      bond: "string", // Bond que eligió
      flaw: "string", // Flaw que eligió
    },
    speed: 30,
    size: "Medium",
    alignment: "lawful-good",
    attributes: {
      strength: 2,
      dexterity: 3,
      constitution: 4,
      intelligence: 5,
      wisdom: 6,
      charisma: 7,
    },
    abilityBonuses: {
      strength: 2,
      dexterity: 3,
      constitution: 4,
      intelligence: 5,
      wisdom: 6,
      charisma: 7,
    },
    skills: {},
    equipment: [],
    proficiencies: [],
    selectedProficiencies: [],
    class_features: [],
    class_weapon_proficiencies: [],
  },
];

export const CharactersGrid = () => {
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-4 gap-2">
        {characters.map((ch) => (
          <CharactersCard key={ch.index} character={ch} />
        ))}
      </div>
      <Pagination totalPages={1} />
    </main>
  );
};
