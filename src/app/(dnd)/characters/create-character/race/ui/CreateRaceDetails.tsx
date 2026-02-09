import { Button } from "@/components/ui/button";
import { MiniRacesGrid } from "@/app/(dnd)/characters/create-character/race/ui/MiniRacesGrid";

export const StepRace = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  return (
    <div>
      <div className="grid grid-cols-5 gap-x-2 space-y-6">
        <div className="col-span-5">
          <MiniRacesGrid />
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant={"outline"} type="submit" onClick={onPrev}>
          Previous
        </Button>
        <Button variant={"outline"} type="submit" onClick={onNext}>
          Continue
        </Button>
      </div>
    </div>
  );
};
