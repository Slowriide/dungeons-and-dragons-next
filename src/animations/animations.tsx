import { Variants } from "framer-motion";

/**
 * Reusable fade + slide animation.
 * Uses a cubic-bezier easing for full type safety.
 */

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};
