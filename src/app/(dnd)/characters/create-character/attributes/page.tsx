import { Metadata } from "next";
import { StepAttributes } from "./ui/StepAttributes";

export const metadata: Metadata = {
  title: "Attributes Creator| Create Character – D&D Mini Beyond",
  description: "Select your character’s attributes for D&D 5e.",
};
/**
 * CreateCharacterAttributesPage
 *
 * Page responsible for rendering the Attributes step
 * in the character creation flow.
 *
 * This page is intentionally thin and delegates all
 * logic and state handling to the StepAttributes component.
 */
export default async function CreateCharacterAttributesPage() {
  return (
    <div className="min-h-screen bg-background">
      <StepAttributes />
    </div>
  );
}
