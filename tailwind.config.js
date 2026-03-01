/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-white',
    'bg-brand-bg-off',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--color-primary)',
          'primary-dark': 'var(--color-primary-dark)',
          accent: 'var(--color-accent)',
          'accent-light': 'var(--color-accent-light)',
          'bg-off': 'var(--color-bg-off)',
        },
      },
    },
  },
  plugins: [],
}