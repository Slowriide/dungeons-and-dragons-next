import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { DNDRule } from "@/interface/rules/DNDRule";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Props {
  rule: DNDRule;
  setSelectedMagicItem: (rule: DNDRule) => void;
}

export const RulesCard = ({ rule, setSelectedMagicItem }: Props) => {
  return (
    <Card
      className="glass-card p-4 gap-y-0"
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
        <div className="max-w-none leading-relaxed">
          <ReactMarkdown>{rule.desc}</ReactMarkdown>
        </div>
      )}
      <div className="">
        {rule.subsections.map((sub) => (
          <div key={sub.index} className=" flex flex-row">
            <p>-</p>
            <Link href={`/rules/${sub.index}`}>
              <ul
                key={sub.index}
                className="hover:underline text-muted-foreground ml-1 cursor-pointer"
              >
                {sub.name}
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </Card>
  );
};
