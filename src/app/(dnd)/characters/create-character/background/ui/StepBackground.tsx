"use client";
import { Button } from "@/components/ui/button";
import { BackgroundSelector } from "./BackgroundSelector";
import { useEffect } from "react";
import { BACKGROUNDS } from "@/data/Backgrounds";
import { BackgroundAccordion } from "./accordions/BackgroundAccordion";
import { BackgroundMultipleOptionsAccordion } from "./accordions/BackgroundMultipleOptionsAccordion";
import { BackgroundOptionsAccordion } from "./accordions/BackgroundOptionsAccordion";
import useDNDCharacterStore from "@/store/characte.store";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { AccordionSelector } from "./AccordionSelector";
import { PersonalitySelectors } from "./PersonalitySelectors";
import { categorizeEquipment } from "../../../utils/categorizeEquipment";
import { DND_SKILLS } from "@/data/skills";
import { CharacterSkill } from "@/interface/character/DNDCharacter";

const backgroundSchema = z.object({
  backgroundId: z.string().min(1, "Debes seleccionar un background"),
  selectedProficiency: z.string().optional(),
  selectedEquipment: z.array(z.string()).min(1),
  selectedLanguages: z.array(z.string()).optional(),

  //Personality
  specialty: z.string().optional(),
  personalityTrait: z.string().min(1, "Select one trait"),
  ideal: z.string().min(1, "Select one ideal"),
  bond: z.string().min(1, "Select one bond"),
  flaw: z.string().min(1, "Select one flaw"),
});

type FormData = z.infer<typeof backgroundSchema>;

