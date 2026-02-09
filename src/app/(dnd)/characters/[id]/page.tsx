import { getFullCharacterById } from "@/actions/characters";
import { notFound, redirect } from "next/navigation";
import { CharacterSheet } from "../../characters/create-character/summary/ui/CharacterSheet";
import { mapPrismaCharacterToDND } from "../../characters/utils/mappers/mapPrismaCharacterToDND";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

/**
 * Generates dynamic metadata for each character page.
 * This improves SEO, social sharing (Open Graph), and page discoverability.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  if (!id) {
    return {
      title: "Character not found | D&D Mini Beyond",
    };
  }

  // Fetch the full character from the database
  const character = await getFullCharacterById(id);

  if (!character) {
    return {
      title: "Character not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${character.name} (${character.characterClass}) | D&D Mini Beyond`,
    description: `View the full D&D 5e character sheet for ${character.name}, a level ${character.level} ${character.race} ${character.characterClass}.`,
    openGraph: {
      title: `${character.name} – D&D 5e Character`,
      description: character.name,
      type: "article",
      images: [
        {
          url: "/og/characters/character.png",
          width: 1200,
          height: 630,
          alt: character.name,
        },
      ],
    },
  };
}

export default async function CharacterPage({ params }: Props) {
  const { id } = await params;

  if (!id) {
    notFound();
  }

  // Fetch character data
  const character = await getFullCharacterById(id);

  if (!character) {
    notFound();
  }

  // Map Prisma character model to D&D 5e-compatible structure
  const characterDND = mapPrismaCharacterToDND(character);

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-7xl space-y-10">
        <CharacterSheet character={characterDND} />
      </article>
    </main>
  );
}
