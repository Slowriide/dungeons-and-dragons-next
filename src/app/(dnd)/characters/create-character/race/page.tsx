import { Metadata } from "next";
import { StepRace } from "./ui/StepRace";

export const metadata: Metadata = {
  title: "Choose Race | Create Character – D&D Mini Beyond",
  description: "Select your character’s race and racial traits for D&D 5e.",
};

export default async function CreateCharacterRace() {
  return (
    <div className="min-h-screen bg-background">
      <StepRace />
    </div>
  );
}
