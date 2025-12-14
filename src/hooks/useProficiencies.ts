"use client";

import { useQuery } from "@tanstack/react-query";
import { DNDProficiencie } from "@/interface/DNDProficiencie";
import { getProficencies } from "@/actions/getProficencies";

interface Props {
  profIndexes: string[];
}

export const useProficiencies = ({ profIndexes }: Props) => {
  return useQuery<{
    proficiencies: DNDProficiencie[];
  }>({
    queryKey: ["proficiencie", profIndexes],
    queryFn: () => getProficencies({ profIndexes }),
    staleTime: Infinity,
  });
};
