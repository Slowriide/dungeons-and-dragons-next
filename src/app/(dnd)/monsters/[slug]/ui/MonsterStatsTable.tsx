import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DNDClassLevels } from "@/interface/classes/ClassLevels";
import { DNDMonster } from "@/interface/monsters/DnDMonster";
interface Props {
  monster: DNDMonster;
}

export const MonsterStatsTable = ({ monster }: Props) => {
  const strProf =
    monster.proficiencies.find(
      (p) => p.proficiency.index === "saving-throw-str"
    )?.value ?? "0";
  const dexProf =
    monster.proficiencies.find(
      (p) => p.proficiency.index === "saving-throw-dex"
    )?.value ?? "0";
  const conProf =
    monster.proficiencies.find(
      (p) => p.proficiency.index === "saving-throw-con"
    )?.value ?? "0";
  const intProf =
    monster.proficiencies.find(
      (p) => p.proficiency.index === "saving-throw-int"
    )?.value ?? "0";
  const wisProf =
    monster.proficiencies.find(
      (p) => p.proficiency.index === "saving-throw-wis"
    )?.value ?? "0";
  const chaProf =
    monster.proficiencies.find(
      (p) => p.proficiency.index === "saving-throw-cha"
    )?.value ?? "0";

  return (
    <>
      <div className="grid grid-cols-1 space-y-1">
        <div className="flex flex-row">
          <p className="text-lg font-medium text-[#E63946]">STR:</p>
          <p className="px-1 text-lg font-semibold">{monster.strength}</p>
          <p className="text-xl font-semibold">+{strProf} (Saving Throw)</p>
        </div>
        <div className="flex flex-row">
          <p className="text-lg font-medium text-[#E63946]">DEX:</p>
          <p className="px-1 text-lg font-semibold">{monster.dexterity}</p>
          <p className="text-xl font-semibold">+{dexProf} (Saving Throw)</p>
        </div>
        <div className="flex flex-row">
          <p className="text-lg font-medium text-[#E63946]">CON:</p>
          <p className="px-1 text-lg font-semibold">{monster.constitution}</p>
          <p className="text-xl font-semibold">+{conProf} (Saving Throw)</p>
        </div>
      </div>
      <div className="grid grid-cols-1 space-y-1">
        <div className="flex flex-row">
          <p className="text-lg font-medium text-[#E63946]">INT:</p>
          <p className="px-1 text-lg font-semibold">{monster.intelligence}</p>
          <p className="text-xl font-semibold">+{intProf} (Saving Throw)</p>
        </div>
        <div className="flex flex-row">
          <p className="text-lg font-medium text-[#E63946]">WIS:</p>
          <p className="px-1 text-lg font-semibold">{monster.wisdom}</p>
          <p className="text-xl font-semibold">+{wisProf} (Saving Throw)</p>
        </div>
        <div className="flex flex-row">
          <p className="text-lg font-medium text-[#E63946]">CHA:</p>
          <p className="px-1 text-lg font-semibold">{monster.charisma}</p>
          <p className="text-xl font-semibold">+{chaProf} (Saving Throw)</p>
        </div>
      </div>
    </>
  );
};
