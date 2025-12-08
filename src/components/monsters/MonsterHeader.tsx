import { DNDClass } from "@/interface/classes/DnDClass";
import { DNDMonster } from "@/interface/monsters/DnDMonster";
import { getDnDImages } from "@/utils/getDnDImages";

import Image from "next/image";
import { MonsterStatsTable } from "./MonsterStatsTable";
import { getMonsterSkills } from "@/utils/monster/getMonsterSkills";

interface Props {
  monster: DNDMonster;
}

export const MonsterHeader = ({ monster }: Props) => {
  const skills = getMonsterSkills(monster);

  const skillsText = skills
    .map((skill) => `${skill.name} +${skill.value}`)
    .join(", ");

  return (
    <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16 mt-10 ">
      {/* Left: Image */}
      <div className="relative aspect-4/3 overflow-hidden rounded-lg">
        <Image
          src={getDnDImages(monster.image)}
          alt={monster.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Title and Quick Stats */}
      <div className="flex flex-col justify-center">
        <h1 className="mb-6 font-serif text-5xl font-bold text-balance leading-tight">
          {monster.name}
        </h1>
        {/* Quick Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Armor Class */}
          <div>
            <span className="text-sm font-medium text-[#E63946]">
              Armor Class
            </span>
            <div className="mt-1 font-mono text-xl font-semibold">
              {monster.armor_class.map((ac) => (
                <p key={ac.type}>
                  {ac.value} {ac.type}
                </p>
              ))}
            </div>
          </div>
          {/* Hit Points */}
          <div>
            <span className="text-sm font-medium text-[#E63946]">
              Hit Points
            </span>
            <div className="mt-1 text-xl font-semibold">
              <p>
                {monster.hit_points} ({monster.hit_points_roll})
              </p>
            </div>
          </div>
          {/* Speed */}

          <div>
            <div className="text-sm font-medium text-[#E63946]">Speed</div>
            <div className="mt-1 text-xl font-semibold flex flex-row">
              <p>{monster.speed.walk ?? ""}</p>
              {monster.speed.swim && <p>, swim {monster.speed.swim}</p>}
              {monster.speed.fly && <p>, fly {monster.speed.fly}</p>}
            </div>
          </div>
          {/* Challenge rating */}
          <div>
            <div className="text-sm font-medium text-[#E63946]">
              Challenge Rating
            </div>
            <p className="mt-1 text-xl font-semibold">
              {monster.challenge_rating} (XP {monster.xp})
            </p>
          </div>
          <MonsterStatsTable monster={monster} />

          {/* Senses */}
          <div>
            <span className="text-sm font-medium text-[#E63946]">Senses</span>
            <div className="mt-1 text-xl font-semibold ">
              {monster.senses.darkvision && (
                <p>Darkvision: {monster.senses.darkvision}</p>
              )}
              {monster.senses.passive_perception && (
                <p>Passive Perception: {monster.senses.passive_perception}</p>
              )}
              {monster.senses.blindsight && (
                <p>Blindsight: {monster.senses.blindsight}</p>
              )}
            </div>
          </div>

          {/* Languages */}
          {monster.languages && (
            <div>
              <span className="text-sm font-medium text-[#E63946]">
                Languages
              </span>
              <div className="mt-1 text-xl font-semibold ">
                {monster.languages}
              </div>
            </div>
          )}
        </div>

        {skills.length > 0 && (
          <div className="pt-4">
            <span className="text-sm font-medium text-[#E63946]">Skills</span>
            <div className="mt-1 text-xl font-semibold flex flex-row ">
              {skillsText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
