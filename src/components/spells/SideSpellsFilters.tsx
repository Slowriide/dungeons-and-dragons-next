"use client";

import { geisCinzel } from "@/config/fonts";
import { SearchBar } from "../SearchBar";
import { Card } from "../ui/card";
import { spells } from "@/mocks/data/spells";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ResetFiltersButton } from "../ResetFiltersButton";

export const SideSpellsFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeLevels = searchParams.getAll("level");
  const activeSchools = searchParams.getAll("school");

  const schools = Array.from(new Set(spells.map((s) => s.school)));
  const levels = Array.from(new Set(spells.map((s) => s.level))).sort(
    (a, b) => a - b
  );

  const toggleFliters = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString());

    const current = params.getAll(key);

    let newParams: string[];

    if (value === undefined) {
      params.delete(key);
      params.set("page", "1");

      router.push(`?${params.toString()}`, { scroll: false });
      return;
    }

    if (current.includes(value!)) {
      newParams = current.filter((params) => params !== value);
    } else {
      newParams = [...current, value!];
    }

    params.delete(key);

    newParams.forEach((value) => {
      params.append(key, value);
    });

    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className=" col-span-1 space-y-4">
      {/* Search */}
      <Card className="p-4 items-start gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          Search
        </span>
        <SearchBar placeholder="Search spells..." />
      </Card>

      {/* Level filter */}
      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-bold text-lg`}
        >
          Level
        </span>
        <div className=" flex flex-wrap gap-2">
          <Button
            variant={activeLevels.length === 0 ? "default" : "outline"}
            onClick={() => toggleFliters("level", undefined)}
          >
            All
          </Button>

          {levels.map((level) => (
            <Button
              key={level}
              onClick={() => toggleFliters("level", level.toString())}
              variant={
                activeLevels.includes(level.toString()) ? "default" : "outline"
              }
            >
              {level === 0 ? "cantrip" : level}
            </Button>
          ))}
        </div>
      </Card>

      {/* School filter */}
      <Card className="p-4 glass-card gap-y-2">
        <span
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          School
        </span>
        <div className=" flex flex-col gap-2">
          <Button
            variant={activeSchools.length === 0 ? "default" : "outline"}
            onClick={() => toggleFliters("school", undefined)}
            className="justify-start"
          >
            All Schools
          </Button>

          {schools.map((school) => (
            <Button
              key={school}
              onClick={() => toggleFliters("school", school)}
              variant={activeSchools.includes(school) ? "default" : "outline"}
              className="justify-start"
            >
              {school}
            </Button>
          ))}
        </div>
      </Card>

      <ResetFiltersButton keys={["level", "school"]} />
    </div>
  );
};
