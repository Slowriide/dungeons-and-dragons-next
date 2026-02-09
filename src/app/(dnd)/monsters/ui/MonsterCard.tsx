import { geisCinzel } from "@/config/fonts";
import { Card } from "../../../../components/ui/card";
import { Badge } from "../../../../components/ui/badge";
import Image from "next/image";
import { DNDMonster } from "@/interface/monsters/DnDMonster";
import { getDnDImages } from "@/utils/getDnDImages";
import Link from "next/link";

interface Props {
  monster: DNDMonster;
}

/**
 * MonsterCard
 *
 * Displays a short, SEO-friendly preview of a D&D 5e monster.
 * Used inside grid layouts with internal links to monster detail pages.
 */
export const MonsterCard = ({ monster }: Props) => {
  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <Link href={`/monsters/${monster.index}`}>
        {/* Image */}
        <div className="relative w-full aspect-3/3 overflow-hidden">
          <Image
            src={getDnDImages(monster.image)}
            alt={"Monster"}
            fill
            sizes="400"
            className="object-fill rounded-t-lg "
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="p-4 mt-2 space-y-4">
          {/* Name */}
          <div className="flex flex-row justify-between mb-2 items-center capitalize">
            <h3
              className={`${geisCinzel.className} antialiased font-semibold text-lg line-clamp-1 `}
            >
              {monster.name}
            </h3>

            {/* CR */}
            <Badge
              variant={"outline"}
              className="text-muted-foreground h-5 font-bold "
            >
              {`CR: ${monster.challenge_rating}`}
            </Badge>
          </div>

          {/* Type + Alignment */}
          <div className="flex flex-row justify-between mb-2 items-center capitalize text-sm font-semibold line-clamp-1">
            <p>{monster.type}</p>
            <p>{monster.alignment}</p>
          </div>

          {/* AC + HP */}
          <div className="flex flex-row justify-between mb-2 items-center capitalize text-sm line-clamp-1">
            {/* Type */}
            {monster.armor_class.map((ac) => (
              <span key={ac.value}>
                AC: {ac.type} {ac.value}
              </span>
            ))}

            {/* Alignment */}
            <p> HP: {monster.hit_points}</p>
          </div>

          {/* Special abilities preview */}
          <div className="space-x-2 line-clamp-1">
            {monster.special_abilities &&
              monster.special_abilities.map((hab) => (
                <Badge key={hab.name} className="" variant={"outline"}>
                  {hab.name}
                </Badge>
              ))}
          </div>
        </div>
      </Link>
    </Card>
  );
};
