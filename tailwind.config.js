/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' for OS preference
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00a4a6',
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#00a4a6',
          600: '#008385',
          700: '#006264',
          800: '#004142',
          900: '#002121',
          light: '#e6f7f7',
          hover: '#008385',
        },
        secondary: {
          DEFAULT: '#5f6368',
          light: '#9aa0a6',
        },
        success: '#1e8e3e',
        warning: '#f9ab00',
        danger: '#d93025',
        info: '#1a73e8',
        // Background colors
        bg: {
          primary: '#ffffff',
          secondary: '#f8f9fa',
          tertiary: '#e8eaed',
          hover: '#f1f3f4',
          active: '#e8eaed',
        },
        // Text colors
        text: {
          primary: '#202124',
          secondary: '#5f6368',
          tertiary: '#80868b',
        },
        // Border colors
        border: {
          DEFAULT: '#dadce0',
          light: '#e8eaed',
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
        'md': '0 1px 3px 0 rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15)',
        'lg': '0 2px 6px 2px rgba(60, 64, 67, 0.15), 0 8px 24px 4px rgba(60, 64, 67, 0.15)',
        'xl': '0 8px 12px 6px rgba(60, 64, 67, 0.15), 0 16px 32px 8px rgba(60, 64, 67, 0.15)',
      },
    },
  },
  plugins: [],
}
