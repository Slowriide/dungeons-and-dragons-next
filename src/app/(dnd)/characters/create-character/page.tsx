import { geisCinzel } from "@/config/fonts";
import { UserPlus2Icon } from "lucide-react";
import { CharactersView } from "../ui/CharactersView";

export default function CreateCharacterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-row gap-x-4 mt-14 items-center justify-between">
          <div className="flex flex-row items-center">
            <UserPlus2Icon className="size-14 text-gray-500" />
            <h1
              className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-5xl animate-fade-in pl-2`}
            >
              Create New Character
            </h1>
          </div>
        </div>
        <CharactersView />
      </div>
    </div>
  );
}
