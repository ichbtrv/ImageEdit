const gray =  {
  100: '#eeeeee',
  200: '#e0e0e0',
  300: '#bbbbbb',
  400: '#666666',
  500: '#444444',
  650: '#333',
  600: '#2a2a2a',
  700: '#1f1f1f',
  800: '#181818',
  900: '#0f0f0f',
};

const coolGray =  {
  10: '#f2f4f8',
  20: '#dde1e6',
  30: '#c1c7cd',
  40: '#a2a9b0',
  50: '#878d96',
  60: '#697077',
  70: '#4d5358',
  80: '#343a3f',
  90: '#21272a',
  100: '#121619',
};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: '#f0f2f5',
      // note: default border not working
      // temp workaround is to use variations below
      lightmode: '#f0f2f5',
      darkmode: theme('colors.gray.600', 'currentColor'),
    }),
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',
        whiteHover: '#e8e8e8',


        gray: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          650: '#333',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },
        blue: {
          10: '#edf5ff',
          20: '#d0e2ff',
          30: '#a6c8ff',
          40: '#78a9ff',
          50: '#4589ff',
          60: '#0f62fe',
          70: '#0043ce',
          80: '#002d9c',
          90: '#001d6c',
          100: '#001141',
        },
        blueHover: {
          100: '#001f75',
          90: '#00258a',
          80: '#0039c7',
          70: '#0053ff',
          60: '#0050e6',
          50: '#1f70ff',
          40: '#5c97ff',
          30: '#8ab6ff',
          20: '#b8d3ff',
          10: '#dbebff',
        },
        cyan: {
          10: '#e5f6ff',
          20: '#bae6ff',
          30: '#82cfff',
          40: '#33b1ff',
          50: '#1192e8',
          60: '#0072c3',
          70: '#00539a',
          80: '#003a6d',
          90: '#012749',
          100: '#0617270',
        },
        cyanHover: {
          10: '#cceeff',
          20: '#99daff',
          30: '#57beff',
          40: '#059fff',
          50: '#0f7ec8',
          60: '#005fa3',
          70: '#0066bd',
          80: '#00498a',
          90: '#013360',
          100: '#0b2947',
        },
        teal: {
          10: '#d9fbfb',
          20: '#9ef0f0',
          30: '#3ddbd9',
          40: '#08bdba',
          50: '#009d9a',
          60: '#007d79',
          70: '#005d5d',
          80: '#004144',
          90: '#022b30',
          100: '#081a1c',
        },
        tealHover: {
          10: '#acf6f6',
          20: '#57e5e5',
          30: '#25cac8',
          40: '#07aba9',
          50: '#008a87',
          60: '#006b68',
          70: '#007070',
          80: '#005357',
          90: '#033940',
          100: '#0f3034',
        },
        coolGray: {
          10: '#f2f4f8',
          20: '#dde1e6',
          30: '#c1c7cd',
          40: '#a2a9b0',
          50: '#878d96',
          60: '#697077',
          70: '#4d5358',
          80: '#343a3f',
          90: '#21272a',
          100: '#121619',
        },
        coolGrayHover: {
          10: '#e4e9f1',
          20: '#cdd3da',
          30: '#adb5bd',
          40: '#9199a1',
          50: '#757b85',
          60: '#585e64',
          70: '#5d646a',
          80: '#434a51',
          90: '#2b3236',
          100: '#222a2f',
        },

        dark: {
          100: '#eeeeee',
          200: '#e0e0e0',
          300: '#bbbbbb',
          400: '#666666',
          500: '#444444',
          600: '#2a2a2a',
          700: '#1f1f1f',
          800: '#181818',
          900: '#0f0f0f',
        },

        'typography-body': {
          light: coolGray[600],
          dark: gray[100],
        },
        'typography-body-secondary': {
          light: coolGray[500],
          dark: gray[300],
        },
        'typography-body-strong': {
          light: coolGray[100],
          dark: 'white',
        },
        'typography-body-faded': {
          light: coolGray[400],
          dark: gray[400],
        },

        /* 
          app backgrounds
        */
        'bg-primary': {
          light: 'white',
          dark: gray[800],
        },
        'bg-secondary': {
          light: gray[100],
          dark: gray[700],
        },
        'bg-alt': {
          light: gray[100], // gray[100],
          dark: gray[600],
        },

        /* 
          Forms
        */
        'input-value': {
          light: coolGray[60],
          dark: gray[200],
        },
        'input-placeholder': {
          light: coolGray[30],
          dark: gray[400],
        },
        'input-border': {
          light: coolGray[30],
          dark: gray[500],
        },
        'input-label': {
          light: coolGray[60],
          dark: gray[200],
        },
        'input-border-hover': {
          light: coolGray[40],
          dark: gray[400],
        },
        'input-border-focus': {
          light: coolGray[30],
          dark: gray[300],
        },
      },
    },
  },
  plugins: [],
};
