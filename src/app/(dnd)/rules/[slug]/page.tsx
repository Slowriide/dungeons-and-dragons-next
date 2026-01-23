import { getRuleSubsectionDetails } from "@/services/rules/getRulesSections";
import { RuleSubsectionCard } from "@/components/rules/RuleSubsectionCard";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function RulePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return <p>Error</p>;
  }

  const ruleSubsection = await getRuleSubsectionDetails({
    ruleSectionIndex: slug,
  });

  return (
    <div>
      <RuleSubsectionCard ruleSubsection={ruleSubsection.rule} />
    </div>
  );
}
