import { DiceRoller } from "@/components/dice/DiceRoller";
import { geisCinzel } from "@/config/fonts";
import { DicesIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dices | D&D Mini Beyond",
  description: "Throw your dices!!!",
  openGraph: {
    title: "D&D 5e Dices",
    description:
      "Complete spell list for Dungeons & Dragons 5e. Search, filter and explore magic.",
    url: "https://tu-dominio.com/dice",
    siteName: "D&D Mini Beyond",
    images: [
      {
        url: "/og/dice.jpg",
        width: 1200,
        height: 630,
        alt: "D&D Dice",
      },
    ],
    type: "website",
  },
  keywords: ["D&D dice", "5e dice", "dice"],
};

export default function DiceRollerPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="flex flex-row gap-x-4 mt-14 items-center">
          <DicesIcon className="size-14 text-pink-600" />
          <h1
            className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
          >
            Dice Roller
          </h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <DiceRoller />
        </section>
      </div>
    </main>
  );
}