export const StepBackground = () => {
  const router = useRouter();

  const {
    character,
    setBackground,
    setProficiencies,
    setSelectedProficiencies,
    setBackgroundSelections,
    addEquipment,
    addLanguage,
    setSkills,
    addClassFeature,
    setbackgroundTraits,
    prevStep,
    nextStep,
  } = useDNDCharacterStore();

  const form = useForm<FormData>({
    resolver: zodResolver(backgroundSchema),
    defaultValues: {
      backgroundId: character.background || "",
      selectedProficiency: undefined,
      selectedEquipment: [],
      selectedLanguages: [],
      specialty: "",
      personalityTrait: "",
      ideal: "",
      bond: "",
      flaw: "",
    },
    mode: "onChange",
  });

  const selectedBackgroundId = form.watch("backgroundId");
  const selectedProf = form.watch("selectedProficiency");

  const selectedBackground = BACKGROUNDS.find(
    (b) => b.id === selectedBackgroundId
  );

  useEffect(() => {
    if (selectedBackground) {
      const count = selectedBackground.languageOptions?.choose ?? 0;
      form.setValue("selectedLanguages", Array(count).fill(""));
    }
  }, [selectedBackgroundId, selectedBackground, form]);

  const validateDynamicRules = (data: FormData) => {
    if (!selectedBackground) return true;

    //prof
    if (selectedBackground.proficienciesOptions) {
      if (!data.selectedProficiency) {
        form.setError("selectedProficiency", {
          message: "Debes seleccionar una proficiency",
        });
        return false;
      }
    }

    //equipment
    if (
      selectedBackground.startingEquipmentOptions &&
      selectedBackground.startingEquipmentOptions?.length > 0
    ) {
      const requiredCount = selectedBackground.startingEquipmentOptions.length;
      const selectedCount = data.selectedEquipment?.filter(
        (eq) => eq !== ""
      ).length;

      if (requiredCount !== selectedCount) {
        form.setError("selectedEquipment", {
          message: `Debes seleccionar ${requiredCount} opciones de equipment`,
        });
        return false;
      }
    }

    //langs
    const requiredLangs = selectedBackground.languageOptions?.choose || 0;
    const selectedLangs = data.selectedLanguages?.filter(
      (lang) => lang !== ""
    ).length;

    if (
      selectedBackground.languageOptions &&
      selectedBackground.languageOptions?.choose > 0
    ) {
      if (requiredLangs !== selectedLangs) {
        form.setError("selectedLanguages", {
          message: `Debes seleccionar ${requiredLangs} idiomas`,
        });
        return false;
      }
    }
    return true;
  };

  const onSubmit = (data: FormData) => {
    if (!selectedBackground) return;
    if (!validateDynamicRules(data)) return;

    //Background
    setBackground(data.backgroundId);

    setbackgroundTraits({
      id: selectedBackground.feature.title,
      name: selectedBackground.feature.title,
      description: selectedBackground.feature.description,
    });

    //Personality
    if (
      data.specialty ||
      data.personalityTrait ||
      data.ideal ||
      data.bond ||
      data.flaw
    ) {
      setBackgroundSelections({
        specialty: data.specialty,
        personalityTrait: data.personalityTrait,
        ideal: data.ideal,
        bond: data.bond,
        flaw: data.flaw,
      });
    }

    //Profs

    //auto
    setProficiencies(
      selectedBackground.startingProficiencies.map((prof) => prof.index)
    );
    //selecteds
    if (data.selectedProficiency) {
      setSelectedProficiencies([data.selectedProficiency]);
    }

    //Skills
    const backgroundSkills: string[] = [];

    selectedBackground.startingProficiencies.forEach((skill) => {
      if (skill.index.includes("skill")) {
        backgroundSkills.push(skill.index);
      }
    });

    if (data.selectedProficiency?.includes("skill")) {
      backgroundSkills.push(data.selectedProficiency);
    }

    const validSkills = backgroundSkills.map((s) => {
      const skillInfo = DND_SKILLS[s as keyof typeof DND_SKILLS];
      return {
        index: s,
        name: skillInfo.name,
        proficient: true,
        attribute: skillInfo.attribute,
      };
    });

    const currentSkills: CharacterSkill[] = character.skills || [];

    setSkills([
      ...currentSkills,
      ...validSkills.filter(
        (vs) => !currentSkills.some((cs) => cs.index === vs.index)
      ),
    ]);

    //Langs
    if (data.selectedLanguages && data.selectedLanguages.length > 0) {
      const validLanguages = data.selectedLanguages?.filter(
        (lang) => lang !== ""
      );
      validLanguages.forEach((lang) => addLanguage(lang));
    }

    //Equipment

    //Base
    selectedBackground.startingEquipment.map((eq) => {
      addEquipment({
        name: eq.name,
        index: eq.index,
        quantity: eq.quantity || 1,
        equipped: false,
        type: categorizeEquipment(eq.index),
      });
    });

    //optional
    if (data.selectedEquipment && data.selectedEquipment.length > 0) {
      data.selectedEquipment
        .filter((eq) => eq !== "")
        .forEach((equipIndex) => {
          addEquipment({
            index: equipIndex,
            name: equipIndex.replace(/-/g, " "), // Temporal, mejorar después
            type: categorizeEquipment(equipIndex),
            quantity: 1,
            equipped: false,
          });
        });
    }

    // Gold
    const pouch = selectedBackground.startingEquipment.find((eq) =>
      eq.index.includes("pouch")
    );

    const gold = pouch?.quantity;

    // Gold
    addEquipment({
      index: "gp",
      name: "Gold Pieces",
      type: "gold",
      quantity: gold || 0,
    });

    console.log("HYDRATED STATE", useDNDCharacterStore.getState().character);

    nextStep();
    router.push("/characters/create-character/summary");
  };

  const AbBonus =
    selectedBackground?.startingProficiencies.map((p) => p.name).join(", ") ??
    "";

  const BaseEquipment =
    selectedBackground?.startingEquipment.map((p) => p.name).join(", ") ?? "";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="min-h-screen bg-background space-y-6 mb-10">
          <h1 className="font-serif text-2xl font-semibold">Background</h1>
          {/* Main selector */}

          <BackgroundSelector
            control={form.control}
            value={selectedBackgroundId}
          />

          {selectedBackground && (
            <PersonalitySelectors
              selectedBackground={selectedBackground}
              control={form.control}
            />
          )}

          {/* Features */}
          {selectedBackground && (
            <div className="mt-8 space-y-6">
              <div>
                <h1 className="font-serif text-xl font-semibold mb-2">
                  Feature
                </h1>
                {/* Accordion Feature */}
                <BackgroundAccordion
                  title={selectedBackground.feature.title}
                  description={selectedBackground.feature.description}
                />
              </div>

              {/* Proficiencies */}
              <div className="space-y-6">
                <h1 className="font-serif text-xl font-semibold mb-2">
                  Proficiencies
                </h1>

                {/* Accordion Ability bonus */}
                <BackgroundAccordion
                  title={"Ability Bonuses"}
                  description={AbBonus}
                />

                {/* Accordion Select Proficiencies */}
                {selectedBackground.proficienciesOptions && (
                  <div className=" bg-background space-y-6 ">
                    <AccordionSelector
                      control={form.control}
                      selectedBackground={selectedBackground}
                      selectedProficiency={selectedProf}
                    />
                  </div>
                )}

                {/* Accordion Select Language */}
                {selectedBackground.languageOptions &&
                  selectedBackground.languageOptions?.options.length > 0 && (
                    <BackgroundMultipleOptionsAccordion
                      title="Select Languages"
                      description="Choose your background languages"
                      options={selectedBackground.languageOptions}
                      control={form.control}
                    />
                  )}
              </div>

              {/* Equipment */}
              <div className="space-y-6">
                <h1 className="font-serif text-xl font-semibold mb-2">
                  Equipment
                </h1>

                <BackgroundAccordion
                  title={"Starting equipment"}
                  description={BaseEquipment}
                />

                {selectedBackground.startingEquipmentOptions &&
                  selectedBackground.startingEquipmentOptions.map(
                    (group, index) => (
                      <BackgroundOptionsAccordion
                        key={index}
                        index={index}
                        title={`Select equipment (${index + 1})`}
                        description={`Choose ${group.choose} option`}
                        group={group}
                        control={form.control}
                        fieldName={`selectedEquipment`}
                      />
                    )
                  )}
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <Button
              variant={"outline"}
              type="button"
              onClick={() => {
                prevStep();
                router.back();
              }}
            >
              Previous
            </Button>
            <Button
              variant={"outline"}
              type="submit"
              disabled={!selectedBackground}
            >
              Continue
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
