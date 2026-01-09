import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRaceTraits } from "@/hooks/races/useRaceTraits";
import { DNDClassLevels } from "@/interface/classes/ClassLevels";
import { DNDTrait } from "@/interface/races/DNDTrait";
import { tr } from "zod/v4/locales";
interface Props {
  traits: DNDTrait[];
}

export const DraconicTable = ({ traits }: Props) => {
  const draconic = traits.filter(
    (trait) => trait.index === "draconic-ancestry"
  );

  const indexes = draconic.flatMap((d) =>
    d.trait_specific!.subtrait_options.from.options.map((i) => i.item.index)
  );

  const { data, isLoading } = useRaceTraits({ traitsIndexes: indexes });

  if (!data || isLoading) {
    return <p>loading</p>;
  }

  return (
    <div className="rounded-md border my-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-serif">Dragon</TableHead>
            <TableHead className="font-serif">Damage Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.trait.map((trait) => (
            <TableRow key={trait.index}>
              <TableCell className="font-semibold">{trait.name}</TableCell>
              <TableCell>
                {trait.trait_specific?.damage_type?.name ?? ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
