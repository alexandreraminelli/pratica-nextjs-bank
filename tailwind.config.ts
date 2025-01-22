import type { Config } from "tailwindcss"
import defaultColors from "tailwindcss/colors" // obter cores padrões do tailwind

export default {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Green Shades
        green: {
          "60": "var(--green60)",
          "65": "var(--green65)",
          "70": "var(--green70)",
          "80": "var(--green80)",
          "90": "var(--green90)",
          "95": "var(--green95)",
          "97": "var(--green97)",
          "99": "var(--green99)",
        },
        // White Shades
        white: {
          DEFAULT: defaultColors.white, // preservar `white` padrão do Tailwind
          "90": "var(--white90)",
          "95": "var(--white95)",
          "97": "var(--white97)",
          "99": "var(--white99)",
        },
        // Gray Shades
        grey: {
          "10": "var(--gray10)",
          "11": "var(--gray11)",
          "15": "var(--gray15)",
          "20": "var(--gray20)",
          "30": "var(--gray30)",
          "35": "var(--gray35)",
          "40": "var(--gray40)",
          "60": "var(--gray60)",
          "70": "var(--gray70)",
          "75": "var(--gray75)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
