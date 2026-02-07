import { DNDClass } from "@/interface/classes/DnDClass";
import { StepBasic } from "../../../ui/steps/StepBasic";

interface Props {
  dndClasses: DNDClass[];
  selectedClass?: string;
  selectedLevel: number;
}

export const StepBasicWrapper = async ({
  dndClasses,
  selectedClass,
  selectedLevel,
}: Props) => {
  if (!selectedClass) {
    return <StepBasic dndClasses={dndClasses} />;
  }

  return <StepBasic dndClasses={dndClasses} />;
};
