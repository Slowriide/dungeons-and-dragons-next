"use client";

import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ResetFiltersButton } from "../../../../components/ResetFiltersButton";
import { SearchCard } from "../../../../components/SearchCard";
import { SpellsSchools } from "@/interface/spells/SpellsScholls";
import { SpellsLevels } from "@/interface/spells/SpellsLevels";

export const SideSpellsFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeLevels = searchParams.getAll("level");
  const activeSchools = searchParams.getAll("school");

  const schools = SpellsSchools;
  const levels = SpellsLevels;

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

      <SearchCard placeholder={"Search spells..."} />

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
              {level === "0" ? "cantrip" : level}
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

      <ResetFiltersButton keys={["level", "school", "query"]} />
    </div>
  );
};
