import { dndFetch } from "@/api/DndApi";
import { DNDRulesListResp } from "@/interface/rules/RulesList";

export const getRules = async (): Promise<DNDRulesListResp> => {
  const data = dndFetch.get<DNDRulesListResp>("/rules");

  return data;
};
