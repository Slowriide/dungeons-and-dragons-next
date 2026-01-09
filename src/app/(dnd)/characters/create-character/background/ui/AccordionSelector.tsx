import { Background } from "@/data/Backgrounds";
import { FetcheableChoiceAccordion } from "./accordions/FetcheableChoiceAccordion";

import { getOptionsCategory } from "../utils/getOptionsCategory";
import { Control } from "react-hook-form";
import { BackgroundSimpleOptionAccordion } from "./accordions/BackgoundSiimpleOptionAccordion";

interface Props {
  selectedBackground: Background;
  selectedProficiency?: string;
  control: Control<any>;
}

export const AccordionSelector = ({
  selectedBackground,
  selectedProficiency,
  control,
}: Props) => {
  const proficiencyGroup = selectedBackground.proficienciesOptions;

  if (!proficiencyGroup) return null;

  const option = proficiencyGroup.options[0];
  const isFetchNeeded = getOptionsCategory(option.index);

  return (
    <>
      {isFetchNeeded ? (
        <FetcheableChoiceAccordion
          title={selectedProficiency ?? `Select Proficiency (${option.name})`}
          description={`The ${selectedBackground.name} allows you to choose one proficiency`}
          indexes={[option.index]}
          control={control}
          fieldName="selectedProficiency"
        />
      ) : (
        <BackgroundSimpleOptionAccordion
          title={selectedProficiency ?? "Select Proficiency"}
          description={`The ${selectedBackground.name} allows you to choose one proficiency`}
          options={proficiencyGroup.options}
          control={control}
          fieldName="selectedProficiency"
        />
      )}
    </>
  );
};
