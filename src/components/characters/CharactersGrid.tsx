"use client";

import { Attributes } from "@/utils/characterCalculations";
import { Pagination } from "../Pagination";
import { CharactersCard } from "./CharactersCard";

export interface CharacterListItem {
  id: string;
  name: string;
  characterClass: string;
  race: string;
  level: number;
  background: string | null;
  alignment: string | null;
  hitPoints: number | null;
  armorClass: number | null;
  speed: number | null;
  createdAt: Date;
  proficiencyBonus: number | null;
}

interface CharactersGridProps {
  characters: CharacterListItem[];
}

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      <div className="grid grid-cols-4 gap-2">
        {characters.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </div>
      <Pagination totalPages={1} />
    </main>
  );
};
