import { RulesCard } from "../../../../components/rules/RulesCard";
import { DNDRule } from "@/interface/rules/DNDRule";

interface Props {
  rules: DNDRule[];
}

export const RulesGrid = ({ rules }: Props) => {
  return (
    <main className="lg:col-span-3 space-y-4 mb-10">
      {rules.map((rule) => (
        <RulesCard key={rule.index} rule={rule} />
      ))}
    </main>
  );
};
