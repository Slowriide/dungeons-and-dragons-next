import { Sparkles, Sword, User, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Trait } from "@/interface/character/DNDCharacter";

export interface SheetTrait extends Trait {
  source: "racial" | "class" | "background" | "feat";
}

interface TraitsSectionProps {
  traits: SheetTrait[];
}

const sourceConfig = {
  racial: {
    label: "Racial",
    icon: User,
    color: "text-secondary-foreground/80",
  },
  class: { label: "Class", icon: Sword, color: "text-secondary-foreground/80" },
  background: {
    label: "Background",
    icon: Award,
    color: "text-secondary-foreground/80",
  },
  feat: {
    label: "Feat",
    icon: Sparkles,
    color: "text-secondary-foreground/80",
  },
};

export function TraitsSection({ traits }: TraitsSectionProps) {
  const groupedTraits = traits.reduce(
    (acc, trait) => {
      if (!acc[trait.source]) {
        acc[trait.source] = [];
      }
      acc[trait.source].push(trait);
      return acc;
    },
    {} as Record<string, SheetTrait[]>,
  );

  return (
    <div className="border-2 border-red-500/50 rounded-lg p-4 bg-card">
      <h3 className="border-b border-b-red-700 flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4" />
        Features & Traits
      </h3>

      <Accordion type="multiple" className="space-y-2">
        {Object.entries(groupedTraits).map(([source, sourceTraits]) => {
          const config = sourceConfig[source as keyof typeof sourceConfig];
          const Icon = config.icon;

          return (
            <div key={source} className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-serif uppercase tracking-wider text-muted-foreground mb-2">
                <Icon className={`w-3 h-3 ${config.color}`} />
                {config.label} Traits
              </div>

              {sourceTraits.map((trait, index) => (
                <AccordionItem
                  key={`${source}-${trait.id || trait.name}-${index}`}
                  value={trait.name}
                  className="border-0"
                >
                  <AccordionTrigger className="py-2 px-3 rounded-md hover:bg-parchment-dark/50 hover:no-underline text-sm font-medium text-ink">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full`} />
                      {trait.name}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3">
                    <p className="text-sm text-muted-foreground font-manuscript leading-relaxed pl-4">
                      {trait.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}
