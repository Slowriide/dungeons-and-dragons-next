"use client";
import { useDNDCharacterStore } from "@/store/characte.store";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
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
import { useRouter } from "next/navigation";

const schema = z.object({
  name: z.string().min(2, "Name must have at least 2 characters"),
  class: z.string().min(1, "Class is required"),
  level: z.number().min(1).max(20),
});

type FormData = z.infer<typeof schema>;

export const StepBasic = () => {
  const router = useRouter();
  const { character, setField } = useDNDCharacterStore();
  const { register, handleSubmit, setValue, watch, control } =
    useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        name: character.name,
        class: character.class,
        level: 1,
      },
    });

  const onSubmit = (data: FormData) => {
    setField("name", data.name);
    setField("class", data.class);
    setField("level", data.level);
    router.push("/characters/create-character/race");
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
          <Controller
            name="class"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a class" />
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
            )}
          />
        </div>
        {/* Level */}
        <div className="col-span-2">
          <p className="text-md font-medium">Level:</p>
          <Input
            type="number"
            {...register("level", { valueAsNumber: true })}
          />
        </div>

        {data && !isError && (
          <div className="col-span-2">
            <ClassFeatures dndClass={data.dndClass[0]} />
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button variant={"outline"} type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
};
