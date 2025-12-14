import { geisCinzel } from "@/config/fonts";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { getDnDImages } from "@/utils/getDnDImages";
import Link from "next/link";
import { DNDCharacter } from "../../interface/character/DNDCharacter";

interface Props {
  character: DNDCharacter;
}

export const CharactersCard = ({ character }: Props) => {
  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <Link href={`/characters`}>
        {/* Image */}
        <div className="relative w-full aspect-3/3 overflow-hidden">
          <Image
            src={"/placeholder.svg"}
            alt={"Character"}
            fill
            sizes="400"
            className="object-fill rounded-t-lg "
            loading="eager"
          />
        </div>

        {/* Name + CR */}
        <div className="p-4 mt-2 space-y-4">
          {/* Name */}
          <div className="flex flex-row justify-between mb-2 items-center capitalize">
            <p
              className={`${geisCinzel.className} antialiased font-semibold text-lg line-clamp-1 `}
            >
              {character.name}
            </p>
            {/* CR */}
            <Badge
              variant={"outline"}
              className="text-muted-foreground h-5 font-bold "
            >
              {`CR: ${character.class}`}
            </Badge>
          </div>
        </div>
      </Link>
    </Card>
  );
};
