/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: "var(--primaryWhite)",
        primaryDark: "var(--primaryDark)",
        primaryMid: "var(--primaryMid)",
        primaryLight: "var(--primaryLight)",
        secondaryDark: "var(--secondaryDark)",
        secondaryMid: "var(--secondaryMid)",
        secondaryLight: "var(--secondaryLight)",
      },
      fontFamily: {
        sans: ["var(--font-excon)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
