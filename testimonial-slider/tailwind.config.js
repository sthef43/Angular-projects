/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      margin: {
        'next': '750px',
        'nextDesktop': '2560px'
      }
    },
  },
  plugins: [],
}

