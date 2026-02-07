import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { DNDRule } from "@/interface/rules/DNDRule";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { MarkdownText } from "../../../../components/MarkdownText";

interface Props {
  rule: DNDRule;
}

export const RulesCard = ({ rule }: Props) => {
  return (
    <Card className="glass-card p-4 gap-y-0">
      <div className="flex flex-row justify-between mb-1">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {rule.name}
        </p>
      </div>

      {rule.desc.length > 20 && (
        <div className="max-w-none leading-relaxed">
          <MarkdownText content={rule.desc}></MarkdownText>
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
