"use client";

import { geisCinzel } from "@/config/fonts";
import { Card } from "./ui/card";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  placeholder: string;
}

export const SearchCard = ({ placeholder }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  /**
   * Current search query extracted from the URL.
   * This allows the input to stay in sync with navigation
   * and supports sharing / refreshing filtered URLs.
   */
  const searchQuery = searchParams.get("query") ?? "";

  /**
   * Debounced search handler.
   * Updates the URL query params without triggering a full scroll reset.
   * The debounce avoids excessive router updates on every keystroke.
   */
  const onInputSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value.trim()) {
      params.delete("query");
    } else {
      params.set("query", value);
    }

    /**
     * Reset pagination when a new search is applied,
     * ensuring consistent results starting from page one.
     */
    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  }, 400);

  return (
    <Card className="p-4 items-start gap-y-2">
      <h3
        className={`${geisCinzel.className} antialiased font-semibold text-lg`}
      >
        Search
      </h3>

      <div className="relative w-full items-center justify-center max-w-xl  mr-2">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          className="pl-10"
          placeholder={placeholder}
          defaultValue={searchQuery ?? ""}
          onChange={(e) => onInputSearch(e.target.value)}
        />
      </div>
    </Card>
  );
};
