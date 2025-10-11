// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-outline': (value) => ({
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': value,
          }),
        },
        { values: theme('colors') }
      );
    }),
  ],
};
