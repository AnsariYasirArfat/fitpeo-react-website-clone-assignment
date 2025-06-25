import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fitpeo-gray": "#c4c4c4",
        "fitpeo-black": "#000000",
        "fitpeo-white": "#e7e7e7",
        "fitpeo-red": "#ff6340",
      },
      fontSize: {
        "6rem": "6rem",
        "10rem": "10rem",
        "14rem": "14rem",
      },
      lineHeight: {
        "80": "80%",
      },
      fontFamily: {
        fitpeo: ["Inter", "Helvetica", "sans-serif"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0.1" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade_in_animation_500: "fade-in 0.5s ease-in-out",
        fade_in_animation_1: "fade-in 1s ease-in-out",
        fade_in_animation_2: "fade-in 2s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
} satisfies Config;

export default config;
