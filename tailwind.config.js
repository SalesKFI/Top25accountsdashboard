/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kfi-navy':    '#19315b',
        'kfi-orange':  '#e06e3d',
        'kfi-lgray':   '#ececec',
        'kfi-mgray':   '#666666',
        'kfi-dgray':   '#313642',
      },
      fontFamily: {
        headline: ['"EB Garamond"', 'Georgia', 'serif'],
        body:     ['Roboto', 'Arial', 'sans-serif'],
        label:    ['"Roboto Condensed"', '"Arial Narrow"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
