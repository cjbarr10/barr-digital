/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy:  '#0D1B2A',
        slate: '#1C3348',
        steel: '#2E5F8A',
        sky:   '#4A9FD4',
        ice:   '#D6EAF5',
        warm:  '#F5F1EB',
        gold:  '#C8A96E',
        mid:   '#6B8CA8',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.68rem',
        'hero': 'clamp(2.4rem, 5vw, 3.8rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
