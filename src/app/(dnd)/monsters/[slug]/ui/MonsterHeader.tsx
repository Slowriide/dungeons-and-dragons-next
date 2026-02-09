import { DNDMonster } from "@/interface/monsters/DnDMonster";
import { getDnDImages } from "@/utils/getDnDImages";

import Image from "next/image";
import { MonsterStatsTable } from "./MonsterStatsTable";
import { getMonsterSkills } from "@/utils/monster/getMonsterSkills";

interface Props {
  monster: DNDMonster;
}

/**
 * MonsterHeader
 *
 * SEO & UX goals:
 * - Provide a strong <h1> with the monster name
 * - Show key combat stats above the fold (CR, HP, AC, Speed)
 * - Use optimized images with descriptive alt text
 * - Improve scannability for both users and search engines
 */
export const MonsterHeader = ({ monster }: Props) => {
  const skills = getMonsterSkills(monster);

  // Pre-format skills for readable text output
  const skillsText = skills
    .map((skill) => `${skill.name} +${skill.value}`)
    .join(", ");

  return (
    <article className="mb-16 grid gap-12 lg:grid-cols-2 lg:gap-16 mt-10 ">
      {/* Image */}
      <section className="relative w-full max-w-md mx-auto my-auto">
        <Image
          src={getDnDImages(monster.image)}
          alt={monster.name}
          width={500}
          height={500}
          className="w-full h-auto rounded-lg"
          priority // Carga esta imagen primero
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="
        />
      </section>

      {/* Title and Quick Stats */}
      <div className="flex flex-col justify-center">
        <h1 className="mb-6 font-serif text-5xl font-bold text-balance leading-tight">
          {monster.name}
        </h1>

        {/* Quick Stats Grid */}
        <dl className="grid gap-4 sm:grid-cols-2">
          {/* Armor Class */}
          <div>
            <dt className="text-sm font-medium text-[#E63946]">Armor Class</dt>
            <dd className="mt-1 font-mono text-xl font-semibold">
              {monster.armor_class.map((ac) => (
                <p key={ac.type}>
                  {ac.value} {ac.type}
                </p>
              ))}
            </dd>
          </div>

          {/* Hit Points */}
          <div>
            <dt className="text-sm font-medium text-[#E63946]">Hit Points</dt>
            <dd className="mt-1 text-xl font-semibold">
              <p>
                {monster.hit_points} ({monster.hit_points_roll})
              </p>
            </dd>
          </div>

          {/* Speed */}
          <div>
            <dt className="text-sm font-medium text-[#E63946]">Speed</dt>
            <dd className="mt-1 text-xl font-semibold flex flex-row">
              <p>{monster.speed.walk ?? ""}</p>
              {monster.speed.swim && <p>, swim {monster.speed.swim}</p>}
              {monster.speed.fly && <p>, fly {monster.speed.fly}</p>}
            </dd>
          </div>

          {/* Challenge rating */}
          <div>
            <dt className="text-sm font-medium text-[#E63946]">
              Challenge Rating
            </dt>
            <dd className="mt-1 text-xl font-semibold">
              {monster.challenge_rating} (XP {monster.xp})
            </dd>
          </div>
          <MonsterStatsTable monster={monster} />

          {/* Senses */}
          <div>
            <dt className="text-sm font-medium text-[#E63946]">Senses</dt>
            <dd className="mt-1 text-xl font-semibold ">
              {monster.senses.darkvision && (
                <p>Darkvision: {monster.senses.darkvision}</p>
              )}
              {monster.senses.passive_perception && (
                <p>Passive Perception: {monster.senses.passive_perception}</p>
              )}
              {monster.senses.blindsight && (
                <p>Blindsight: {monster.senses.blindsight}</p>
              )}
            </dd>
          </div>

          {/* Languages */}
          {monster.languages && (
            <div>
              <dt className="text-sm font-medium text-[#E63946]">Languages</dt>
              <dd className="mt-1 text-xl font-semibold ">
                {monster.languages}
              </dd>
            </div>
          )}
        </dl>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="pt-4">
            <dt className="text-sm font-medium text-[#E63946]">Skills</dt>
            <dd className="mt-1 text-xl font-semibold flex flex-row ">
              {skillsText}
            </dd>
          </div>
        )}
      </div>
    </article>
  );
};
