"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  internalButton: {
    name: string;
    path: string;
  };
}

/**
 * Dropdown button that mixes internal and external links.
 * Useful for grouping official pages with external resources.
 */

export const HoverDropdrownButtonExternal = ({
  title,
  internalButton,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="inline-block"
    >
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="flex flex-row items-center px-3 py-2 rounded-md hover:bg-gray-100">
          <span>{title}</span>
          <ChevronDown className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={0}>
          <DropdownMenuItem>
            <Link href={internalButton.path}>{internalButton.name}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <a
              href="https://www.dndbeyond.com/forums/dungeons-dragons-discussion/dungeon-masters-only/43718-list-of-free-dnd-campaigns"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {" "}
              Free D&D Campaigns
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
