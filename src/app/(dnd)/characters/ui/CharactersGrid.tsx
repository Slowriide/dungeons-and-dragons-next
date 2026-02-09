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

/**
 * CharactersGrid
 *
 * Purpose:
 * - Displays a grid of user-created characters
 * - Handles empty state gracefully
 * - Provides pagination when applicable
 */

export const CharactersGrid = ({ characters }: CharactersGridProps) => {
  return (
    <section className="lg:col-span-4 space-y-4">
      {/* Visually hidden heading for accessibility & SEO */}
      <h2 id="characters-grid-title" className="sr-only">
        Character List
      </h2>

      {/* Characters Grid */}
      <div className="grid lg:grid-cols-4 gap-2">
        {characters.map((character) => (
          <CharacterCardWrapper key={character.id} character={character} />
        ))}
      </div>

      {/* Empty State */}
      {characters.length === 0 && <EmptyCharactersState />}

      {/* Pagination */}
      {characters.length > 0 && <Pagination totalPages={1} />}
    </section>
  );
};
