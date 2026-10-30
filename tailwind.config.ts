import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Learn-Dev custom color palette
        // Based on user specification: c7f9cc, 80ed99, 001233, 57cc99, 22577a, 386641
        primary: {
          50: '#c7f9cc',  // Lightest green
          100: '#80ed99', // Primary green
          200: '#57cc99', // Accent green
        },
        lld: {
          500: '#22577a', // LLD brand color
          600: '#1a4a63',
          700: '#113347',
        },
        hld: {
          500: '#386641', // HLD brand color
          600: '#2d5235',
          700: '#223d29',
        },
        dark: {
          900: '#001233', // Dark background
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
