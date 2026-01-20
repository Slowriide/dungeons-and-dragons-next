// hooks/useDebounce.ts
import { useEffect, useState } from "react";

export function useDebouncedFilters<T extends Record<string, any>>(
  filters: T,
  delay: number = 500,
): T {
  const [debouncedFilters, setDebouncedFilters] = useState<T>(filters);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedFilters(filters);
    }, delay);

    return () => clearTimeout(timer);
  }, [JSON.stringify(filters), delay]);

  return debouncedFilters;
}
