import { Card } from "../../../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { DNDClass } from "@/interface/classes/DnDClass";
import { getClassInfo } from "@/utils/class/getClassInfo";
import { geClassImages } from "@/utils/class/getClassImage";

interface Props {
  dndClass: DNDClass;
}

/**
 * Retrieves static UI-related data for the class:
 * - Short description used in the card preview
 * - Logo icon displayed next to the class name
 *
 * This keeps presentation concerns decoupled from API data.
 */
export const ClassesCard = ({ dndClass }: Props) => {
  const { description, logo } = getClassInfo(dndClass.index);
  const img = geClassImages(dndClass.index);

  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <Link href={`/classes/${dndClass.index}`}>
        {/* Image */}
        <div className="relative w-full aspect-3/3 overflow-hidden ">
          <Image
            src={img}
            alt={"Class"}
            fill
            sizes="400"
            className="absolute inset-0 object-cover rounded-md z-0"
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
