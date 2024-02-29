/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    screens: {
      'esm':'200px',
      'sm': '640px',     // Small screens
      'md': '768px',     // Medium screens
      'lg': '1300px',    // Large screens
      'xl': '1480px',    // Extra-large screens
      '2xl': '1536px',   // 2x extra-large screens
      'custom': '1450px' // Custom breakpoint named 'custom'
    }
  }
}