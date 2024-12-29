/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marine': {
          DEFAULT: '#0A192F',
          light: '#1A2942',
        },
        'yacht': {
          DEFAULT: '#FFFFFF',
          light: '#F0F4F8',
        }
      },
      fontFamily: {
        'script': ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
