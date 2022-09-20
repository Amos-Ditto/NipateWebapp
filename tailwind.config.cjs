/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'ms': '700px',
      'md': '768px',
      'mds': '930px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'rotate': 'rotate',
        'font': 'font',
        'pad': 'padding',
      },
      backgroundColor: {
        'dark-opacity': 'rgba(0, 0, 0, 0.4)'
      },
      colors: {
        steelblue: 'steelblue',
        whip : 'papayawhip',
        tomato: 'tomato',
        dodgerblue: 'dodgerblue',
      }
    },
  },
  plugins: [],
}