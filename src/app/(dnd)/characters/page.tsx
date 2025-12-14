import { CharactersGrid } from "@/components/characters/CharactersGrid";
import { Button } from "@/components/ui/button";
import { geisCinzel } from "@/config/fonts";
import { UserSquare2 } from "lucide-react";
import Link from "next/link";

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center justify-between">
          <div className="flex flex-row items-center">
            <UserSquare2 className="size-14 text-gray-500" />
            <h1
              className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
            >
              My Characters
            </h1>
          </div>
          <Link href={"/characters/create-character"}>
            <Button variant={"outline"}>Create new character</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <CharactersGrid />
        </div>
      </div>
    </div>
  );
}
