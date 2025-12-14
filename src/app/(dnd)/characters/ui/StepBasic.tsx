"use client";
import { useDNDCharacterStore } from "@/store/characte.store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DND_CLASSES } from "@/data/dndData";
import { useClassesDetails } from "@/hooks/classes/useClassesDetails";
import { ClassFeatures } from "./class-features/ClassFeatures";

const schema = z.object({
  name: z.string().min(2),
  race: z.string(),
  class: z.string(),
  level: z.number().min(1).max(20),
});
type FormData = z.infer<typeof schema>;

export const StepBasic = ({ onNext }: { onNext: () => void }) => {
  const { character, setField } = useDNDCharacterStore();
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: character.name,
      race: character.race,
      class: character.class,
      level: 1,
    },
  });

  const onSubmit = (data: FormData) => {
    setField("name", data.name);
    setField("race", data.race);
    setField("class", data.class);
    onNext();
  };

  const selected = watch("class");
  const classIndex = selected?.toLowerCase();
  const safeIndexes = classIndex ? [classIndex] : [];

  const { data, isError } = useClassesDetails({ classIndexes: safeIndexes });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className="grid grid-cols-5 gap-x-2 space-y-6">
        <div className="col-span-5">
          <p className="text-md font-medium">Name:</p>
          <Input {...register("name")} placeholder="Name" />
        </div>

        {/* Class */}
        <div className="col-span-3 ">
          <p className="text-md font-medium">Class:</p>
          <Select onValueChange={(v) => setValue("class", v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a class" className="w-full" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Classes</SelectLabel>
                {DND_CLASSES.map((r) => (
                  <SelectItem key={r.index} value={r.index}>
                    {r.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-2">
          <p className="text-md font-medium">Level:</p>
          <Input
            type="number"
            {...register("level", { valueAsNumber: true })}
            placeholder="Name"
          />
        </div>

        {data && !isError && (
          <div className="col-span-2">
            <ClassFeatures dndClass={data.dndClass[0]} />
          </div>
        )}
      </div>

      <Button variant={"outline"} type="submit" onClick={onNext}>
        Siguiente
      </Button>
    </form>
  );
};
