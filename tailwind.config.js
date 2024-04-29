/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-color-navbar': '#5f4726',
      },
    },
  },
  darkMode: 'class',
  plugins: [require("daisyui")],

    daisyui: {
      themes: ["light", "dark"],
    },

}

