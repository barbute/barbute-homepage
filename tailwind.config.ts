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
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#20202380",
        accent: "#FFCF00",
      },
    },
    borderWidth: {
      "0.1": "0.1px",
      "0.25": "0.25px",
      "0.5": "0.5px",
    }
  },
  plugins: [],
} satisfies Config;
