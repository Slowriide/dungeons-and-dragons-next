import { dndFetch } from "@/api/DndApi";
import { DNDRule } from "@/interface/rules/DNDRule";

interface Options {
  rulesIndexes: string[];
  query: string;
}

export const getRuleDetails = async ({
  rulesIndexes,
  query,
}: Options): Promise<{ rules: DNDRule[] }> => {
  const detailPromise = rulesIndexes.map((rule) =>
    dndFetch.get<DNDRule>(`/rules/${rule}`),
  );

  const rules = await Promise.all(detailPromise);

  const filteredRules = rules.filter((rule) => {
    const filtered =
      rule.name.toLowerCase().includes(query) ||
      rule.index.toLowerCase().includes(query);

    return filtered;
  });

  return { rules: filteredRules };
};
