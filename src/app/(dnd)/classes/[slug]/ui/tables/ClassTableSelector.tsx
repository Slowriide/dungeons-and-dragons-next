import { DNDClassLevels } from "@/interface/classes/ClassLevels";

import { BarbarianTable } from "./BarbarianTable";
import { BardTable } from "./BardTable";
import { FighterTable } from "./FighterTable";
import { ClericTable } from "./ClericTable";
import { DruidTable } from "./DruidTable";
import { MonkTable } from "./MonkTable";
import { PaladinTable } from "./PaladinTable";
import { RangerTable } from "./RangerTable";
import { RogueTable } from "./RogueTable";
import { SorcererTable } from "./SorcererTable";
import { WarlockTable } from "./WarlockTable";
import { WizardTable } from "./WizardTable";

interface Props {
  classIndex: string;
  levels: DNDClassLevels[];
}

/**
 * Maps each D&D class index to its corresponding
 * level progression table component.
 *
 * This allows easy extension and avoids large switch statements.
 */
const CLASS_TABLES: Record<
  string,
  React.ComponentType<{ levels: DNDClassLevels[] }>
> = {
  barbarian: BarbarianTable,
  bard: BardTable,
  fighter: FighterTable,
  cleric: ClericTable,
  druid: DruidTable,
  monk: MonkTable,
  paladin: PaladinTable,
  ranger: RangerTable,
  rogue: RogueTable,
  sorcerer: SorcererTable,
  warlock: WarlockTable,
  wizard: WizardTable,
};

export const ClassTableSelector = ({ classIndex, levels }: Props) => {
  /**
   * Resolve the table component based on class index.
   * Falls back to Bard table as a safe default.
   */
  const TableComponent = CLASS_TABLES[classIndex] ?? CLASS_TABLES["bard"];

  return <TableComponent levels={levels} />;
};
