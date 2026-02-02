import { geisCinzel } from "@/config/fonts";
import { UserPlus2Icon } from "lucide-react";
import { CharactersGrid } from "@/components/characters/CharactersGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAllCharacters, getUserCharacters } from "@/actions/characters";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth.config";

export default async function CharactersPage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/start-adventure?next=/characters");
  }

  const result = await getUserCharacters();

  if (!result.ok) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center justify-between mb-6">
          <div className="flex flex-row items-center">
            <UserPlus2Icon className="size-14 text-gray-500" />
            <h1
              className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
            >
              Create New Character
            </h1>
          </div>
          <Link href={"/characters/create-character/basic"}>
            <Button variant={"outline"} className="justify-end">
              Create New Character
            </Button>
          </Link>
        </div>
      </div>
      <CharactersGrid characters={result.characters} />
    </div>
  );
}
