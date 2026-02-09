import {
  BowArrowIcon,
  NotebookTextIcon,
  ScrollIcon,
  ShieldIcon,
  SwordsIcon,
  Users2,
  Wand2Icon,
} from "lucide-react";
import { SectionCard } from "./SectionCard";

// Shared type for section navigation cards on the homepage.
// Keeping this typed helps ensure consistency across cards.
export interface sectionsCardProps {
  title: string;
  icon: React.ReactElement;
  description: string;
  color:
    | "pink"
    | "purple"
    | "yellow"
    | "red"
    | "gray"
    | "green"
    | "fuchsia"
    | "emerald"
    | null
    | undefined;
  to: string;
}

// Static configuration for main navigation sections.
// This makes the grid data-driven and easy to reorder or extend.
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
    description: "Playable D&D 5e races, traits and racial abilities",
    icon: <Users2 className="text-red-500 size-8" />,
    title: "Races",
    color: "red",
    to: "/races",
  },
  {
    description: "Explore all D&D 5e character classes and their features",
    icon: <BowArrowIcon className="text-gray-500 size-8" />,
    title: "Classes",
    color: "gray",
    to: "/classes",
  },
  {
    description: "Legendary and common D&D 5e magic items",
    icon: <Wand2Icon className="text-fuchsia-600 size-8" />,
    title: "Magic items",
    color: "fuchsia",
    to: "/magic-items",
  },
  {
    description: "Learn about playeable races and traits",
    icon: <NotebookTextIcon className="text-emerald-500 size-8" />,
    title: "Rules",
    color: "emerald",
    to: "/rules",
  },
];

// Landmark section for main homepage navigation
// Improves accessibility and groups primary site entry points
export const SectionCardsGrid = () => {
  return (
    <section aria-labelledby="main-sections" className="my-20">
      <h2 id="main-sections" className="sr-only">
        Main sections
      </h2>

      {/* Responsive grid for homepage navigation cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};
