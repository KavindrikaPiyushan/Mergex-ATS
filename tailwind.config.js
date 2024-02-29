/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],

  theme: {
    screens: {
      'esm':'200px',
      'sm': '640px',     // Small screens
      'md': '768px',     // Medium screens
      'lg': '1300px',    // Large screens
      'xl': '1450px',    // Extra-large screens
      'start1450':'1450px',
      '2xl': '1756px',   // 2x extra-large screens
      'custom': '1450px' // Custom breakpoint named 'custom'
      
    }
  }
}