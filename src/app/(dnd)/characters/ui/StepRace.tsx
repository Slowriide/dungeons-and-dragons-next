"use client";
import { Button } from "@/components/ui/button";
import { MiniRacesGrid } from "@/components/races/MiniRacesGrid";

export const StepRace = () => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-2 space-y-6">
        <div className="col-span-5">
          <MiniRacesGrid />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant={"outline"} type="submit">
          Previous
        </Button>
        <Button variant={"outline"} type="submit">
          Continue
        </Button>
      </div>
    </div>
  );
};
