import { Skeleton } from "@/components/ui/skeleton";
import SkeletonHeader from "../ui/skeletons/MonsterHeaderSkeleton";
import { MonsterSummarySkeleton } from "../ui/skeletons/MonsterSummarySkeleton";

export default function MonsterHeaderSkeleton() {
  return (
    <div>
      <SkeletonHeader />
      <MonsterSummarySkeleton />
    </div>
  );
}
