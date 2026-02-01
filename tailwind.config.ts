/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-950': '#0a0e27',
        'navy-900': '#1e3a8a',
        'navy-800': '#2f47b8',
        'navy-700': '#3b5bdb',
        'blue-primary': '#4f7cfe',
        'blue-light': '#22d3ee',
      },
    },
  },
  plugins: [],
}