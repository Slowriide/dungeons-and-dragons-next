"use client";
import { fadeUp } from "@/animations/animations";
import { DNDMagicItem } from "@/interface/magicItems/DnDMagicItems";
import { getPhotoByCategory } from "@/utils/magicItems/getPhotoByCategory";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  magicItem: DNDMagicItem;
}

export const MagicItemAnimatedImage = ({ magicItem }: Props) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="lg:col-span-2 order-1 lg:order-2"
    >
      <Image
        src={getPhotoByCategory(magicItem.equipment_category.name) ?? ""}
        alt={`${magicItem.name} magic-item illustration`}
        width={400}
        height={400}
        className="rounded-lg col-span-2 w-full h-auto object-contain"
      />
    </motion.section>
  );
};
