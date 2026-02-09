"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  options: {
    name: string;
    path: string;
  }[];
}
/**
 * Dropdown button that opens on hover.
 * Used in the top navigation for internal links.
 *
 * Uses controlled state to synchronize hover behavior
 * with the shadcn DropdownMenu component.
 */
export const HoverDropdrownButton = ({ title, options }: Props) => {
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
          {options.map((option) => (
            <DropdownMenuItem
              key={option.name}
              asChild
              className="cursor-pointer"
            >
              <Link href={option.path}>{option.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
