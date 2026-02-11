"use client";
import { fadeUp } from "@/animations/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { DNDEquipment } from "@/interface/equipment/DnDEquipment";

interface Props {
  equipment: DNDEquipment;
}

export const EquipmentAnimatedImage = ({ equipment }: Props) => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="lg:col-span-2 order-1 lg:order-2"
    >
      <Image
        src="/equipment/equipment.png"
        alt={`${equipment.name} item illustration`}
        width={400}
        height={400}
        className="rounded-lg col-span-2 w-full h-auto object-contain"
      />
    </motion.section>
  );
};
