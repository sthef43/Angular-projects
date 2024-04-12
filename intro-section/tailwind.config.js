/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dropDown-content': '0px 30px 75px -21px rgba(0,0,0,0.4);'
      },
      keyframes: {
        slide: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },
      },
      animation:{
        'slideIn': 'slide .3s ease-in-out alternate',
      },
    },
  },
  plugins: [],
}

