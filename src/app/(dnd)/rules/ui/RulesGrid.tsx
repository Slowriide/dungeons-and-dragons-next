import { RulesCard } from "./RulesCard";
import { DNDRule } from "@/interface/rules/DNDRule";

interface Props {
  rules: DNDRule[];
}

/**
 * RulesGrid
 *
 * Client-side component displaying a list of rule cards.
 * Currently renders all rules as a vertical list.
 * Can be extended for pagination or selection.
 */
export const RulesGrid = ({ rules }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {rules.map((rule) => (
        <RulesCard key={rule.index} rule={rule} />
      ))}
    </main>
  );
};
