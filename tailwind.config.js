import withMT from '@material-tailwind/react/utils/withMT';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default withMT({
  // prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#5b90d9', // lighter shade for dark mode
          default: '#3069b3', // default blue
          dark: '#244f89' // darker shade for light mode
        },
        secondary: {
          light: '#ffd966', // lighter yellow for dark mode
          default: '#FFC632', // main yellow
          dark: '#b38924' // darker yellow for light mode
        },
        neutral: {
          light: '#f3f4f6', // light grey for dark mode backgrounds
          default: '#e5e7eb', // grey for light mode
          dark: '#4b5563' // dark grey for light mode accents
        },
        font: {
          light: '#ffffff', // white font for dark backgrounds (dark mode)
          default: '#e6eeff'
        }
      }
    },
    screens: {
      xs: '475px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px'
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      const colors = theme('colors');
      const variables = Object.keys(colors).flatMap((colorKey) => {
        const colorValues = colors[colorKey];
        return Object.keys(colorValues).map((shade) => {
          return {
            [`--color-${colorKey}-${shade}`]: colorValues[shade]
          };
        });
      });

      addBase({
        ':root': Object.assign({}, ...variables)
      });
    })
  ]
});
