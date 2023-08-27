import type { Config } from "tailwindcss";
// import cardLeft from "./public/card-left.jpg";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // my_bg_image: cardLeft,
      },
    },
  },
  plugins: [],
};
export default config;
