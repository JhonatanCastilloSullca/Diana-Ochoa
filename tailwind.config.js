/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        odaRed: '#DF1F26',
        odaClay: '#60393B',
        odaWhite: '#FFFFFF',
        odaGrey: '#CDCDC7',
        odaGold: '#A48643',
        odaGreen: '#007759',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--odaRed': theme('colors.odaRed'),
          '--odaClay': theme('colors.odaClay'),
          '--odaWhite': theme('colors.odaWhite'),
          '--odaGrey': theme('colors.odaGrey'),
          '--odaGold': theme('colors.odaGold'),
          '--odaGreen': theme('colors.odaGreen'),
        },
      });
    },
  ],
};
