"use client";
import { useDNDCharacterStore } from "@/store/characte.store";
import { z } from "zod";

const stats = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
] as const;

type FormData = z.infer<typeof stats>;

export const StepAttributes = ({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) => {
  const { character, setField } = useDNDCharacterStore();

  return <div>stepBasic</div>;
};
