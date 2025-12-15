"use client";

import { useState } from "react";

import { StepBasic } from "./StepBasic";
import { StepAttributes } from "./StepAttributes";
import { StepRace } from "./StepRace";

export const CharactersView = () => {
  const [step, setStep] = useState<number>(1);

  const nextStep = () => setStep((s) => Math.min(s + 1, 5));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex flex-col">
        <div className="flex justify-between mb-8 px-4">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className={`flex flex-col items-center $`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${
                  s <= step
                    ? "bg-red-500 border-red-800 text-white"
                    : "bg-white border-red-500"
                }`}
              >
                {s}
              </div>
              <span className="text-xs mt-1 ">
                {["Basic", "Class", "Attributes", "Abilities", "Review"][s - 1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {step === 1 && <StepBasic onNext={nextStep} />}
      {step === 2 && <StepRace onNext={nextStep} onPrev={prevStep} />}
      {step === 3 && <StepAttributes onNext={nextStep} onPrev={prevStep} />}
      {/* {step === 3 && <Step3Skills onNext={next} onPrev={prev} />}
      {step === 4 && <Step4Equipment onNext={next} onPrev={prev} />}
      {step === 5 && <Step5Summary onPrev={prev} />} */}
    </div>
  );
};
