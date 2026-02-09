"use client";

import { Loader2, Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { globalSearch } from "@/actions/search/global-search";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { cn } from "@/lib/utils";

/**
 * Shape of a global search result.
 * Each item knows its type and destination URL,
 * allowing the search bar to act as a global navigator.
 */

interface SearchResult {
  type:
    | "class"
    | "race"
    | "monster"
    | "equipment"
    | "rule"
    | "magic-item"
    | "spell";
  index: string;
  name: string;
  url: string;
  description?: string;
}

interface Props {
  placeholder?: string;
}

/**
 * Global search bar used across the application.
 *
 * Features:
 * - Debounced search to avoid unnecessary requests
 * - Grouped results by content type
 * - Keyboard-friendly command list
 * - Click outside handling
 */

export const SearchBar = ({ placeholder }: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);

  /**
   * Debounced search effect.
   * Starts searching only when the query has at least 2 characters,
   * reducing noise and unnecessary backend calls.
   */
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(async () => {
      const searchResults = await globalSearch(query);
      setResults(searchResults);
      setIsOpen(true);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  /**
   * Closes the dropdown when clicking outside the search container.
   * This keeps the UI clean and predictable.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Handles navigation when a search result is selected.
   * Resets the input state before routing.
   */
  const handleSelect = (url: string) => {
    setQuery("");
    setIsOpen(false);
    router.push(url);
  };

  /**
   * Maps content types to color styles
   * for quick visual identification.
   */
  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      class: "text-blue-600 bg-blue-50",
      race: "text-green-600 bg-green-50",
      monster: "text-red-600 bg-red-50",
      equipment: "text-yellow-600 bg-yellow-50",
      rule: "text-purple-600 bg-purple-50",
      "magic-item": "text-pink-600 bg-pink-50",
      spell: "text-indigo-600 bg-indigo-50",
    };
    return colors[type] || "text-gray-600 bg-gray-50";
  };

  /**
   * Human-readable labels for each content type.
   */
  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      class: "Class",
      race: "Race",
      monster: "Monster",
      equipment: "Equipment",
      rule: "Rule",
      "magic-item": "Magic Item",
      spell: "Spell",
    };
    return labels[type] || type;
  };

  /**
   * Groups results by type to render them
   * in separate command groups.
   */
  const groupedResults = results.reduce(
    (acc, result) => {
      if (!acc[result.type]) {
        acc[result.type] = [];
      }
      acc[result.type].push(result);
      return acc;
    },
    {} as Record<string, SearchResult[]>,
  );

  return (
    <div ref={searchRef} className="relative w-full max-w-md px-2 lg:px-0">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          aria-label="Search D&D content"
          type="text"
          placeholder="Search classes, races, monsters..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="pl-9 pr-9"
        />
        {isLoading && (
          <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
        )}
      </div>

      {/* Results */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full rounded-md border bg-popover shadow-lg z-50 max-h-[400px] overflow-y-auto">
          <Command>
            <CommandList>
              {Object.entries(groupedResults).map(([type, items]) => (
                <CommandGroup key={type} heading={getTypeLabel(type)}>
                  {items.map((result) => (
                    <CommandItem
                      key={`${result.type}-${result.index}`}
                      onSelect={() => handleSelect(result.url)}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-2 w-full">
                        <span
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full font-medium",
                            getTypeColor(result.type),
                          )}
                        >
                          {getTypeLabel(result.type)}
                        </span>
                        <span>{result.name}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </div>
      )}

      {/* Empty states */}
      {isOpen && query.length >= 2 && results.length === 0 && !isLoading && (
        <div className="absolute top-full mt-2 w-full rounded-md border bg-popover p-4 shadow-lg z-50">
          <p className="text-sm text-muted-foreground text-center">
            No results found for "{query}"
          </p>
        </div>
      )}
    </div>
  );
};
