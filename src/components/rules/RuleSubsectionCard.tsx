import { Card } from "../ui/card";
import { geisCinzel } from "@/config/fonts";
import { RulesSubSection } from "@/interface/rules/RulesSection";
import { MarkdownText } from "../MarkdownText";
interface Props {
  ruleSubsection: RulesSubSection;
}
export const RuleSubsectionCard = ({ ruleSubsection }: Props) => {
  return (
    <div className="flex flex-col mt-10 space-y-6">
      {/*Name */}
      <div className="flex flex-row items-center space-x-5">
        <h1
          className={`${geisCinzel.className}  antialiased font-bold text-4xl sm:text-5xl lg:text-4xl animate-fade-in`}
        >
          {ruleSubsection.name}
        </h1>
      </div>

      {/* Description */}
      <Card className=" glass-card animate-fade-in p-6 gap-y-2">
        <div>
          {ruleSubsection.desc && ruleSubsection.desc.length > 0 && (
            <div className="col-span-3 mt-2">
              <div className="text-muted-foreground leading-relaxed prose prose-invert">
                <MarkdownText content={ruleSubsection.desc}></MarkdownText>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
