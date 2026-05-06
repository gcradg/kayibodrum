import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#0F0F0F",
        ivory: "#F5F1EA",
        sand: "#D6C3A3",
        bronze: "#C2A476",
        charcoal: "#191919",
        taupe: "#8D7A60"
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "sans-serif"]
      },
      letterSpacing: {
        logo: "0.42em",
        label: "0.22em"
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      boxShadow: {
        bronze: "0 24px 80px rgba(194, 164, 118, 0.14)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0 1px, transparent 1px), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.05) 0 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
