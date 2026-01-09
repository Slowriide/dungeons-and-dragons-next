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
import { Control, useWatch } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Trait } from "@/interface/character/DNDCharacter";
import { useEffect } from "react";

interface FormData {
  raceTraits: Trait[];
  selectedTraits: Trait[];
  abilityBonus: string[];
  language: string[];
  tools: string[];
  alignment: string;
}

interface Props {
  indexes: string[];
  control: Control<FormData>;
  onTraitsLoaded?: (automaticTraits: Trait[]) => void;
}

export const TraitsAccordion = ({
  indexes,
  control,
  onTraitsLoaded,
}: Props) => {
  const { data, isLoading, isError } = useRaceTraits({
    traitsIndexes: indexes,
  });

  const currentTraits = useWatch({
    control,
    name: "selectedTraits",
    defaultValue: [],
  });

  useEffect(() => {
    if (data?.trait) {
      // Separar traits automáticos y crear objetos completos
      const automaticTraits: Trait[] = data.trait
        .filter(
          (t) =>
            !t.proficiency_choices?.from &&
            !t.trait_specific?.subtrait_options &&
            !t.language_options?.from
        )
        .map((t) => ({
          id: t.index,
          name: t.name,
          description: t.desc.join(" "), // 👈 Concatenar descripciones
        }));

      // Notificar al padre con los traits completos
      if (onTraitsLoaded && automaticTraits.length > 0) {
        onTraitsLoaded(automaticTraits);
      }
    }
  }, [data, onTraitsLoaded]);

  if (!data || isLoading) {
    return <p>loading</p>;
  }

  const handleTraitSelect = (
    traitIndex: string,
    traitName: string,
    traitDescription: string,
    onChange: (value: Trait[]) => void
  ) => {
    const existingIndex = currentTraits.findIndex((t) => t.name === traitName);

    let updatedTraits: Trait[];

    if (existingIndex >= 0) {
      // Actualizar trait existente
      updatedTraits = [...currentTraits];
      updatedTraits[existingIndex] = {
        name: traitName,
        description: traitDescription,
        id: traitIndex,
      };
    } else {
      // agregar trait
      updatedTraits = [
        ...currentTraits,
        {
          name: traitName,
          description: traitDescription,
          id: traitIndex,
        },
      ];
    }
    onChange(updatedTraits);
  };

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
                <FormField
                  control={control}
                  name="selectedTraits"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        {trait.proficiency_choices?.from && (
                          <Select
                            onValueChange={(selectedIndex) => {
                              const selectedOption =
                                trait.proficiency_choices?.from.options.find(
                                  (opt) => opt.item.index === selectedIndex
                                );
                              if (selectedOption) {
                                handleTraitSelect(
                                  selectedIndex,
                                  selectedOption.item.name,
                                  trait.desc.join(" "), // Concatenar descripciones
                                  field.onChange
                                );
                              }
                            }}
                          >
                            <SelectTrigger className="w-full border-gray-200 mt-2">
                              <SelectValue
                                placeholder={`Select ${trait.name}`}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>{trait.name}</SelectLabel>
                                {trait.proficiency_choices.from.options.map(
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
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dragonborn Trait */}
                {trait.trait_specific?.subtrait_options && (
                  <div>
                    <DraconicTable traits={traits} />
                    <FormField
                      control={control}
                      name="selectedTraits"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              onValueChange={(selectedIndex) => {
                                // Buscar el subtrait seleccionado
                                const selectedOption =
                                  trait.trait_specific?.subtrait_options?.from.options.find(
                                    (opt) => opt.item.index === selectedIndex
                                  );

                                if (selectedOption) {
                                  handleTraitSelect(
                                    selectedIndex,
                                    selectedOption.item.name,
                                    trait.desc.join(" "),
                                    field.onChange
                                  );
                                }
                              }}
                            >
                              <SelectTrigger className="w-full border-gray-200 mt-2">
                                <SelectValue
                                  placeholder={`Select ${trait.name}`}
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>{trait.name}</SelectLabel>

                                  {trait.trait_specific?.subtrait_options.from.options.map(
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
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
