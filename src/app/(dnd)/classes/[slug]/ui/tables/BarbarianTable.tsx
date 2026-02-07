import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DNDClassLevels } from "@/interface/classes/ClassLevels";
interface Props {
  levels: DNDClassLevels[];
}
export const BarbarianTable = ({ levels }: Props) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-serif">Level</TableHead>
            <TableHead className="font-serif">Prof Bonus</TableHead>
            <TableHead className="font-serif">Features</TableHead>
            <TableHead className="text-center font-serif">Rages</TableHead>
            <TableHead className="text-center font-serif">
              Rage Damage
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {levels.map((level) => (
            <TableRow key={level.index}>
              <TableCell className="font-semibold">{level.level}</TableCell>
              <TableCell>+{level.prof_bonus}</TableCell>
              <TableCell className="max-w-xs overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
                {level.features.length > 0
                  ? level.features.map((f) => f.name).join(", ")
                  : "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.class_specific?.rage_count === 9999
                  ? "Unlimited"
                  : level.class_specific?.rage_count || "—"}
              </TableCell>
              <TableCell className="text-center">
                +{level.class_specific?.rage_damage_bonus || 0}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
