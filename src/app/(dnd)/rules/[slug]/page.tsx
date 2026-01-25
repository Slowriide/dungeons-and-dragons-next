import { getRuleSubsectionDetails } from "@/services/rules/getRulesSections";
import { RuleSubsectionCard } from "@/components/rules/RuleSubsectionCard";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}

export default async function RulePage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const ruleSubsection = await getRuleSubsectionDetails({
    ruleSectionIndex: slug,
  });

  if (!ruleSubsection) {
    notFound();
  }

  return (
    <div>
      <RuleSubsectionCard ruleSubsection={ruleSubsection.rule} />
    </div>
  );
}
