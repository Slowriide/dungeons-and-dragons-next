"use client";

import { useState } from "react";
import { Pagination } from "../Pagination";
import { useFilteredMagicItems } from "@/hooks/magicItems/useFilteredMagicItems";
import { RulesCard } from "./RulesCard";
import { DNDRule } from "@/interface/rules/DNDRule";
import { useRulesDetails } from "@/hooks/rules/useRulesDetails";
import { useRulesList } from "@/hooks/rules/useRulesList";

export const RulesGrid = () => {
  const [selectedMagicItem, setSelectedMagicItem] = useState<DNDRule | null>(
    null
  );

  const { data: rulesList } = useRulesList();

  const rulesIndexes = rulesList?.results.map((rule) => rule.index) || [];

  const { isLoading, data, isError } = useRulesDetails({ rulesIndexes });

  if (isLoading || !data) return <p>Loading...</p>;

  if (isError || !data) {
    return <p>error...</p>;
  }

  console.log(data);

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {
        /* {selectedMagicItem ? (
        <SelectedMagicItemCard
          magicItem={selectedMagicItem}
          setSelectedMagicItem={setSelectedMagicItem}
        />
      ) : ( */
        data.rules.map((rule) => (
          <RulesCard
            key={rule.index}
            rule={rule}
            setSelectedMagicItem={setSelectedMagicItem}
          />
        ))
      }
      {/* )} */}
    </main>
  );
};
