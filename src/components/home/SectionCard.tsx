import { Card } from "../ui/card";
import { sectionsCardProps } from "./SectionCardsGrid";
import { cardVariants } from "@/utils/cardVariants";
import Link from "next/link";

export const SectionCard = ({
  description,
  icon,
  title,
  to,
  color,
}: sectionsCardProps) => {
  return (
    <Link href={to}>
      <Card className={cardVariants({ color })}>
        {icon}
        <span className="text-xl font-bold ">{title}</span>
        <span className="text-md">{description}</span>
      </Card>
    </Link>
  );
};
