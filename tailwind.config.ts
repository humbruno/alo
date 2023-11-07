import { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: '#1F5E8E',
        'primary-lighter': '#0078C4',
        dark: '#111928',
        'dark-gray': '#6B7280',
        'light-gray': '#E5E7EB',
        light: '#F3F4F6',
        background: '#EFEFF1',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        'semi-bold': '600',
      },
      fontSize: {
        sm: '14px',
        body: '16px',
        lg: '32px',
      },
      lineHeight: {
        sm: '100%',
        md: '125%',
        lg: '150%',
      },
      spacing: {
        // Body equals full height - navbar size
        body: 'calc(100vh - 112px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
    },
  },
  plugins: [],
} as Config;
