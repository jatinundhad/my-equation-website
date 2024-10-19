import withMT from '@material-tailwind/react/utils/withMT';
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      md: '750px'
    }
  },
  plugins: []
});
