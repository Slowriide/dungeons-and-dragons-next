import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DNDRace } from "@/interface/races/DNDRace";

interface Props {
  title: string;
  description: string;
}

export const RaceAccordion = ({ description, title }: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-gray-200 px-4 cursor-pointer"
    >
      <AccordionItem value="item-1" className="">
        <AccordionTrigger> {title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>{description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
