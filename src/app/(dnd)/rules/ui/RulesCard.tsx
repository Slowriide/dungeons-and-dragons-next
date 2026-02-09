import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { DNDRule } from "@/interface/rules/DNDRule";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { MarkdownText } from "../../../../components/MarkdownText";

interface Props {
  rule: DNDRule;
}

/**
 * RulesCard
 *
 * Displays a single D&D rule in a card format.
 * Features:
 * - Rule name as header
 * - Optional description rendered via Markdown
 * - Subsections with links to detail pages
 */
export const RulesCard = ({ rule }: Props) => {
  return (
    <Card className="glass-card p-4 gap-y-0">
      {/* Rule Name */}
      <h2 className="flex flex-row justify-between mb-1">
        <p
          className={`${geisCinzel.className} antialiased font-semibold text-lg`}
        >
          {rule.name}
        </p>
      </h2>

      {/* Rule Description */}
      {rule.desc.length > 20 && (
        <div className="max-w-none leading-relaxed">
          <MarkdownText content={rule.desc}></MarkdownText>
        </div>
      )}

      {/* Subsections */}

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
    </Card>
  );
};
