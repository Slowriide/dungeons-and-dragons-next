/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-parchment': '#f5f1e6',
        'my-parchment-dark': '#e6dec8',
        'my-ink': '#28241e',
      },
      animation: {
        "dice-roll": "diceRoll 0.6s ease-in-out",
        "dice-appear": "diceAppear 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "dice-shake": "shake 0.5s ease-in-out",
      },
      keyframes: {
        diceRoll: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px) rotate(-5deg)" },
          "75%": { transform: "translateX(5px) rotate(5deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};