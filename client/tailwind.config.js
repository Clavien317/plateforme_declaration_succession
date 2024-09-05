/** @type {import('tailwindcss').Config} */
const Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Modifiez selon les extensions de fichiers que vous utilisez
  ],
  daisyui: {
    themes: ["light"], // Choisir un autre thème comme "light" ou créer un thème personnalisé
  },
  theme:[
    {
      extend: {},
    },
  ],
  plugins: [require('daisyui')],
}

export default Config