/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#12152c',
        blueSecondary: '#123e73',
        skyPrimary: '#1fa7d4',
        skySecondary: '#20dad9',
        skyClear: '#93e9e7',
      },
    },
  },
  plugins: [],
}