"use client";
import { Button } from "@/components/ui/button";
import { BackgroundSelector } from "./BackgroundSelector";
import { useEffect, useRef, useState } from "react";
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
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

const backgroundSchema = z.object({
  backgroundId: z.string().min(1, "Debes seleccionar un background"),
  selectedProficiency: z.string().optional(),
  selectedEquipment: z.array(z.string()).optional(),
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
  const hydrated = useStoreHydrated();
  const [isFormReady, setIsFormReady] = useState(false);
  const prevBackgroundRef = useRef<string | null>(null);
  const {
    character,
    setBackground,
    setProficiencies,
    setSkill,
    addGold,
    setSelectedProficiencies,
    setBackgroundSelections,
    addEquipment,
    addLanguage,
    setSkills,
    setbackgroundTraits,
    setBackgroundLanguages,
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
      specialty: character.backgroundSelections?.specialty ?? "",
      personalityTrait: character.backgroundSelections?.personalityTrait ?? "",
      ideal: character.backgroundSelections?.ideal ?? "",
      bond: character.backgroundSelections?.bond ?? "",
      flaw: character.backgroundSelections?.flaw ?? "",
    },
    mode: "onChange",
  });

  const selectedBackgroundId = form.watch("backgroundId");
  const selectedProf = form.watch("selectedProficiency");

  const selectedBackground = BACKGROUNDS.find(
    (b) => b.id === selectedBackgroundId,
  );

  /// load data from store when hydrate
  useEffect(() => {
    if (!hydrated) return;

    const storedData: FormData = {
      backgroundId: character.background || "",
      selectedProficiency: character.selectedProficiencies?.[0] || "",
      selectedEquipment: [],
      selectedLanguages: character.backgroundLanguages || [],
      specialty: character.backgroundSelections?.specialty || "",
      personalityTrait: character.backgroundSelections?.personalityTrait || "",
      ideal: character.backgroundSelections?.ideal || "",
      bond: character.backgroundSelections?.bond || "",
      flaw: character.backgroundSelections?.flaw || "",
    };

    // ⚠️ Required to wait until Controller + shadcn Select are mounted
    setTimeout(() => {
      Object.entries(storedData).forEach(([key, value]) => {
        form.setValue(key as keyof FormData, value, {
          shouldDirty: false,
          shouldTouch: false,
          shouldValidate: false,
        });
      });

      prevBackgroundRef.current = storedData.backgroundId;
      setIsFormReady(true);
    }, 0);
  }, [hydrated]);

  // only if user changes backfround mannualy
  useEffect(() => {
    if (!isFormReady || !selectedBackgroundId) return;

    if (
      prevBackgroundRef.current &&
      prevBackgroundRef.current !== selectedBackgroundId &&
      selectedBackgroundId !== character.background
    ) {
      form.setValue("specialty", "");
      form.setValue("personalityTrait", "");
      form.setValue("ideal", "");
      form.setValue("bond", "");
      form.setValue("flaw", "");
      form.setValue("selectedProficiency", "");
      form.setValue("selectedEquipment", []);
      form.setValue("selectedLanguages", []);
    }

    prevBackgroundRef.current = selectedBackgroundId;
  }, [selectedBackgroundId, isFormReady]);
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
    const equipmentChoiceGroups =
      selectedBackground.startingEquipmentOptions?.filter(
        (group) => group.choose && group.choose > 0,
      ) ?? [];

    if (equipmentChoiceGroups.length > 0) {
      const requiredCount = equipmentChoiceGroups.length;

      const selectedCount =
        data.selectedEquipment?.filter((eq) => eq !== "").length ?? 0;

      if (selectedCount !== requiredCount) {
        form.setError("selectedEquipment", {
          message: `Debes seleccionar ${requiredCount} opciones de equipment`,
        });
        return false;
      }
    }

    //langs
    if (
      selectedBackground.languageOptions &&
      selectedBackground.languageOptions.choose > 0
    ) {
      const requiredLangs = selectedBackground.languageOptions.choose;
      const selectedLangs =
        data.selectedLanguages?.filter((lang) => lang !== "").length ?? 0;

      if (selectedLangs !== requiredLangs) {
        form.setError("selectedLanguages", {
          message: `Debes seleccionar exactamente ${requiredLangs} idioma${requiredLangs > 1 ? "s" : ""}`,
        });
        return false;
      }
    }

    return true;
  };

  console.log(form.formState.errors);

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
      selectedBackground.startingProficiencies
        .map((prof) => prof.index)
        .filter((index) => !index.startsWith("skill-")),
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
        (vs) => !currentSkills.some((cs) => cs.index === vs.index),
      ),
    ]);

    //Langs
    if (data.selectedLanguages && data.selectedLanguages.length > 0) {
      const validLanguages = data.selectedLanguages.filter(
        (lang) => lang !== "",
      );
      setBackgroundLanguages(validLanguages);
    }

    //Equipment

    //Base
    selectedBackground.startingEquipment.map((eq) => {
      if (
        eq.index.toLowerCase() === "gp" ||
        eq.index.toLowerCase() === "gold" ||
        eq.index.toLowerCase() === "pouch"
      ) {
        addGold(eq.quantity || 1);
      }

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
      eq.index.includes("pouch"),
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
                    ),
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
