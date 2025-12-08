import { DNDMonster } from "@/interface/monsters/DnDMonster";
import React from "react";

export const getMonsterSkills = (monster: DNDMonster) => {
  const monsterSkills = monster.proficiencies
    .filter((p) => p.proficiency.index.startsWith("skill-"))
    .map((p) => ({
      name: p.proficiency.name.replace("Skill: ", ""),
      value: p.value,
      index: p.proficiency.index,
    }));

  return monsterSkills;
};
