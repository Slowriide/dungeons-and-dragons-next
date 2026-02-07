import { getRuleSubsectionDetails } from "@/services/rules/getRulesSections";
import { RuleSubsectionCard } from "@/app/(dnd)/rules/[slug]/ui/RuleSubsectionCard";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    slug?: string;
  }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spellIndex = await params;
  const slug = spellIndex.slug ?? "";

  if (!slug) {
    return {
      title: "Rule not found | D&D Mini Beyond",
    };
  }

  const rule = await getRuleSubsectionDetails({
    ruleSectionIndex: slug,
  });

  if (!rule) {
    return {
      title: "Rule not found | D&D Mini Beyond",
    };
  }

  return {
    title: `${rule.name} | D&D Mini Beyond`,
    description:
      rule.desc ?? `Detailed information about the D&D 5e rule ${rule.name}.`,
    openGraph: {
      title: `${rule.name} – D&D 5e Rule`,
      description: rule.desc,
      type: "article",
      images: [
        {
          url: "/og/rules/rule.png",
          width: 1200,
          height: 630,
          alt: rule.name,
        },
      ],
    },
  };
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
      <RuleSubsectionCard ruleSubsection={ruleSubsection} />
    </div>
  );
}
