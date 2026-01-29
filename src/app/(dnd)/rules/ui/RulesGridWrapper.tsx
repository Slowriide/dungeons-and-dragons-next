import { getRuleDetails } from "@/services/rules/getRuleDetails";
import { getRules } from "@/services/rules/getRules";
import { RulesGrid } from "./RulesGrid";

interface Props {
  query: string;
}

export const RulesGridWrapper = async ({ query }: Props) => {
  const { results } = await getRules();

  const rulesIndexes = results.map((rule) => rule.index);

  const { rules } = await getRuleDetails({ rulesIndexes, query });

  return <RulesGrid rules={rules}></RulesGrid>;
};
