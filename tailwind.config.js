const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Ruda', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: {
          400: '#f2949c',
          500: '#d95560',
        },
      },
    },
  },
  plugins: [],
};
