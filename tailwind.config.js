/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "light-gray": "#1B191A",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/images/hero.svg')",
      },
    },
  },
  plugins: [],
};
