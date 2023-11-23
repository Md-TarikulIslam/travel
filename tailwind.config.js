const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Open Sans','sans-serif']
      },
      letterSpacing: {
        '2': '2px',
        '6': '6px'
      },
      
    },
  },
  plugins: [],
});