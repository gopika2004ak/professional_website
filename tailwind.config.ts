import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        forest: "var(--forest)",
        deepGreen: "var(--deep-green)",
        olive: "var(--olive)",
        sage: "var(--sage)",
        stone: "var(--stone)",
        sand: "var(--sand)",
        terracotta: "var(--terracotta)",
        oxblood: "var(--oxblood)",
        ivory: "var(--ivory)",
        paper: "var(--paper)",
      },
    },
  },
  plugins: [],
} satisfies Config;
