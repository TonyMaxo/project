/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-white': {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        primary: '#171717', // Default primary text color to black
        secondary: '#737373', // Default secondary text color to gray
        background: '#f9f9f9', // Default background color to light gray
        surface: '#ffffff', // Default surface/card color to white
        accent: '#525252', // Default accent color to dark gray
        border: '#d4d4d4', // Default border color to light gray
      },
      textColor: {
        DEFAULT: 'var(--tw-colors-primary)', // Use default text color
        primary: 'var(--tw-colors-primary)',
        secondary: 'var(--tw-colors-secondary)',
      },
      backgroundColor: {
        DEFAULT: 'var(--tw-colors-background)', // Use default background color
        primary: 'var(--tw-colors-background)',
        secondary: 'var(--tw-colors-surface)',
        accent: 'var(--tw-colors-accent)',
      },
      borderColor: {
        DEFAULT: 'var(--tw-colors-border)', // Use default border color
        primary: 'var(--tw-colors-border)',
      },
    },
  },
  plugins: [],
};
