/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGrey: '#F7F7F8',
        lightGrey: '#eaeaea',
        grey: '#d9d9d9',
        darkGrey: '#777777',
        mainBlack: '#333333',
        blue: `#5D61D3`,
      },
      fontSize: {
        'title': '12rem',
      }
    },
  },
  plugins: [],
}

