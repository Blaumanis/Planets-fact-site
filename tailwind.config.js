/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['"League Spartan"', 'sans-serif'],
        'antonio': ['"Antonio"', 'sans-serif'],
      },
      width: {
        '400': '400px',
        '300': '300px',
        '90w': '90vw',
      },
      colors: {
        'primary-color':'#fff',
        'primary-bg': '#070724',
        'secondary-color': '#6d2ed5',
        'mercury': '#419EBB',
        'venus': '#eda249',
        'earth': '#6d2ed5',
        'mars': '#d14c32',
        'jupiter': '#d83a34',
        'saturn': '#cd5120',
        'uranus': '#1ec142',
        'neptune': '#2d68f0',
        'grey': '#ffffff4d',
      },
      screens: {
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'minmd': {'min': '767px'},
      },
      gridTemplateRows: {
        'layout': '50px 200px 40px',
      },
  },
  plugins: [],
}
}
