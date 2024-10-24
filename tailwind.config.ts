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
        bgcolour: "#151414",
        textcolour: "#CFEB98",
      },
      backgroundImage: {
        parallax: "url('/bgWhiterect.png')",
        contactbg: "url('/infraredContact.png')",
      },
    },
    fontFamily: {
      primaryfont: ["Inter"],
    },
  },
  plugins: [],
};
export default config;
