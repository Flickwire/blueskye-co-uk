import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          1: '#002C2B',
          2: '#FF3D00',
          3: '#FFBC11',
          4: '#0A837F',
          5: '#076461',
          6: '#002C2B',
          7: '#FF3D00',
          8: '#FFBC11'
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
