import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Pink: "#F98585",
        Black: "#21243D",
        recentBackground: "#F4E2E2",
        footerBackground: "#f6f0f0",
        heroElipse:"#dfd8d8",
        background: "#f6f0f0",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
