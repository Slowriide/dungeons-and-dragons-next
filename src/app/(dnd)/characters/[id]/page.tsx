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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  if (!id) {
    return {
      title: "Character not found | D&D Mini Beyond",
    };
  }

  const character = await getFullCharacterById(id);

  if (!character) {
    return {
      title: "Character not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${character.name} (${character.characterClass}) | D&D Mini Beyond`,
    description:
      character.name?.[0] ??
      `Detailed information about the D&D 5e character ${character.name}.`,
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

  const character = await getFullCharacterById(id);

  if (!character) {
    notFound();
  }

  const characterDND = mapPrismaCharacterToDND(character);

  return (
    <main className="min-h-screen bg-background">
      <article className="mx-auto max-w-7xl space-y-10">
        <CharacterSheet character={characterDND} />
      </article>
    </main>
  );
}
