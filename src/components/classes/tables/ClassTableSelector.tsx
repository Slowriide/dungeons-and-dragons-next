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

export const ClassTableSelector = ({ classIndex, levels }: Props) => {
  switch (classIndex) {
    case "barbarian":
      return <BarbarianTable levels={levels} />;

    case "bard":
      return <BardTable levels={levels} />;

    case "fighter":
      return <FighterTable levels={levels} />;

    // cleric, druid, sorcerer, wizard usan la misma tabla
    case "cleric":
      return <ClericTable levels={levels} />;
    case "druid":
      return <DruidTable levels={levels} />;
    case "monk":
      return <MonkTable levels={levels} />;
    case "paladin":
      return <PaladinTable levels={levels} />;
    case "ranger":
      return <RangerTable levels={levels} />;
    case "rogue":
      return <RogueTable levels={levels} />;
    case "sorcerer":
      return <SorcererTable levels={levels} />;
    case "warlock":
      return <WarlockTable levels={levels} />;
    case "wizard":
      return <WizardTable levels={levels} />;

    default:
      return <BardTable levels={levels} />;
  }
};
