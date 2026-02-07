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

export const MonkTable = ({ levels }: Props) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-serif">Level</TableHead>
            <TableHead className="font-serif">Prof Bonus</TableHead>
            <TableHead className="font-serif">Features</TableHead>
            <TableHead className="text-center font-serif">
              Martial Arts
            </TableHead>
            <TableHead className="text-center font-serif">
              Focus Points
            </TableHead>
            <TableHead className="text-center font-serif">
              Unarmered Movement
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {levels.map((level) => (
            <TableRow key={level.index}>
              <TableCell className="font-semibold pl-4">
                {level.level}
              </TableCell>
              <TableCell>+{level.prof_bonus}</TableCell>
              <TableCell className="max-w-xs overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
                {level.features.length > 0
                  ? level.features.map((f) => f.name).join(", ")
                  : "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.class_specific?.martial_arts?.dice_count ?? ""} D
                {level.class_specific?.martial_arts?.dice_value || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.class_specific?.ki_points || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.class_specific?.unarmored_movement ? (
                  <p>+{level.class_specific?.unarmored_movement} fts.</p>
                ) : (
                  <p>{"—"}</p>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
