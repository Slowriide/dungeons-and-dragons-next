import { RaceHeaderSkeleton } from "../../races/ui/skeletons/RaceHeaderSkeleton";
import { RaceSummarySkeleton } from "../../races/ui/skeletons/RaceSummarySkeleton";
import { ClassHeaderSkeleton } from "../ui/skeletons/ClassHeaderSkeleton";
import { ClassSummarySkeleton } from "../ui/skeletons/ClassSummarySkeleton";
//TODO
export default function ClassesGridSkeleton() {
  return (
    <div>
      <ClassHeaderSkeleton />
      <ClassSummarySkeleton />
    </div>
  );
}
