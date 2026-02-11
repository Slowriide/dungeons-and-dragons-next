"use client";
import { fadeUp } from "@/animations/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { DNDSpell } from "@/interface/spells/DndSpell";

interface Props {
  spell: DNDSpell;
}

export const SpellAnimatedImage = ({ spell }: Props) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="lg:col-span-2 order-1 lg:order-2"
    >
      <Image
        src="/spells/spells.jpg"
        alt={`${spell.name} spell illustration`}
        width={400}
        height={400}
        className="rounded-lg col-span-2 w-full h-auto object-contain"
      />
    </motion.section>
  );
};
