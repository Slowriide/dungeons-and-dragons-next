import { useEffect, useState } from "react";
import useDNDCharacterStore from "@/store/characte.store";

export function useStoreHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const unsub = useDNDCharacterStore.persist.onHydrate(() => {
      setHydrated(false);
    });

    const unsubFinish = useDNDCharacterStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    setHydrated(useDNDCharacterStore.persist.hasHydrated());

    return () => {
      unsub();
      unsubFinish();
    };
  }, []);

  return hydrated;
}
