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
        "light": "#F5F5F5",
        "light-2": "#f2f1f2",
        "dark": "#424242",
        "dark-2":"#4a4a4a",
        "primary": "#48CFCB",
        "secondary": "#2E7D32"
      },
      fontFamily: {
        "title": "var(--font-title)",
        "text": "var(--font-text)",
        "design": "var(--font-design)",
      }
    },
  },
  plugins: [],
};
export default config;
