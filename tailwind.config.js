/** @type {import('tailwindcss').Config} */
export default {

// tailwind.config.js style
darkMode: ['selector', '[data-theme="dark"]'],


  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
