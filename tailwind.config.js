/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/pages/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
      },
    },
  },
  plugins: [],
};

