"use client";

import { usePathname } from "next/navigation";
const STEPS = [
  { label: "Basic", path: "basic" },
  { label: "Race", path: "race" },
  { label: "Attributes", path: "attributes" },
  { label: "Abilities", path: "abilities" },
  { label: "Review", path: "review" },
];
export const CreateCharacterSteps = () => {
  const pathname = usePathname();

  const currentStepIndex = STEPS.findIndex((step) =>
    pathname.includes(step.path)
  ); //si no encuentra devuelve -1

  const currentStep = currentStepIndex === -1 ? 0 : currentStepIndex + 1;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col ">
        <div className="flex justify-between mb-8 mt-12 px-4">
          {STEPS.map((s, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber <= currentStep;

            return (
              <div key={s.path} className={`flex flex-col items-center $`}>
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
            );
          })}
        </div>
      </div>
    </div>
  );
};
