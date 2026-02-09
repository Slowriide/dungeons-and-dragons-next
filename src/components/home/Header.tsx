import { geisCinzel } from "@/config/fonts";
import { SearchBar } from "../SearchBar";

// This header acts as the hero section of the homepage
// and contains the primary H1 for SEO
export const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center mt-20 w-full space-y-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-baseline">
        <h1
          className={`${geisCinzel.className} antialiased font-bold text-5xl sm:text-6xl lg:text-7xl animate-fade-in`}
        >
          <span className="text-red-600">D&D 5e</span> <span>Mini Beyond</span>
        </h1>
      </div>
      <p
        className={`${geisCinzel.className} antialiased lg:text-md animate-fade-in pl-2 text-gray-500 max-w-2xl`}
      >
        A modern Dungeons & Dragons 5e reference for spells, monsters, classes,
        races and equipment. Everything you need to adventure, elegantly
        organized.
      </p>

      <div className="w-full flex items-center justify-center mx-auto mt-2">
        <SearchBar placeholder="Search spells, monsters, classes..." />
      </div>
    </header>
  );
};
