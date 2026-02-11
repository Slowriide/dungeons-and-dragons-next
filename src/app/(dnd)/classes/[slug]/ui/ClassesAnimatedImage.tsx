"use client";
import { fadeUp } from "@/animations/animations";
import { DNDClass } from "@/interface/classes/DnDClass";
import { geClassImages } from "@/utils/class/getClassImage";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  classItem: DNDClass;
}

export const ClassesAnimatedImage = ({ classItem }: Props) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="relative w-full max-w-md mx-auto my-auto"
    >
      <Image
        src={geClassImages(classItem.index)}
        alt={classItem.name}
        width={500}
        height={500}
        className="w-full h-auto rounded-lg"
        loading="eager"
      />
    </motion.section>
  );
};
