import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import Link from "next/link";
import { geClassImages } from "@/utils/class/getClassImage";
import { ChessQueenIcon, Heart, Shield, Zap } from "lucide-react";
import { CharacterListItem } from "./CharactersGrid";

interface CharacterCardProps {
  character: CharacterListItem;
}

export const CharactersCard = ({ character }: CharacterCardProps) => {
  return (
    <Card className="glass-card cursor-pointer p-0 gap-y-0">
      <div className="relative overflow-hidden">
        <Link href={`/character/${character.id}`}>
          {/* Image */}
          <div className="relative w-full aspect-3/3 overflow-hidden">
            <Image
              src={geClassImages(character.characterClass.toLowerCase())}
              alt={"Character"}
              fill
              sizes="400"
              className="object-fill rounded-t-lg "
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

            {/* Level */}
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary/90 text-primary-foreground font-bold">
                Level {character.level}
              </Badge>
            </div>

            {/* Name + Race + Class */}
            <div className="absolute bottom-2 left-3 right-3">
              <h3 className="font-display text-lg font-serif font-bold line-clamp-1 text-white/70">
                {character.name}
              </h3>
              <p className="text-sm text-white/50 ">
                {character.race} {character.characterClass}
              </p>
            </div>
          </div>

          {/* Info */}
          <CardContent className="p-4 space-y-4">
            {/* HP Bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <div className="flex flex-row space-x-2">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Heart className="h-4 w-4 text-destructive" />
                    HP
                  </span>
                  <span className="font-medium">{character.hitPoints}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-secondary-foreground/80" />
                  <span className="text-muted-foreground">AC:</span>
                  <span className="font-medium">{character.armorClass}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-3 justify-between">
              <div className="flex items-center gap-2 text-sm">
                <ChessQueenIcon className="h-4 w-4 text-secondary-foreground/80" />
                <span className="text-muted-foreground">Proficiency:</span>
                <span className="font-medium">
                  +{character.proficiencyBonus}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-4 w-4 text-secondary-foreground/80" />
                <span className="text-muted-foreground">Speed:</span>
                <span className="font-medium">{character.speed} </span>
              </div>
            </div>

            {/* Background & Alignment */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">
                {character.background}
              </Badge>
              <Badge variant="outline" className="text-xs capitalize">
                {character.alignment?.replace("-", " ")}
              </Badge>
            </div>
          </CardContent>
        </Link>
      </div>
    </Card>
  );
};
