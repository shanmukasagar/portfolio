/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: '#ecf0f3',
        darkText: '#1f2937',
        customPurple: '#5651e5',
        customBlue: '#709dff',
      },
    },
  },
  plugins: [],
};
