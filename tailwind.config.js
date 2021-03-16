module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'mobile': {'max': '850px'},
      // => @media (max-width: 850px) { ... }

      'little': {'max': '375px'},
      // => @media (max-width: 375px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
