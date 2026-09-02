/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F4F1',
        ink: '#211D1B',
        muted: '#7A736C',
        line: '#E4DFD9',
        rose: {
          50: '#FAF3F1',
          100: '#F1E2DE',
          200: '#DFC0BA',
          400: '#B98884',
          500: '#A26665',
          600: '#8A5250',
          700: '#6D3F3D',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
}
