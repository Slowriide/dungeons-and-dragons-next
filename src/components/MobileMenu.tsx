// components/MobileMenu.tsx
"use client";

import { useState } from "react";
import { Menu, X, LogInIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { LogoutButton } from "./ui/LogoutButton";
import { Session } from "next-auth";
import { titleFont } from "@/config/fonts";

interface Props {
  session: Session | null;
}

export function MobileMenu({ session }: Props) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      category: "Gameplay",
      items: [
        { name: "Monsters", path: "/monsters" },
        { name: "Spells", path: "/spells" },
        { name: "Equipment", path: "/equipment" },
        { name: "Classes", path: "/classes" },
        { name: "Races", path: "/races" },
        { name: "Magic Items", path: "/magic-items" },
      ],
    },
    {
      category: "Sources",
      items: [
        { name: "Rules", path: "/rules" },
        { name: "Stories", path: "/" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "My Characters", path: "/characters" },
        { name: "Dices", path: "/dice" },
      ],
    },
  ];

  return (
    <div className="mt-4 mx-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] px-4">
          <SheetTitle></SheetTitle>
          <nav className="flex flex-col gap-6 mt-6">
            {menuItems.map((section) => (
              <div key={section.category}>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2 border-b">
                  {section.category}
                </h3>
                <div className="flex flex-col gap-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className="text-lg hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t pt-4 mt-4">
              {!session?.user ? (
                <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/auth/login" onClick={() => setOpen(false)}>
                    <LogInIcon className="mr-2 h-4 w-4" />
                    Login
                  </Link>
                </Button>
              ) : (
                <LogoutButton
                  className="w-full bg-red-600 hover:bg-red-700"
                  isActive={true}
                />
              )}
            </div>
          </nav>
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <span className={`${titleFont.className} antialiased font-bold`}>
          D&D Beyond
        </span>
        <span> | mini</span>
      </Link>
    </div>
  );
}
