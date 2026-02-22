/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Monoframe Brand Colors
        primary: "#135bec",
        "primary-dark": "#0a3690",

        // Sub-brand Colors
        monobox: "#ec4899",
        "monobox-dark": "#be185d",
        monodev: "#0047FF",
        "monodev-dark": "#0033CC",
        monostudio: "#7dd3fc",
        "monostudio-dark": "#38bdf8",
        monocreative: "#a855f7",
        "monocreative-dark": "#7e22ce",

        // Background Colors
        "deep-blue": "#0b1121",
        "deep-blue-light": "#151e32",
        "background-light": "#ffffff",
        "background-off": "#f6f6f8",
        "background-subtle": "#f1f5f9",
        "background-dark": "#101622",

        // Text Colors
        "text-main": "#111318",
        "text-muted": "#616f89",

        // Surface Colors
        "surface-light": "#F1F5F9",
        "surface-dark": "#1E293B",

        // Tech Blue (Monodev)
        "tech-blue-50": "#eff6ff",
        "tech-blue-100": "#dbeafe",
        "tech-blue-500": "#3b82f6",
        "tech-blue-600": "#2563eb",
        "tech-blue-900": "#1e3a8a",

        // Neutral (Studio)
        "neutral-50": "#f0f9ff",
        "neutral-100": "#e0f2fe",
        "neutral-200": "#bae6fd",
        "neutral-800": "#075985",
        "neutral-900": "#0c4a6e",

        // shadcn/ui CSS Variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0b1121 0%, #1e3a8a 50%, #0b1121 100%)',
        'card-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
        'tech-grid': "radial-gradient(#3b82f6 1px, transparent 1px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
