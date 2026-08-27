/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fbf8f2',
          100: '#f5efe0',
          500: 'var(--color-primary, #C68A2B)',
          600: 'var(--color-primary-dark, #A5701E)',
          900: '#1A150D',
        },
        surface: {
          dark: '#0E1210',
          card: '#161D19',
          border: '#232D27',
        }
      },
      fontFamily: {
        heading: ['var(--font-heading, Sora)', 'sans-serif'],
        body: ['var(--font-body, DM Sans)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
