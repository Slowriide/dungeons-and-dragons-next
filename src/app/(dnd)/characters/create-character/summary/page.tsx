import { Metadata } from "next";
import SummaryClient from "./ui/SummaryClient";

export const metadata: Metadata = {
  title: "Summary | Create Character – D&D Mini Beyond",
  description: "Take a look to your own character’s for D&D 5e.",
};

// Summary page for the character creation flow
// This page renders the final review of the character before creation is completed
export default function SummaryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 
        Client component responsible for:
        - Reading the character data from the store
        - Displaying the full character summary
        - Handling final confirmation / creation actions
      */}
      <SummaryClient />
    </div>
  );
}
