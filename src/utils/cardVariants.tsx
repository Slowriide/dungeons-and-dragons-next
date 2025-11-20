import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "group relative overflow-hidden flex flex-col h-full border rounded-xl w-full p-6 gap-y-4 py-8 transition-all cursor-pointer hover:-translate-0.5",
  {
    variants: {
      color: {
        pink: "hover:border-pink-600 ",
        purple: "hover:border-purple-800",
        yellow: "hover:border-yellow-500 ",
        red: "hover:border-red-500",
      },
    },
    defaultVariants: {
      color: "red",
    },
  }
);
