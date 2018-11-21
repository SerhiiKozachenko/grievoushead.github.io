import Typography from 'typography'

const smoothGreen = '#2d9a30'
const brightGreen = '#00ff07'
const brightOrange = '#ff5700'
const brightRed = '#ff0000'
const deepDarkNavy = '#24283A'
const justBlack = '#000000'

// See below for the full list of options.
// ref: https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2016/src/index.js
const myTheme = new Typography({
  headerFontFamily: ['Source Code Pro', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
  bodyFontFamily: ['Source Code Pro', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
  bodyColor: smoothGreen,
  baseLineHeight: 1.4,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      'background-color': deepDarkNavy,
    },
    a: {
      color: brightOrange,
      textDecoration: 'none',
      transition: 'all .5s cubic-bezier(0, 0.94, 0.6, 0.96)',
      'background-size': '100% 200%',
      'background-position': '0 -100%',
      'background-image': `linear-gradient(to top, transparent 50%, ${justBlack} 50%)`
    },
    'a:hover,a:active': {
      'background-position': '0 0'
    },
    'p::selection': {
      color: brightGreen,
      'background-color': justBlack
    },
    'a::selection': {
      color: brightRed,
      'background-color': justBlack
    }
  //
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  myTheme.injectStyles()
}

export default myTheme
