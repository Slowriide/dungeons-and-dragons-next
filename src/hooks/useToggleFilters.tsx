"use client";
import { useRouter, useSearchParams } from "next/navigation";

export const useToggleFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggleFilters = (key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString());

    const current = params.getAll(key);

    let newParams: string[];
    if (value === undefined) {
      params.delete(key);
      params.set("page", "1");

      router.push(`?${params.toString()}`, { scroll: false });
      return;
    }

    if (current.includes(value)) {
      newParams = current.filter((params) => params != value);
    } else {
      newParams = [...current, value];
    }

    params.delete(key);

    newParams.forEach((value) => {
      params.append(key, value);
    });

    if (key !== "page") {
      params.set("page", "1");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };
  return { toggleFilters };
};
