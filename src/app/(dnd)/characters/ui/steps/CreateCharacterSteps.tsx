"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Character creation steps definition.
 * Each step maps a label to its route segment.
 */
const STEPS = [
  { label: "Basic", path: "basic" },
  { label: "Race", path: "race" },
  { label: "Attributes", path: "attributes" },
  { label: "Background", path: "background" },
  { label: "Summary", path: "summary" },
];
export const CreateCharacterSteps = () => {
  // Current route path (used to determine active step)
  const pathname = usePathname();

  /**
   * Find the index of the current step based on the URL.
   * If no step matches, findIndex returns -1.
   */
  const currentStepIndex = STEPS.findIndex((step) =>
    pathname.includes(step.path),
  );

  /**
   * Convert index to step number (1-based).
   * Default to step 1 if no match is found.
   */
  const currentStep = currentStepIndex === -1 ? 0 : currentStepIndex + 1;

  return (
    <nav
      aria-label="Character creation steps"
      className="max-w-3xl mx-auto space-y-6"
    >
      <div className="flex flex-col">
        <div className="flex justify-between mb-8 mt-12 px-4">
          {STEPS.map((s, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber <= currentStep;

            return (
              <Link
                href={`/characters/create-character/${s.path}`}
                key={s.path}
              >
                <div className={`flex flex-col items-center`}>
                  {/* Step circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                      isActive
                        ? "bg-red-500 border-red-800 text-white"
                        : "bg-white border-red-500"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  <span className="text-xs mt-1 ">{s.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
