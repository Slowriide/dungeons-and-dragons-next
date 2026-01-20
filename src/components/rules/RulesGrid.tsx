"use client";

import { useState } from "react";
import { RulesCard } from "./RulesCard";
import { DNDRule } from "@/interface/rules/DNDRule";
import { useRulesDetails } from "@/hooks/rules/useRulesDetails";
import { useRulesList } from "@/hooks/rules/useRulesList";

export const RulesGrid = () => {
  const { data: rulesList } = useRulesList();

  const rulesIndexes = rulesList?.results.map((rule) => rule.index) || [];

  const { isLoading, data, isError, filteredRules } = useRulesDetails({
    rulesIndexes,
  });

  if (isLoading || !data) return <p>Loading...</p>;

  if (isError || !data) {
    return <p>error...</p>;
  }

  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {filteredRules.map((rule) => (
        <RulesCard key={rule.index} rule={rule} />
      ))}
    </main>
  );
};
