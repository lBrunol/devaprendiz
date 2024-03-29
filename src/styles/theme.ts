const lightTheme = {
  colors: {
    mainBg: '#FFFFFF',
    mediumBg: '#f0f0f3',
    texts: '#333333',
    textsSecond: '#b600bd',
    highlight: '#b600bd',
    white: '#FFFFFF',
    black: '#000000'
  }
}

const darkTheme = {
  colors: {
    mainBg: '#1e1e1e',
    mediumBg: '#252526',
    texts: '#FFFFFF',
    textsSecond: '#b967f7',
    highlight: '#b967f7',
    white: '#FFFFFF',
    black: '#000000'
  }
}

export default {
  grid: {
    container: '130rem',
    gutter: '1.5rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    bold: 600,
    sizes: {
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.2rem',
      large: '2.6rem',
      xlarge: '3.4rem',
      xxlarge: '5.2rem',
      xxxlarge: '6.0rem'
    }
  },
  darkTheme,
  lightTheme
}
