"use client";

import { DNDCharacter } from "@/interface/character/DNDCharacter";
import { Pagination } from "../Pagination";
import { CharactersCard } from "./CharactersCard";

const characters: DNDCharacter[] = [
  {
    index: "1",
    name: "slow",
    hit_points: 12,
    class: "Druid",
    race: "Half-Elf",
    attributes: {
      strength: 2,
      dexterity: 3,
      constitution: 4,
      intelligence: 5,
      wisdom: 6,
      charisma: 7,
    },
    skills: {},
    equipment: {
      weapons: [],
      armor: null,
      items: [],
      gold: 0,
    },
  },
  {
    index: "2",
    name: "mark",
    hit_points: 16,
    class: "Barbarian",
    race: "Human",
    attributes: {
      strength: 4,
      dexterity: 5,
      constitution: 6,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
    skills: {},
    equipment: {
      weapons: [],
      armor: null,
      items: [],
      gold: 0,
    },
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
