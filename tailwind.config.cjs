/** @type {import('tailwindcss').Config} */ 
module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '2xs':'.4rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors:{
        'primary': '#E60023',
        'dark': '#111111',
        'light': '#EFEFEF',
        'lightHover': '#d7d7d7',
        'muted': '#717171',
        'green': '#7abb3a',
        'purple': '#800080',
        'blueLink': '#0645AD',

        /*'bgNav': '#665D58',
        'banner': '#352921',
        'bg':'#F8F3E5',*/

        'bgNav': '#232339',
        'banner': '#121212',
        'bg':'#AEB3BB',
        'source': '#4A6A95'
        /*
        'bgNav': '#3484F0',
        'banner': '#757575',
        'bg':'#F7F7F7'*/
      }
    },
  },
}
