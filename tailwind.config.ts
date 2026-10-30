import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Soft, warm palette: light mocha + gold + gentle rose & olive on cream.
        // A middle ground between the original sage/blush and the deep brown look.
        cream: {
          DEFAULT: "#F7F3EB",
          50: "#FCFAF4",
          100: "#F7F3EB",
          200: "#EEE6D6",
        },
        // Primary brand — warm, light mocha brown (buttons, accents).
        brown: {
          DEFAULT: "#7E5C41",
          50: "#F7F0E9",
          100: "#ECDDCD",
          200: "#DBC1A9",
          300: "#C6A588",
          400: "#B08A6B",
          500: "#977254",
          600: "#7E5C41",
          700: "#5F4531",
        },
        // Gold / honey accent (eyebrows, underlines, dots) — kept, softened.
        gold: {
          DEFAULT: "#CBA14A",
          50: "#FAF4E4",
          100: "#F3E8CB",
          200: "#E8D39B",
          300: "#DBBD6B",
          400: "#CDA651",
          500: "#B08832",
          600: "#8E6C26",
        },
        // Soft dusty rose (legacy `blush` name) — a gentle warm accent that
        // brings back a touch of the original softness.
        blush: {
          DEFAULT: "#E1B4A8",
          50: "#FBF2EF",
          100: "#F6E4DE",
          200: "#EDCEC4",
          300: "#E1B4A8",
          400: "#CF9486",
          500: "#B87667",
          600: "#9A5B4D",
        },
        // Soft olive-green feature sections / footer bar (legacy `sage` name).
        sage: {
          DEFAULT: "#879257",
          50: "#F3F4EB",
          100: "#E4E7D2",
          200: "#CDD4AC",
          300: "#B2BC85",
          400: "#9AA667",
          500: "#7F8B4F",
          600: "#656E3D",
          700: "#4C5330",
        },
        beige: {
          DEFAULT: "#E4D7C0",
          100: "#F0E8D8",
          200: "#E4D7C0",
          300: "#D0BD9D",
        },
        ink: {
          DEFAULT: "#43372B",
          light: "#60513F",
          muted: "#8C7C6A",
        },
      },
      fontFamily: {
        sans: ["var(--font-assistant)", "system-ui", "sans-serif"],
        heading: ["var(--font-heebo)", "var(--font-assistant)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(74, 64, 56, 0.18)",
        card: "0 4px 24px -8px rgba(74, 64, 56, 0.14)",
        float: "0 8px 30px -6px rgba(74, 64, 56, 0.28)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
