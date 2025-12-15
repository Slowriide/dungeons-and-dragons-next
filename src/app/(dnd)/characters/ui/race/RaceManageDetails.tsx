"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRacesDetails } from "@/hooks/races/useRacesDetails";
import { RaceAccordion } from "./accordions/RaceAccordion";
import { RaceAccordionOptions } from "./accordions/RaceAccordionOptions";
import { AbBonusAccordionOptions } from "./accordions/AbBonusAccordionOptions";
import { TraitsAccordion } from "./accordions/TraitsAccordion";

interface Props {
  raceIndex: string;
}

export const RaceManageDetails = ({ raceIndex }: Props) => {
  const { data, isLoading, isError } = useRacesDetails({
    racesIndexes: [raceIndex],
  });

  if (!data || isLoading) {
    return <p>loading</p>;
  }

  const race = data?.race[0];

  const hasLangOptions = race.language_options?.from;
  const hasAbOptions = race.ability_bonus_options?.from;

  const abilityBonucesList = race.ability_bonuses
    .map((ab) => `${ab.ability_score.name} +${ab.bonus}`)
    .join(", ");

  const raceTraits = race.traits.map((trait) => trait.index);

  return (
    <div className="min-h-screen bg-background space-y-6 mb-20">
      <h1 className="font-serif text-xl font-semibold mb-2">Characteristics</h1>
      <RaceAccordion title={"Size"} description={race.size_description} />
      <RaceAccordion
        title={"Speed"}
        description={`Your speed is ${race.speed.toString()} fts.`}
      />
      <RaceAccordion title={"Alignment"} description={race.alignment} />
      {hasLangOptions ? (
        <RaceAccordionOptions
          title={"Languages"}
          description={race.language_desc}
          options={race.language_options?.from.options ?? []}
        />
      ) : (
        <RaceAccordion title={"Languages"} description={race.language_desc} />
      )}
      <h1 className="font-serif text-xl font-semibold mb-2">Bonuses</h1>
      {hasAbOptions ? (
        <AbBonusAccordionOptions
          title={"Ability bonuses"}
          description={abilityBonucesList}
          options={race.ability_bonus_options?.from.options ?? []}
        />
      ) : (
        <RaceAccordion
          title={"Ability bonuses"}
          description={abilityBonucesList}
        />
      )}
      {race.name !== "Human" && (
        <div>
          <h1 className="font-serif text-xl font-semibold mb-2">Traits</h1>
          <TraitsAccordion indexes={raceTraits} />
        </div>
      )}
    </div>
  );
};
