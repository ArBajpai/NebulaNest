/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {

    extend: {
      fontFamily: {
        codecPro: ['Codec Pro'],
      },
      colors: {
        lightGreen: '#D7FFC2',
        darkGreen: '#01444A',
      },
    },
  },
  plugins: [],
}

