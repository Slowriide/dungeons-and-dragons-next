import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRaceTraits } from "@/hooks/races/useRaceTraits";
import { DraconicTable } from "../DracocincTable";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  indexes: string[];
}

export const TraitsAccordion = ({ indexes }: Props) => {
  const { data, isLoading, isError } = useRaceTraits({
    traitsIndexes: indexes,
  });

  if (!data || isLoading) {
    return <p>loading</p>;
  }

  const traits = data.trait;

  return (
    <div className="space-y-6">
      {traits.map((trait) => (
        <Accordion
          key={trait.index}
          type="single"
          collapsible
          className="w-full border border-gray-200 px-4 cursor-pointer "
        >
          <AccordionItem value="item-1" className="">
            <AccordionTrigger>{trait.name}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>
                <p>{trait.desc}</p>

                {/* Optional Prof Choices */}
                {trait.proficiency_choices?.from && (
                  <Select>
                    <SelectTrigger className="w-full border-gray-200 mt-2">
                      <SelectValue placeholder={`Select ${trait.name}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{trait.name}</SelectLabel>
                        {trait.proficiency_choices.from.options.map((r) => (
                          <SelectItem key={r.item.index} value={r.item.index}>
                            {r.item.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}

                {/* Dragonborn Trait */}
                {trait.trait_specific?.subtrait_options && (
                  <div>
                    <DraconicTable traits={traits} />
                    <Select>
                      <SelectTrigger className="w-full border-gray-200 mt-2">
                        <SelectValue placeholder={`Select ${trait.name}`} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>{trait.name}</SelectLabel>

                          {trait.trait_specific.subtrait_options.from.options.map(
                            (r) => (
                              <SelectItem
                                key={r.item.index}
                                value={r.item.index}
                              >
                                {r.item.name}
                              </SelectItem>
                            )
                          )}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
