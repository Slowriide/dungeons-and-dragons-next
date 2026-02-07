import { geisCinzel } from "@/config/fonts";
import { UserPlus2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserCharacters } from "@/actions/characters";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth.config";
import { Metadata } from "next";
import { CharactersGrid } from "./ui/CharactersGrid";

export const metadata: Metadata = {
  title: "Characters | D&D Mini Beyond",
  description: "Browse and create your own D&D 5e characters.",
  openGraph: {
    title: "D&D 5e Characters",
    description:
      "Complete spell list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/characters",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/characters.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Characters",
      },
    ],
    type: "website",
  },
  keywords: ["D&D characters", "5e characters", "characters"],
};

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
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row gap-x-4 mt-14 items-center justify-between mb-6">
          <div className="flex flex-row items-center">
            <UserPlus2Icon className="size-12 lg:size-14 text-gray-500" />
            <h1
              className={`${geisCinzel.className} antialiased font-bold text-4xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
            >
              Create New Character
            </h1>
          </div>
          <Link href={"/characters/create-character/basic"}>
            <Button variant={"outline"} className="justify-end">
              Create New Character
            </Button>
          </Link>
        </header>
      </div>
      <CharactersGrid characters={result.characters} />
    </main>
  );
}
