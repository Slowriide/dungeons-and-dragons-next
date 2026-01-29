import { dndFetch } from "@/api/DndApi";
import { RulesSubSection } from "@/interface/rules/RulesSection";

interface Options {
  ruleSectionIndex: string;
}

export const getRuleSubsectionDetails = async ({
  ruleSectionIndex,
}: Options): Promise<RulesSubSection | null> => {
  try {
    const rule = await dndFetch.get<RulesSubSection>(
      `/rule-sections/${ruleSectionIndex}`,
    );

    return rule;
  } catch (error) {
    return null;
  }
};
