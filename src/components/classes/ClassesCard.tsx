import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { DNDMonster } from "@/interface/monsters/DnDMonster";
import { getDnDImages } from "@/utils/getDnDImages";
import Link from "next/link";
import { DNDRace } from "@/interface/races/DNDRace";
import { getRaceImages } from "@/utils/race/getRaceImages";
import { DNDClass } from "@/interface/classes/DnDClass";
import { getClassInfo } from "@/utils/class/getClassInfo";

interface Props {
  dndClass: DNDClass;
}

export const ClassesCard = ({ dndClass }: Props) => {
  const { description, logo } = getClassInfo(dndClass.index);

  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <Link href={`/races/${dndClass.index}`}>
        {/* Image */}
        <div className="relative w-full aspect-3/3 overflow-hidden ">
          <Image
            src={"/placeholder.svg"}
            alt={"Class"}
            fill
            sizes="400"
            className="absolute inset-0 object-fill rounded-md z-0"
            loading="eager"
          />
          <div className="absolute bottom-5 left-2  z-20 w-40 bg-white/50 p-3 rounded-sm h-40">
            <div className="flex flex-row border-b border-b-pink-600 items-center gap-x-1 ">
              <Image
                src={logo}
                alt={"class-icon"}
                width={40}
                height={40}
                sizes="400"
                className=" object-fill rounded-sm z-0 mb-2"
                loading="eager"
              />
              <h2 className="text-xl font-bold drop-shadow ">
                {dndClass.name}
              </h2>
            </div>
            <p className="text-sm opacity-90 flex flex-wrap overflow-hidden">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};
