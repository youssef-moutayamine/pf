/** @type {import('tailwindcss').Config} */
export default {

// tailwind.config.js style
darkMode: ['selector', '[data-theme="dark"]'],


  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Jost', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        accent: ['Oswald', 'Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
