"use client";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

import { NavButton } from "./NavButton";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { HoverDropdrownButton } from "./HoverDropdrownButton";
import { useSession } from "next-auth/react";
import { LogoutButton } from "./ui/LogoutButton";
import { HoverDropdrownButtonExternal } from "./HoverDropdrownButtonExternal.";
import { SearchBar } from "./SearchBar";

export const TopMenu = () => {
  const pathname = usePathname();
  const { data: session, status } = useSession();

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
        <div className="flex items-center gap-2">
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

          <HoverDropdrownButtonExternal
            title={"Sources"}
            internalButton={{
              name: "Rules",
              path: "/rules",
            }}
          />
          <HoverDropdrownButton
            title="Tools"
            options={[
              { name: "My Characters", path: "/characters" },
              { name: "Dices", path: "/dice" },
            ]}
          />

          {!session?.user ? (
            <NavButton
              to={"/auth/login"}
              icon={<LogInIcon />}
              label={"Login"}
              className="bg-red-600 hover:bg-red-700"
              isActive={true}
            />
          ) : (
            <LogoutButton
              className="bg-red-600 hover:bg-red-700"
              isActive={true}
            />
          )}
        </div>
      </div>
    </header>
  );
};
