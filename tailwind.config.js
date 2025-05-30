/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A6B7B7',
          DEFAULT: '#8A9F9F',
          dark: '#6E8080',
        },
        secondary: {
          light: '#E3D9C1',
          DEFAULT: '#D5C7A9',
          dark: '#C0AF8C',
        },
        dark: {
          light: '#444444',
          DEFAULT: '#333333',
          dark: '#222222',
        },
        light: {
          DEFAULT: '#F5F5F5',
          dark: '#E5E5E5',
        },
        success: {
          light: '#A3E4D7',
          DEFAULT: '#48C9B0',
          dark: '#1E8449',
        },
        warning: {
          light: '#FAD7A0',
          DEFAULT: '#F5B041',
          dark: '#D35400',
        },
        error: {
          light: '#F5B7B1',
          DEFAULT: '#E74C3C',
          dark: '#922B21',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};