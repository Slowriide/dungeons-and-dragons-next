import { geisCinzel } from "@/config/fonts";
import { UserPlus2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getUserCharacters } from "@/actions/characters";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth.config";
import { Metadata } from "next";
import { CharactersGrid } from "./ui/CharactersGrid";

/**
 * Metadata for Characters page
 *
 * SEO considerations:
 * - Targets authenticated D&D players searching for character management
 * - Optimized for "D&D 5e characters" and related keywords
 * - Open Graph configured for social sharing
 */
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

/**
 * CharactersPage
 *
 * Purpose:
 * - Display the authenticated user's characters
 * - Provide a clear entry point to character creation
 *
 * Behavior:
 * - Redirects unauthenticated users to onboarding
 * - Fetches characters server-side for SEO and performance
 */
export default async function CharactersPage() {
  const session = await auth();

  // Redirect unauthenticated users to onboarding flow
  if (!session?.user?.id) {
    redirect("/start-adventure?next=/characters");
  }

  const result = await getUserCharacters();

  if (!result.ok) {
    notFound();
  }
  await new Promise((r) => setTimeout(r, 2000));
  return (
    <main
      className="min-h-screen bg-background"
      aria-labelledby="characters-page-title"
    >
      <div className="mx-auto max-w-7xl space-y-10 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row gap-x-4 mt-14 items-center justify-between mb-6">
          {/* ===== Page Header ===== */}
          <div className="flex flex-row items-center">
            <UserPlus2Icon
              className="size-12 lg:size-14 text-gray-500"
              aria-hidden="true"
            />
            <h1
              className={`${geisCinzel.className} antialiased font-bold text-4xl sm:text-5xl lg:text-5xl animate-fade-in pl-2`}
            >
              Create New Character
            </h1>
          </div>

          {/* Primary CTA */}
          <Link href={"/characters/create-character/basic"}>
            <Button variant={"outline"} className="justify-end">
              Create New Character
            </Button>
          </Link>
        </header>
      </div>

      {/* ===== Characters Grid ===== */}
      <CharactersGrid characters={result.characters} />
    </main>
  );
}
