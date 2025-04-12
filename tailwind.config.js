/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: {
        50: '#f5f3ff',
        100: '#ede9fe',
        200: '#ddd6fe',
        300: '#c4b5fd',
        400: '#a78bfa',
        500: '#8b5cf6',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
        950: '#2e1065',
      },
    },
    keyframes: {
      moveBg: {
        '0%': { backgroundPosition: '0% 0%' },
        '100%': { backgroundPosition: '100% 0%' },
      },
    },
    animation: {
      moveBg: 'moveBg 100s linear infinite',
    },
  },
};
export const plugins = [];
