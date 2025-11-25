import { getEquipment } from "@/actions/equipment/getEquipment";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

interface Options {
  take?: number;
}

export const useEquipmentList = ({ take = 12 }: Options) => {
  const search = useSearchParams();

  const page = Number(search.get("page") || 1);

  const result = useQuery({
    queryKey: ["Equipment", { page }],
    queryFn: () => getEquipment(),
    staleTime: Infinity,
  });

  const resluts = { ...result };

  const count = resluts.data?.count || 0;

  const totalPages = take ? Math.ceil(count / take) : null;

  const start = (page - 1) * take;
  const end = page * take;

  const paginatedResults = resluts.data?.results.slice(start, end);

  return {
    ...result,
    totalPages,
    paginatedResults,
  };
};
