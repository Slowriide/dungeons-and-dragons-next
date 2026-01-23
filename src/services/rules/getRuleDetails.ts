import { dndFetch } from "@/api/DndApi";
import { DNDRace } from "@/interface/races/DNDRace";
import { DNDRule } from "@/interface/rules/DNDRule";

interface Options {
  rulesIndexes: string[];
}

export const getRuleDetails = async ({
  rulesIndexes,
}: Options): Promise<{ rules: DNDRule[] }> => {
  const detailPromise = rulesIndexes.map((rule) =>
    dndFetch.get<DNDRule>(`/rules/${rule}`)
  );

  const rules = await Promise.all(detailPromise);

  console.log(rules);

  return { rules };
};
