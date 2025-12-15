import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { PurpleOption } from "@/interface/races/DNDRace";

interface Props {
  title: string;
  description: string;
  options: PurpleOption[];
}

export const RaceAccordionOptions = ({
  description,
  title,
  options,
}: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-gray-200 px-4 cursor-pointer"
    >
      <AccordionItem value="item-1" className="">
        <AccordionTrigger> {title}</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <div>
            <p>{description}</p>

            <Select>
              <SelectTrigger className="w-full border-gray-200 mt-2">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>
                  {options.map((r) => (
                    <SelectItem key={r.item.index} value={r.item.index}>
                      {r.item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
