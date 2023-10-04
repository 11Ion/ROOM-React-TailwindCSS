/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: 'Roboto',
    },
    screens: {
      ssm: '350px',
    },
    extend: {
      height: {
        'custom-99': '99px',
        'custom-746': '746px',
      },
      colors:{
        'gray_1': "#F4F4F4;",
        'gray_2': "#AAA",
        'gray_3': "#E0E0E0",
      },
      letterSpacing: {
        '2': '2px',
      },
      backgroundImage: {
        'hero-image': "url('./resources/img/header.png')",
        'img-section': "url('./resources/img/bg.png')",
      },
    }
  },
  plugins: [],
}

