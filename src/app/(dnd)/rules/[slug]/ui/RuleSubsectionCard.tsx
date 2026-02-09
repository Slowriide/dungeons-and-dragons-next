import { Card } from "../../../../../components/ui/card";
import { geisCinzel } from "@/config/fonts";
import { RulesSubSection } from "@/interface/rules/RulesSection";
import { MarkdownText } from "../../../../../components/MarkdownText";
interface Props {
  ruleSubsection: RulesSubSection;
}

/**
 * RuleSubsectionCard
 *
 * Displays a single rule subsection in detail.
 * Features:
 * - Title as H1
 * - Full description rendered via Markdown
 */
export const RuleSubsectionCard = ({ ruleSubsection }: Props) => {
  return (
    <article className="flex flex-col mt-4 lg:mt-10 space-y-6">
      {/*Name */}
      <header className="flex flex-row items-center space-x-5">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {ruleSubsection.name}
        </h1>
      </header>

      {/* Description */}
      <Card className=" glass-card animate-fade-in p-6 gap-y-2">
        <section>
          {ruleSubsection.desc && ruleSubsection.desc.length > 0 && (
            <div className="col-span-3 mt-2">
              <div className="text-muted-foreground leading-relaxed prose prose-invert">
                <MarkdownText content={ruleSubsection.desc}></MarkdownText>
              </div>
            </div>
          )}
        </section>
      </Card>
    </article>
  );
};
