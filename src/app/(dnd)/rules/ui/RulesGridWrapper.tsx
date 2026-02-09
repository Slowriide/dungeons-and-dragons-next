import { getRuleDetails } from "@/services/rules/getRuleDetails";
import { getRules } from "@/services/rules/getRules";
import { RulesGrid } from "./RulesGrid";

interface Props {
  query: string;
}
/**
 * RulesGridWrapper
 *
 * Server-side wrapper for fetching rules data.
 * Fetches all rule indexes first, then gets detailed information.
 * Passes the results to the client-side RulesGrid component.
 */
export const RulesGridWrapper = async ({ query }: Props) => {
  // Get all rule indexes
  const { results } = await getRules();

  const rulesIndexes = results.map((rule) => rule.index);

  const { rules } = await getRuleDetails({ rulesIndexes, query });

  return <RulesGrid rules={rules}></RulesGrid>;
};
