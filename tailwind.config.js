// tailwind.config.js
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'my-gray': {
          '100': '#f7fafc',
          '900': '#1a202c',
        },
      },
      maxWidth: {
        '7xl': '112rem',
      },
      spacing: {
        '72': '18rem',
      },
      fontFamily: {
        sans: ['Inter var', 'ui-sans-serif', 'system-ui'],
      },
      customUtilities: {
        link: {
          base: 'inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-700',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};