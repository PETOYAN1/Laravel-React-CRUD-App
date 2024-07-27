/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Urbanist: 'Urbanist'
    },
    extend: {
      textOverflow: ['hover', 'focus'],
    },
  },
  plugins: [],
}

