import { Metadata } from "next";
import { StepBackground } from "./ui/StepBackground";

export const metadata: Metadata = {
  title: "Choose Backgronud | Create Character – D&D Mini Beyond",
  description:
    "Select your character’s background and personality traits for D&D 5e.",
};

// Page for creating a character's background
// Wraps the StepBackground component in a full-page layout
export default async function CreateCharacterBackgroundPage() {
  await new Promise((r) => setTimeout(r, 2000));
  return (
    <div className="min-h-screen bg-background">
      <StepBackground />
    </div>
  );
}
