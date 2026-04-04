import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f6f1ea",
        sand: "#ece3d7",
        stone: "#d7cabc",
        taupe: "#8c7f73",
        charcoal: "#26211d",
        sage: "#98a092",
        mist: "#f9f7f3"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(28, 22, 18, 0.08)",
        float: "0 24px 90px rgba(28, 22, 18, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"]
      }
    }
  },
  plugins: []
};

export default config;
