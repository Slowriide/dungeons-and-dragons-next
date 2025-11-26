export interface DNDRulesListResp {
  count: number;
  results: DNDRulesList[];
}

export interface DNDRulesList {
  index: string;
  name: string;
  level: number;
  url: string;
}
