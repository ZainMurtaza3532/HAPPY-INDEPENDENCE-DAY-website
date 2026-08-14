/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pakistan-green': '#01411C',
        'pakistan-emerald': '#00A651',
        'pakistan-white': '#FFFFFF',
        'pakistan-dark': '#020B06',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Roboto"', '"Oxygen"', '"Ubuntu"', '"Cantarell"', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 166, 81, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 166, 81, 0.6)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backgroundImage: {
        'gradient-pakistan': 'linear-gradient(135deg, #01411C 0%, #0a2e1f 50%, #051410 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #00A651 0%, #00d966 100%)',
      },
    },
  },
  plugins: [],
}
