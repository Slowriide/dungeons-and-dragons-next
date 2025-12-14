"use client";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { NavButton } from "./NavButton";
import {
  HomeIcon,
  LogInIcon,
  ScrollIcon,
  ShieldIcon,
  SwordIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { HoverDropdrownButton } from "./HoverDropdrownButton";

export const TopMenu = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  return (
    <header className="flex w-full mx-auto px-10 py-4 border-b">
      <div className="flex flex-row w-full  mx-auto justify-between items-center max-w-7xl">
        <Link href={"/"}>
          <span className={`${titleFont.className} antialiased font-bold`}>
            D&D Beyond
          </span>
          <span> | mini</span>
        </Link>
        <SearchBar />
        <div className="space-x-2">
          <HoverDropdrownButton
            title="Gameplay"
            options={[
              { name: "Monsters", path: "/monsters" },
              { name: "Spells", path: "/spells" },
              { name: "Equipment", path: "/equipment" },
              { name: "Classes", path: "/classes" },
              { name: "Races", path: "/races" },
              { name: "Magic Items", path: "/magic-items" },
            ]}
          />
          <HoverDropdrownButton
            title="Sources"
            options={[
              { name: "Rules", path: "/rules" },
              { name: "Stories", path: "/" },
            ]}
          />
          <HoverDropdrownButton
            title="Tools"
            options={[
              { name: "My Characters", path: "/characters" },
              { name: "Dices", path: "/dice" },
            ]}
          />

          <NavButton
            to={"/"}
            icon={<LogInIcon />}
            label={"Login"}
            className="bg-red-600 hover:bg-red-700"
            isActive={true}
          />
        </div>
      </div>
    </header>
  );
};
