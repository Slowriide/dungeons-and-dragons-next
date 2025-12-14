"use client";

import { DNDClass } from "@/interface/classes/DnDClass";
import { useState } from "react";
import { ProficencieSelector } from "./ProficencieSelector";
import { MonkProficiencyChoice } from "@/interface/monkProf";

interface Props {
  dndClass: DNDClass;
}

export const ClassFeatures = ({ dndClass }: Props) => {
  const [selected, setSelected] = useState({
    first: "",
    second: "",
    third: "",
  });
  const proficencyChoices = dndClass.proficiency_choices;

  const proficencies = proficencyChoices[0];

  const extra = proficencyChoices.length > 1 && proficencyChoices[1];

  const monkChooses =
    dndClass.name === "Monk"
      ? (proficencyChoices[1] as MonkProficiencyChoice).from.options.flatMap(
          (opt) =>
            opt.choice
              ? opt.choice.from.options.map((o) => ({
                  index: o.item?.index ?? "",
                  name: o.item?.name ?? "",
                }))
              : []
        )
      : [];

  console.log(monkChooses);

  //   const profIndexes =
  //     proficencyChoices?.from.options.map((prof) => prof.item.index) ?? [];

  //   const { data } = useProficiencies({ profIndexes });

  return (
    <div className="flex flex-row gap-x-10 ">
      {proficencyChoices && (
        <div className="w-max">
          <p className="text-md font-medium mb-4  w-max">
            Choose {proficencies.choose} Skills
          </p>
          <ProficencieSelector
            options={proficencies.from.options.map((o) => o.item)}
            count={proficencies.choose}
          />
        </div>
      )}
      {dndClass.name === "Bard" && extra && (
        <div className=" w-max">
          <p className="text-md font-medium mb-4  w-max">
            Choose {proficencies.choose} Instruments
          </p>
          <ProficencieSelector
            options={extra.from.options.map((o) => o.item)}
            count={extra.choose}
            desc="Choose instrument"
          />
        </div>
      )}
      {dndClass.name === "Monk" && monkChooses && (
        <div className=" w-max">
          <p className="text-md font-medium mb-4  w-max">
            Choose 1 Insturment or Artisan's tools
          </p>
          <ProficencieSelector
            options={monkChooses}
            count={1}
            desc="Choose Insturment or Artisan's tools"
          />
        </div>
      )}
    </div>
  );
};
