import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  keys: string[];
}

export const ResetFiltersButton = ({ keys }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const resetFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    keys.forEach((key) => params.delete(key));

    params.set("page", "1");
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <Button
      variant={"default"}
      onClick={() => resetFilters()}
      className="w-full justify-center"
    >
      Reset filters
    </Button>
  );
};
