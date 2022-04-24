const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Ruda', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
