"use client";

import { Pagination } from "@/components/Pagination";
import { CharacterCardWrapper } from "./CharacterCardWrapper";
import { EmptyCharactersState } from "./EmptyCharacters";

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
    <main className="lg:col-span-4 space-y-4">
      <div className="grid lg:grid-cols-4 gap-2">
        {characters.map((character) => (
          <CharacterCardWrapper key={character.id} character={character} />
        ))}
      </div>
      {characters.length === 0 && <EmptyCharactersState />}
      {characters.length > 0 && <Pagination totalPages={1} />}
    </main>
  );
};
