import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        whiteColor: "#f5f5f5",
        blackColor: "#212121",
        primaryColor: "#FDA21A",
        accentColor: "#ed9315",
      },
    },
  },
  plugins: [],
};
export default config;
