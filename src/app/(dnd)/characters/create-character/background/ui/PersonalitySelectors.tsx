import { PersonalitySelector } from "./accordions/PersonalitySelector";
import { Background } from "@/data/Backgrounds";
import { DNDCharacter } from "@/interface/character/DNDCharacter";
import { Control, useForm } from "react-hook-form";

interface Props {
  selectedBackground: Background;
  control: Control<any>;
}

export const PersonalitySelectors = ({
  selectedBackground,
  control,
}: Props) => {
  const ideals: string[] = selectedBackground.ideals.flatMap(
    (ideal) => `${ideal.text} (${ideal.alignment})`
  );

  return (
    <div className="space-y-6">
      <h1 className="font-serif text-2xl font-semibold">Personality</h1>
      {selectedBackground.specialty && (
        <PersonalitySelector
          title="Select Speciality"
          description="Choose your speciality"
          group={selectedBackground.specialty ?? []}
          fieldName="specialty"
          control={control}
        />
      )}

      <PersonalitySelector
        title="Select Your Ideals"
        description="Choose your ideals"
        group={ideals ?? []}
        fieldName="ideal"
        control={control}
      />

      <PersonalitySelector
        title="Select Personality Traits"
        description="Choose your personality traits"
        group={selectedBackground.personalityTraits ?? []}
        fieldName="personalityTrait"
        control={control}
      />

      <PersonalitySelector
        title="Select Bonds"
        description="Choose your bonds"
        group={selectedBackground.bonds ?? []}
        fieldName="bond"
        control={control}
      />

      <PersonalitySelector
        title="Select Flaws"
        description="Choose your flaws"
        group={selectedBackground.flaws ?? []}
        fieldName="flaw"
        control={control}
      />
    </div>
  );
};
