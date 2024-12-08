/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4B43',
        warrior: '#E6F3F0',
        mother: '#FFE6E6',
        magician: '#F3E6F0',
        oracle: '#E6E6F0',
      },
      fontFamily: {
        serif: ['CMU Serif', 'serif'],
        sans: ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}