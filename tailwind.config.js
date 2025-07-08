/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if you're using the `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#107BC0",
        "primary-dark": "#000",
        gray: {
          450: "#9D9E9E",
        },
      },
      spacing: {
        104: "26rem",
        112: "28rem",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        cormorant: ["var(--font-cormorant-garamond)", "serif"],
      },
    },
  },
  plugins: [],
};
