import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-white": "#ffffff",
        "light-white": "#f5f5f5",
        "main-black": "#1e1e1e",
        "dark-grey": "#3f4a5c",
        "medium-grey": "#5c6370",
        "light-grey": "#d4d4d4",
        "icon-green": "#b4dd7f",
        "icon-peach": "#fcbba0",
        "icon-light-cyan": "#b6e6f0",
        "icon-light-yellow": "#f6efaa",
        "icon-light-blue": "#a8b4d8",
        "icon-purple": "#7b61ff",
        "icon-abstract": "#fafafa",
        "icon-default": "#ffffff",
        "icon-active": "#1e1e1e",
        "input-dark": "#262626",
        "input-placeholder": "#aab2c8",
        "input-label": "#5b5f70",
        "button-primary-purple": "#A7A0F8",
        "button-primary-text": "#1e1e1e",
        "button-secondary-white": "#ffffff",
        "button-tertiary-grey": "#d4d4d4",
        "button-chat-prompt": "#3f4a5c",
        "background-dashboard": "#1e1e1e",
        "background-onboarding": "#3f4a5c",
        "glass-stroke": "#ffffff33",
        "glass-fill": "#ffffff1a",
        "circle-color": "#3f4a5c",
        "linear-stroke": "#e1e1e1",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        vsm: "500px",
        xmd: "850px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
export default config;
