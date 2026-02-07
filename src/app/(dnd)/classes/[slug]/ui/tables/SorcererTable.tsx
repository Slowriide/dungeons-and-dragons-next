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

export const SorcererTable = ({ levels }: Props) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-serif">Level</TableHead>
            <TableHead className="font-serif">Prof Bonus</TableHead>
            <TableHead className="font-serif">Features</TableHead>
            <TableHead className="text-center font-serif">
              Sorcery Points
            </TableHead>
            <TableHead className="text-center font-serif">Cantrips</TableHead>
            <TableHead className="text-center font-serif">
              Spells Known
            </TableHead>
            <TableHead className="text-center font-serif">1st</TableHead>
            <TableHead className="text-center font-serif">2nd</TableHead>
            <TableHead className="text-center font-serif">3rd</TableHead>
            <TableHead className="text-center font-serif">4th</TableHead>
            <TableHead className="text-center font-serif">5th</TableHead>
            <TableHead className="text-center font-serif">6th</TableHead>
            <TableHead className="text-center font-serif">7th</TableHead>
            <TableHead className="text-center font-serif">8th</TableHead>
            <TableHead className="text-center font-serif">9th</TableHead>
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
                {level.class_specific?.sorcery_points || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.cantrips_known || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spells_known || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_1 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_2 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_3 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_4 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_5 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_6 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_7 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_8 || "—"}
              </TableCell>
              <TableCell className="text-center">
                {level.spellcasting?.spell_slots_level_9 || "—"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
