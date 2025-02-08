import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(140 30% 97%)",
        foreground: "hsl(150 25% 20%)",
        card: {
          DEFAULT: "hsl(140 25% 99%)",
          foreground: "hsl(150 25% 20%)",
        },
        popover: {
          DEFAULT: "hsl(140 25% 99%)",
          foreground: "hsl(150 25% 20%)",
        },
        primary: {
          DEFAULT: "hsl(150 63% 30%)",
          light: "hsl(150 63% 40%)",
          dark: "hsl(150 63% 20%)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(80 52% 45%)",
          light: "hsl(80 52% 55%)",
          dark: "hsl(80 52% 35%)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(120 25% 65%)",
          light: "hsl(120 25% 75%)",
          dark: "hsl(120 25% 55%)",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(140 20% 92%)",
          foreground: "hsl(150 25% 30%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(145 63% 42%)",
          light: "hsl(145 63% 52%)",
          dark: "hsl(145 63% 32%)",
        },
        border: "hsl(150 20% 85%)",
        input: "hsl(150 20% 90%)",
        ring: "hsl(150 63% 30%)",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
