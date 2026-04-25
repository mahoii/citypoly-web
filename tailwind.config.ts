import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--brand-primary)",
          dark: "var(--brand-dark)",
          slate: "var(--brand-slate)",
          light: "var(--brand-light)",
          citytech: "#004B87", // The new City Tech Blue!
        },
      },
    },
  },
  plugins: [],
};
export default config;