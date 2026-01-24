import { getFullCharacterById } from "@/actions/characters";
import { notFound } from "next/navigation";
import { CharacterSheet } from "../../characters/create-character/summary/ui/CharacterSheet";
import { mapPrismaCharacterToDND } from "../../characters/utils/mappers/mapPrismaCharacterToDND";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function MagicItemsPage({ params }: Props) {
  const { id } = await params;

  const character = await getFullCharacterById(id);

  if (!character) {
    notFound();
  }

  const characterDND = mapPrismaCharacterToDND(character);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <CharacterSheet character={characterDND} />
      </div>
    </div>
  );
}
