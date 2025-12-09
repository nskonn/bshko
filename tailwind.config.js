/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#fd9a00',
          50: '#fff7e6',
          100: '#ffedcc',
          200: '#ffd480',
          300: '#ffbb33',
          400: '#ffa200',
          500: '#fd9a00', // Main Brand Color
          600: '#e68a00',
          700: '#cc7a00',
          800: '#a36100',
          900: '#7a4900',
        },
        dark: {
          900: '#0F172A', // Slate 900
          800: '#1E293B', // Slate 800
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(rgba(15, 23, 42, 0.1) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
