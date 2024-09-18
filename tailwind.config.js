/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-orange': '0 4px 6px -1px rgba(167, 54, 13, 0.1), 0 2px 4px -2px rgba(167, 54, 13, 0.1)',
      },
      colors:{
        "custom-dark":"#212f3d" ///define custom color
      },
      borderWidth: {
        '0.1': '0.1rem' // Adding a custom border width of 0.1rem
      },
    },
  },
  plugins: [],
}

