/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e4edff',
          200: '#cfdeff',
          300: '#b3c9ff',
          400: '#818cf8',
          500: '#3461cc',
          600: '#2952b2',
        },
        accent: {
          50: '#fff1f4',
          100: '#ffe4e9',
          200: '#ffccd6',
          300: '#ffa3b5',
          400: '#f472b6',
          500: '#ff4d6a',
          600: '#ed364f',
        },
        dark: {
          950: '#0a0a0f',
          900: '#18181b',
          800: '#27272a',
          700: '#2a2f44',
          600: '#3a4058',
        },
        neutral: {
          300: '#d4d4d8',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
} 