/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container' : '1180px'
      },
      colors: {
        'nav-bg': '#12325d',
        'nav-color': '#fff',
        'hover-color': '#f9004d',
        'heading': 'rgb(31 41 55)',
        'heading-bg': '#212529',
      },
      fontFamily: {
        'lato': "'Lato', sans-serif",
        'raleway': "'Raleway', sans-serif",
      }
    },
  },
  plugins: [],
}

