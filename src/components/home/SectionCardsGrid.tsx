import { ScrollIcon, ShieldIcon, SwordsIcon, Users2 } from "lucide-react";
import { SectionCard } from "./SectionCard";

export interface sectionsCardProps {
  title: string;
  icon: React.ReactElement;
  description: string;
  color: "pink" | "purple" | "yellow" | "red" | null | undefined;
  to: string;
}

const cardList: sectionsCardProps[] = [
  {
    description: "Browse spells",
    icon: <ScrollIcon className="text-pink-600 size-8" />,
    title: "Spells",
    color: "pink",
    to: "/spells",
  },
  {
    description: "Discover amazing creatures",
    icon: <SwordsIcon className="text-purple-800 size-8" />,
    title: "Monsters",
    color: "purple",
    to: "/monsters",
  },
  {
    description: "Find weapons armor and gear",
    icon: <ShieldIcon className="text-yellow-500 size-8" />,
    title: "Equipment",
    color: "yellow",
    to: "/equipment",
  },
  {
    description: "Learn about playeable races and traits",
    icon: <Users2 className="text-red-500 size-8" />,
    title: "Races",
    color: "red",
    to: "/races",
  },
];

export const SectionCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20">
      {cardList.map((card) => (
        <SectionCard
          key={card.title}
          title={card.title}
          icon={card.icon}
          description={card.description}
          color={card.color}
          to={card.to}
        />
      ))}
    </div>
  );
};
