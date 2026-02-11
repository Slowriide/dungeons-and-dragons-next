"use client";
import { fadeUp } from "@/animations/animations";
import { DNDRace } from "@/interface/races/DNDRace";
import { getRaceImages } from "@/utils/race/getRaceImages";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  race: DNDRace;
}

export const RaceAnimatedImage = ({ race }: Props) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative aspect-4/5 w-full overflow-hidden rounded-lg"
    >
      <Image
        src={getRaceImages(race.index)}
        alt={`${race.name} race illustration for Dungeons & Dragons 5e`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover fill h-mas w-max"
        priority
      />
    </motion.section>
  );
};
