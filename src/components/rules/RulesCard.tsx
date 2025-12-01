import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getMagicItemRarityColor } from "@/utils/getMagicItemRarityColor";
import { DNDRule } from "@/interface/rules/DNDRule";

interface Props {
  rule: DNDRule;
  setSelectedMagicItem: (rule: DNDRule) => void;
}

export const RulesCard = ({ rule, setSelectedMagicItem }: Props) => {
  return (
    <Card
      className="glass-card cursor-pointer p-4 gap-y-0"
      onClick={() => setSelectedMagicItem(rule)}
    >
      <div className="flex flex-row justify-between mb-1">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {rule.name}
        </p>
      </div>

      {rule.desc.length > 20 && (
        <p className="text-sm line-clamp-3 mb-2 text-muted-foreground">
          {rule.desc.split("#")}
        </p>
      )}
      <div className="">
        {rule.subsections.map((sub) => (
          <div key={sub.index} className=" flex flex-row">
            <p>-</p>
            <ul
              key={sub.index}
              className="hover:underline text-muted-foreground ml-1"
            >
              {sub.name}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};
