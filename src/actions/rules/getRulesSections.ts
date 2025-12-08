import { dndFetch } from "@/api/DndApi";
import { RulesSubSection } from "@/interface/rules/RulesSection";

interface Options {
  ruleSectionIndex: string;
}

export const getRuleSubsectionDetails = async ({
  ruleSectionIndex,
}: Options): Promise<{ rule: RulesSubSection }> => {
  const rule = await dndFetch.get<RulesSubSection>(
    `/rule-sections/${ruleSectionIndex}`
  );
  console.log(rule);

  return { rule };
};
