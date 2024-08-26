import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0a9396",
        "secondary": "#264653"
      },
      fontFamily: {
        "title": "var(--font-josefin-sans)",
        "text": "var(--font-inter)",
      }
    },
  },
  plugins: [],
};
export default config;
