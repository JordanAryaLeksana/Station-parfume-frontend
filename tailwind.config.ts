import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js, jsx, ts,tsx}",
    "./components/**/*.{js, jsx, ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js, jsx, ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
};

export default config;
